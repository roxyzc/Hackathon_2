import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService as User } from 'src/domain/user/user.service';
import { saveFile, deleteFile } from '../File/service';

@Injectable()
export class UserService {
  constructor(private readonly userService: User) {}

  async updateProfile(
    user_id: string,
    id: string,
    payload: {
      phone?: string;
      name?: string;
      password?: string;
    },
  ) {
    try {
      if (user_id != id) {
        throw new ForbiddenException('Forbidden user');
      }
      const user = await this.userService.existById(id);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      await this.userService.updateProfile(id, payload);

      return {
        msg: 'Update profile successfully',
        success: true,
      };
    } catch (error) {
      throw error;
    }
  }

  async updateImage(user_id: string, id: string, image: Express.Multer.File) {
    try {
      if (user_id != id) {
        throw new ForbiddenException('Forbidden user');
      }
      const user = await this.userService.findOneById(id);
      const oldImageUrl = user.image;

      if (!user) {
        throw new NotFoundException('User not found');
      }

      const url = saveFile(image);

      await this.userService.updateImage(id, url);

      if (oldImageUrl) {
        deleteFile(oldImageUrl);
      }

      return {
        msg: 'Update profile successfully',
        success: true,
      };
    } catch (error) {
      throw error;
    }
  }
}
