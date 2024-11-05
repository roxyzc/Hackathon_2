import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { PointRepository } from './point.repository';
import { User } from '../user/user.entity';
import { Point } from './point.entity';

@Injectable()
export class PointService {
  constructor(
    private readonly entityManager: EntityManager,
    private readonly pointRepository: PointRepository,
  ) {}

  createTransactionPoint({
    point,
    description,
    user,
  }: {
    point: number;
    description: string;
    user: User;
  }): Point {
    try {
      return this.entityManager.create(Point, {
        point,
        description,
        user,
      });
    } catch (error) {
      throw error;
    }
  }

  async saveTransactionPoint(
    point: Point,
    entityManager: EntityManager = this.entityManager,
  ): Promise<Point> {
    try {
      return await entityManager.save(point);
    } catch (error) {
      throw error;
    }
  }

  async findAllPointByUser(user_id: string) {
    try {
      const data = await this.pointRepository.find(user_id);
      if (data.length < 0 || !data) {
        return null;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }
}
