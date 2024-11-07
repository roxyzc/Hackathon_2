import { Module } from '@nestjs/common';
import { PointModule as Point } from 'src/domain/point/point.module';
import { PointController } from './point.controller';
import { PointService } from './point.service';
import { ReportModule } from 'src/domain/report/report.module';

@Module({
  imports: [Point, ReportModule],
  controllers: [PointController],
  providers: [PointService],
})
export class PointModule {}
