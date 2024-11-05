import { Module } from '@nestjs/common';
import { UserNotificationModule } from 'src/domain/user_notifications/user_notification.module';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';

@Module({
  imports: [UserNotificationModule],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationModule {}
