import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { UserNotificationRepository } from './user_notification.repository';
import { Report } from '../report/report.entity';
import { NOTIFICATION, UserNotification } from './user_notification.entity';

@Injectable()
export class UserNotificationService {
  constructor(
    private readonly entityManager: EntityManager,
    private readonly userNotificationRepository: UserNotificationRepository,
  ) {}

  createTransactionNotification({
    description,
    report,
    title,
  }: {
    description: string;
    report: Report;
    title?: NOTIFICATION;
  }): UserNotification {
    try {
      return this.entityManager.create(UserNotification, {
        description,
        report,
        title,
      });
    } catch (error) {
      throw error;
    }
  }

  async saveTransactionNotification(
    userNotification: UserNotification,
    entityManager: EntityManager = this.entityManager,
  ): Promise<UserNotification> {
    try {
      return await entityManager.save(userNotification);
    } catch (error) {
      throw error;
    }
  }

  async findNotificationByUser(user_id: string, page = 10, limit = 10) {
    try {
      return await this.userNotificationRepository.findAndCount(
        user_id,
        page,
        limit,
      );
    } catch (error) {
      throw error;
    }
  }

  async findNotificationById(id: string): Promise<UserNotification> {
    try {
      return await this.userNotificationRepository.findOne(id);
    } catch (error) {
      throw error;
    }
  }
}
