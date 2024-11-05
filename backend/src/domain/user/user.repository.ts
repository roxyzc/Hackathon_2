import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findOne(identifier: string): Promise<User> {
    const data = await this.userRepository.findOne({
      where: [
        { user_id: identifier },
        { username: identifier },
        { email: identifier },
      ],
    });

    if (!data) return null;
    return data;
  }

  async exist(identifier: string): Promise<boolean> {
    const exist = await this.userRepository.exists({
      where: [
        { user_id: identifier },
        { username: identifier },
        { email: identifier },
      ],
    });

    return exist;
  }

  async update(
    id: string,
    payload: {
      phone?: string;
      name?: string;
      email?: string;
      location?: string;
      image?: string;
    },
  ) {
    const data = await this.userRepository.update(id, payload);

    if (!data) return null;

    return data;
  }
}
