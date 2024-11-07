import { Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { PointService } from './point.service';
import { User } from 'src/infrastructure/common/decorators/user.decorator';
import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { ROLE_USER } from 'src/domain/user/user.entity';

@Controller('point')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @Roles(ROLE_USER.USER)
  @Post(':report_id')
  async getPoint(
    @Param('report_id', ParseUUIDPipe) report_id: string,
    @User()
    user: {
      id: string;
    },
  ) {
    return await this.pointService.getPoint(user.id, report_id);
  }

  @Roles(ROLE_USER.USER)
  @Get()
  async getPointUser(@User() user: { id: string }) {
    return await this.pointService.me(user.id);
  }
}
