import {
  BadRequestException,
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { Roles } from 'src/infrastructure/common/decorators/roles.decorator';
import { ROLE_USER } from 'src/domain/user/user.entity';
import { ReportService } from './report.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { User } from 'src/infrastructure/common/decorators/user.decorator';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Roles(ROLE_USER.USER)
  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 1, {
      limits: { fileSize: 5 * 1024 * 1024 },
      fileFilter: (req, file, callback) => {
        const allowedTypes = ['image/png', 'image/jpeg', 'video/mp4'];
        const isAllowed = allowedTypes.includes(file.mimetype);

        if (isAllowed) {
          callback(null, true);
        } else {
          callback(
            new Error(
              'Invalid file type. Only PNG, JPG, and MP4 files are allowed.',
            ),
            false,
          );
        }
      },
    }),
  )
  async createReport(
    @UploadedFiles() files: Express.Multer.File[],
    @Body() body: CreateReportDto,
    @User() user: { id: string },
  ) {
    if (files.length < 1 || files.length > 1) {
      throw new BadRequestException('You must upload at least one file');
    }

    return this.reportService.createReport(user.id, body, files);
  }

  @Roles(ROLE_USER.USER)
  @Get()
  async getReports(
    @User() user: { id: string },
    @Query('page', new DefaultValuePipe(1), ParseIntPipe)
    page?: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe)
    limit?: number,
  ) {
    return this.reportService.getReportByUser(user.id, page, limit);
  }

  @Roles(ROLE_USER.USER, ROLE_USER.ADMIN)
  @Get('/:id')
  async getReport(@Param('id') id: string) {
    return this.reportService.getReport(id);
  }
}
