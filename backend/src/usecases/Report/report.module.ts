import { ReportModule as Report } from 'src/domain/report/report.module';
import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';
import { UserModule } from 'src/domain/user/user.module';
import { PointModule } from 'src/domain/point/point.module';
import { UserNotificationModule } from 'src/domain/user_notifications/user_notification.module';

@Module({
  imports: [Report, UserModule, PointModule, UserNotificationModule],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
