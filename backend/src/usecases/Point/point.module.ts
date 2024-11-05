import { Module } from '@nestjs/common';
import { PointModule as Point } from 'src/domain/point/point.module';
import { PointController } from './point.controller';
import { PointService } from './point.service';

@Module({
  imports: [Point],
  controllers: [PointController],
  providers: [PointService],
})
export class PointModule {}
