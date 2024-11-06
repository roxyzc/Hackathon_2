import { Injectable } from '@nestjs/common';
import { ReportRepository } from './report.repository';
import { EntityManager } from 'typeorm';
import { Report } from './report.entity';
import { User } from '../user/user.entity';

@Injectable()
export class ReportService {
  constructor(
    private readonly entityManager: EntityManager,
    private readonly reportRepository: ReportRepository,
  ) {}

  createTransactionReport({
    description,
    no_report,
    location,
    anonim,
    files,
    user,
  }: {
    description: string;
    no_report: string;
    location: string;
    anonim: boolean;
    files: string[];
    user: User;
  }): Report {
    try {
      return this.entityManager.create(Report, {
        description,
        no_report,
        location,
        anonim,
        files,
        user,
      });
    } catch (error) {
      throw error;
    }
  }

  async saveTransactionReport(
    report: Report,
    entityManager: EntityManager = this.entityManager,
  ): Promise<Report> {
    try {
      return await entityManager.save(report);
    } catch (error) {
      throw error;
    }
  }

  async findReportByUser(user: User, page = 1, limit = 10) {
    try {
      return await this.reportRepository.findAndCount(user, page, limit);
    } catch (error) {
      throw error;
    }
  }

  async findOneByNoReport(no_report: string) {
    try {
      return await this.reportRepository.findOne(no_report);
    } catch (error) {
      throw error;
    }
  }
}
