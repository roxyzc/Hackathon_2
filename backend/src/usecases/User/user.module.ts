import { Module } from '@nestjs/common';
import { UserModule as User } from 'src/domain/user/user.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [User],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
