import {
  BadRequestException,
  Body,
  Controller,
  Param,
  Put,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ROLE_USER } from 'src/domain/user/user.entity';
import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { User } from 'src/infrastructure/common/decorators/user.decorator';
import { UserService } from './user.service';
import { UpdateProfileDto } from './dtos/update-profile.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles(ROLE_USER.ADMIN, ROLE_USER.USER)
  @Put('profile/:id')
  async updateProfile(
    @Param('id') id: string,
    @User() user: { id: string },
    @Body() payload: UpdateProfileDto,
  ) {
    return this.userService.updateProfile(user.id, id, payload);
  }

  @Roles(ROLE_USER.USER)
  @Put('image/:id')
  @UseInterceptors(
    FilesInterceptor('image', 1, {
      limits: { fileSize: 1 * 1024 * 1024 },
      fileFilter: (req, file, callback) => {
        const allowedTypes = ['image/png', 'image/jpeg'];
        const isAllowed = allowedTypes.includes(file.mimetype);

        if (isAllowed) {
          callback(null, true);
        } else {
          callback(
            new Error('Invalid file type. Only PNG And JPG files are allowed.'),
            false,
          );
        }
      },
    }),
  )
  async updateImage(
    @Param('id') id: string,
    @UploadedFiles() image: Express.Multer.File,
    @User() user: { id: string },
  ) {
    if (!image) {
      throw new BadRequestException('You must upload at least one file');
    }

    return this.userService.updateImage(user.id, id, image[0]);
  }
}
