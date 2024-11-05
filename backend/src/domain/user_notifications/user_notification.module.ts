import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserNotification } from './user_notification.entity';
import { UserNotificationService } from './user_notification.service';
import { UserNotificationRepository } from './user_notification.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserNotification])],
  providers: [UserNotificationService, UserNotificationRepository],
  exports: [UserNotificationService],
})
export class UserNotificationModule {}
