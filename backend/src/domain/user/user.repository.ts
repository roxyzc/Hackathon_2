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
      where: [{ username: identifier }, { email: identifier }],
    });

    if (!data) return null;
    return data;
  }

  async exist(identifier: string): Promise<boolean> {
    const exist = await this.userRepository.exists({
      where: [{ username: identifier }, { email: identifier }],
    });

    return exist;
  }
}
