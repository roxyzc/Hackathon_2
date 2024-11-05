import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Point } from './point.entity';

@Injectable()
export class PointRepository {
  constructor(
    @InjectRepository(Point)
    private readonly pointRepository: Repository<Point>,
  ) {}

  async find(user_id: string) {
    return await this.pointRepository.find({ where: { user: { user_id } } });
  }
}
