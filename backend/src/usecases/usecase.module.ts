import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { TokenModule } from 'src/infrastructure/authentication/token/token.module';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from 'src/infrastructure/common/guard/role.guard';
import { UserModule } from './User/user.module';
import { ReportModule } from './Report/report.module';
import { PointModule } from './Point/point.module';
import { NotificationModule } from './Notification/notification.module';

@Module({
  imports: [
    TokenModule,
    AuthModule,
    UserModule,
    ReportModule,
    PointModule,
    NotificationModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class UsecaseModule {}
