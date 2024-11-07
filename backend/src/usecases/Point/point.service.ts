import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PointService as Point } from 'src/domain/point/point.service';
import { STATUS_REPORT } from 'src/domain/report/report.entity';
import { ReportService } from 'src/domain/report/report.service';
import { EntityManager } from 'typeorm';

@Injectable()
export class PointService {
  constructor(
    private readonly entityManager: EntityManager,
    private readonly pointService: Point,
    private readonly reportService: ReportService,
  ) {}

  async me(id: string) {
    try {
      const data = await this.pointService.findAllPointByUser(id);

      if (!data) throw new NotFoundException('Point not found');

      const point = data
        .map((point) => {
          return point.point;
        })
        .reduce((acc, point) => acc + point);

      return {
        success: true,
        msg: 'Success',
        data: {
          point,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async getPoint(user_id: string, report_id: string) {
    try {
      await this.entityManager.transaction(async (entityManager) => {
        const report = await this.reportService.findOneByReportAndUser(
          report_id,
          user_id,
        );

        if (!report) throw new NotFoundException('Report not found');
        if (report.status !== STATUS_REPORT.DISETUJUI)
          throw new UnauthorizedException('Report has not been verified');

        if (report.point)
          throw new UnauthorizedException('points have been claimed');

        const transaction_point = this.pointService.createTransactionPoint({
          point: 10,
          description: 'Earned points for submitting a new report',
          user: report.user,
          report,
        });

        await this.pointService.saveTransactionPoint(
          transaction_point,
          entityManager,
        );
      });

      return {
        msg: 'Point successfully claimed',
        success: true,
      };
    } catch (error) {
      throw error;
    }
  }
}
