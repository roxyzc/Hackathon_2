import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { TokenModule } from 'src/infrastructure/authentication/token/token.module';

@Module({
  imports: [TokenModule, AuthModule],
})
export class UsecaseModule {}
