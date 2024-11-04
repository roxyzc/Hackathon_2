import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly entityManager: EntityManager,
  ) {}

  createTransactionUser({
    name,
    phone,
    username,
    email,
    password,
  }: {
    name: string;
    phone: string;
    username: string;
    email: string;
    password: string;
  }): User {
    try {
      return this.entityManager.create(User, {
        name,
        phone,
        username,
        email,
        password,
      });
    } catch (error) {
      throw error;
    }
  }

  async saveTransactionUser(
    user: User,
    entityManager: EntityManager = this.entityManager,
  ): Promise<User> {
    try {
      return await entityManager.save(user);
    } catch (error) {
      throw error;
    }
  }

  async findOneByUsername(username: string): Promise<User> {
    try {
      const data = await this.userRepository.findOne(username);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async existByUsername(username: string) {
    try {
      const data = await this.userRepository.exist(username);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
