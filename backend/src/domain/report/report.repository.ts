import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';
import { User } from '../user/user.entity';

@Injectable()
export class ReportRepository {
  constructor(
    @InjectRepository(Report)
    private readonly reportRepository: Repository<Report>,
  ) {}

  async findAndCount(user: User, page: number, limit: number) {
    const [data, total] = await this.reportRepository.findAndCount({
      where: { user },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      msg: 'success',
      success: true,
      data,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findOne(identifier: string): Promise<Report> {
    const data = await this.reportRepository.findOne({
      where: [{ report_id: identifier }, { no_report: identifier }],
    });

    return data;
  }

  async findOneRelations(identifier: string): Promise<Report> {
    const data = await this.reportRepository.findOne({
      where: [{ report_id: identifier }, { no_report: identifier }],
      relations: { user: true, point: true },
      select: { user: { user_id: true } },
    });

    if (!data) {
      return null;
    }

    return data;
  }
}
