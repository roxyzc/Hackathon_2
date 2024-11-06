import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserNotification } from './user_notification.entity';

@Injectable()
export class UserNotificationRepository {
  constructor(
    @InjectRepository(UserNotification)
    private readonly userNotificationRepository: Repository<UserNotification>,
  ) {}

  async findOne(identifier: string): Promise<UserNotification> {
    const data = await this.userNotificationRepository.findOne({
      where: [{ user_notification_id: identifier }],
    });

    if (!data) return null;
    return data;
  }

  async findAndCount(identifier: string, page: number, limit: number) {
    const [data, total] = await this.userNotificationRepository.findAndCount({
      where: { report: { user: { user_id: identifier } } },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      msg: 'success',
      success: true,
      data,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }
}
