import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    private readonly entityManager: EntityManager,
    private readonly userRepository: UserRepository,
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

  async findOneById(user_id: string): Promise<User> {
    try {
      const data = await this.userRepository.findOne(user_id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async existById(user_id: string): Promise<boolean> {
    try {
      const data = await this.userRepository.exist(user_id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async existByUsername(username: string): Promise<boolean> {
    try {
      const data = await this.userRepository.exist(username);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async updateProfile(
    id: string,
    payload: {
      phone?: string;
      email?: string;
      name?: string;
      location?: string;
    },
  ) {
    try {
      const data = await this.userRepository.update(id, payload);
      if (!data) return false;
      return true;
    } catch (error) {
      throw error;
    }
  }

  async updateImage(id: string, url: string) {
    try {
      const data = await this.userRepository.update(id, { image: url });
      if (!data) return false;
      return true;
    } catch (error) {
      throw error;
    }
  }
}
