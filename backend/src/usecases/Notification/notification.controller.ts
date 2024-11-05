import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { ROLE_USER } from 'src/domain/user/user.entity';
import { User } from 'src/infrastructure/common/decorators/user.decorator';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Roles(ROLE_USER.ADMIN, ROLE_USER.USER)
  @Get()
  async getNotifications(
    @User() user: { id: string },
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page?: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit?: number,
  ) {
    return await this.notificationService.getNotifications(
      user.id,
      page,
      limit,
    );
  }

  @Roles(ROLE_USER.USER)
  @Get(':id')
  async getNotification(id: string) {
    return await this.notificationService.getNotification(id);
  }
}
