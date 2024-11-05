import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Point } from './point.entity';
import { PointService } from './point.service';
import { PointRepository } from './point.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Point])],
  providers: [PointService, PointRepository],
  exports: [PointService],
})
export class PointModule {}
