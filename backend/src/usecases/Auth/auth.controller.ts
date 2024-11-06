import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { User } from 'src/infrastructure/common/decorators/user.decorator';
import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { ROLE_USER } from 'src/domain/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() data: RegisterDto) {
    return await this.authService.register(data);
  }

  @Post('login')
  async login(@Body() data: LoginDto) {
    return await this.authService.login(data);
  }

  @Roles(ROLE_USER.ADMIN, ROLE_USER.USER)
  @Get('me')
  async getMe(@User() user: { id: string }) {
    console.log(user);
    return await this.authService.me(user.id);
  }
}
