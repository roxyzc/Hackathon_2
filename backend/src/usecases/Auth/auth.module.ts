import { Module } from '@nestjs/common';
import { UserModule } from 'src/domain/user/user.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TokenModule } from 'src/infrastructure/authentication/token/token.module';

@Module({
  imports: [UserModule, TokenModule],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
