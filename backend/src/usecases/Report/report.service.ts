import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { ReportService as Report } from 'src/domain/report/report.service';
import { UserService } from 'src/domain/user/user.service';
import { deleteFile, saveFile } from '../File/service';
import { PointService } from 'src/domain/point/point.service';
import { UserNotificationService } from 'src/domain/user_notifications/user_notification.service';

@Injectable()
export class ReportService {
  constructor(
    private readonly entityManager: EntityManager,
    private readonly reportService: Report,
    private readonly userService: UserService,
    private readonly pointService: PointService,
    private readonly userNotificationService: UserNotificationService,
  ) {}

  async createReport(
    id: string,
    payload: {
      description: string;
      location: string;
      anonim: boolean;
    },
    files: Express.Multer.File[],
  ) {
    let url;
    try {
      const generateRandom12DigitNumber = (): string => {
        return (
          Math.floor(Math.random() * 90000000000) + 12345678910
        ).toString();
      };

      const no_report = generateRandom12DigitNumber();

      await this.entityManager.transaction(async (entityManager) => {
        const fileUrls = files.map((file) => {
          return saveFile(file);
        });

        url = fileUrls;

        const user = await this.userService.findOneById(id);

        if (!user) throw new NotFoundException('User not found');

        const [transaction_report, transaction_point] = await Promise.all([
          this.reportService.createTransactionReport({
            ...payload,
            description: payload.description.trim(),
            no_report,
            files: fileUrls,
            user,
          }),
          this.pointService.createTransactionPoint({
            point: 10,
            description: 'Earned points for submitting a new report',
            user,
          }),
        ]);

        await this.pointService.saveTransactionPoint(
          transaction_point,
          entityManager,
        );

        const report = await this.reportService.saveTransactionReport(
          transaction_report,
          entityManager,
        );

        const transaction_notification =
          this.userNotificationService.createTransactionNotification({
            description: `Laporan kamu dengan nomor aduan ${no_report} telah berhasil diajukan! Terima kasih atas kontribusi kamu dalam melaporkan kondisi di sekitar. Saat ini, laporan kamu sedang diajukan ke tim terkait untuk ditindaklanjuti. Kamu bisa memantau perkembangan dan status terbaru dari laporan tersebut dengan mengunjungi halaman 'Lacak Aduan' di platform kami. Kami sangat menghargai peran aktifmu dalam menjaga dan membangun lingkungan yang lebih baik. Terus berpartisipasi untuk perubahan positif di komunitasmu!`,
            report,
          });
        await this.userNotificationService.saveTransactionNotification(
          transaction_notification,
          entityManager,
        );
      });

      return {
        success: true,
        msg: 'Report saved successfully',
        no_report,
      };
    } catch (error) {
      if (url) {
        deleteFile(url);
      }
      throw error;
    }
  }

  async getReportByUser(id: string, page: number, limit: number) {
    try {
      const user = await this.userService.findOneById(id);
      const data = await this.reportService.findReportByUser(user, page, limit);

      return data;
    } catch (error) {
      throw error;
    }
  }

  async getReport(no_report: string) {
    try {
      const data = await this.reportService.findOneByNoReport(no_report);
      if (!data) {
        throw new NotFoundException('Report not found');
      }

      return {
        success: true,
        msg: 'success',
        data,
      };
    } catch (error) {
      throw error;
    }
  }
}
