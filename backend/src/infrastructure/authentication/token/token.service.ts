import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';

interface IPayload {
  username: string;
  email: string;
  role: string;
}

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(payload: IPayload, options?: JwtSignOptions) {
    const token = await this.jwtService.signAsync(payload, options || {});
    return token;
  }

  async verifyToken(token: string, options?: JwtSignOptions): Promise<any> {
    return await this.jwtService
      .verifyAsync(token, options || {})
      .catch((error) => {
        if (error.message === 'invalid signature') {
          throw new UnauthorizedException('Token tidak sah');
        }

        throw error;
      });
  }
}
