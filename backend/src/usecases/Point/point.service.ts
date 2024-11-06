import { Injectable, NotFoundException } from '@nestjs/common';
import { PointService as Point } from 'src/domain/point/point.service';

@Injectable()
export class PointService {
  constructor(private readonly pointService: Point) {}

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
}
