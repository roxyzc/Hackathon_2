import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { UserService } from 'src/domain/user/user.service';
import * as bcrypt from 'bcrypt';

interface IUser {
  username: string;
  phone: string;
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly entityManager: EntityManager,
    private readonly userService: UserService,
  ) {}

  async register(data: IUser) {
    try {
      const findUser = await this.userService.existByUsername(data.username);

      if (findUser) {
        throw new ConflictException(
          'User already exists, please use a different username or email',
        );
      }

      await this.entityManager.transaction(async (entityManager) => {
        const transaction = this.userService.createTransactionUser(data);
        await this.userService.saveTransactionUser(transaction, entityManager);
      });

      return {
        msg: 'User successfully created',
        success: true,
      };
    } catch (error) {
      throw error;
    }
  }

  async login(data: Pick<IUser, 'username' | 'password'>) {
    try {
      const user = await this.userService.findOneByUsername(data.username);
      if (!user) {
        throw new NotFoundException('User not found');
      }

      const decryptPassword = await bcrypt.compare(
        data.password,
        user.password,
      );

      if (!decryptPassword) {
        throw new BadRequestException('Incorrect password, please try again');
      }

      return {
        msg: 'Login successful',
        success: true,
      };
    } catch (error) {
      throw error;
    }
  }
}
