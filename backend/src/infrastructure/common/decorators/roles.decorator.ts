import { SetMetadata } from '@nestjs/common';
import { ROLE_USER } from 'src/domain/user/user.entity';

export const Roles = (...roles: ROLE_USER[]) => SetMetadata('roles', roles);
