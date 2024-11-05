import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { ReportService } from './report.service';
import { ReportRepository } from './report.repository';
import { ReportSubscriber } from './report.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Report])],
  providers: [ReportService, ReportRepository, ReportSubscriber],
  exports: [ReportService],
})
export class ReportModule {}
