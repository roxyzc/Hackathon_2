import { Injectable, NotFoundException } from '@nestjs/common';
import { UserNotificationService } from 'src/domain/user_notifications/user_notification.service';

@Injectable()
export class NotificationService {
  constructor(
    private readonly userNotificationService: UserNotificationService,
  ) {}

  async getNotifications(user_id: string, page = 10, limit = 10) {
    try {
      const data = await this.userNotificationService.findNotificationByUser(
        user_id,
        page,
        limit,
      );

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getNotification(id: string) {
    try {
      const data = await this.userNotificationService.findNotificationById(id);
      if (!data) throw new NotFoundException('Notification not found');
      return {
        success: true,
        msg: 'Success',
        data,
      };
    } catch (error) {
      throw error;
    }
  }
}
