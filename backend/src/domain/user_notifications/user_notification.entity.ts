import { Report } from '../report/report.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

interface IUserNotification {
  user_notification_id: string;
  description: string;
  created_at: number;
  updated_at: number;
}

export enum NOTIFICATION {
  DIAJUKAN = 'Laporan Sedang Diajukan',
  DIPROSES = 'Laporan Sedang Diproses',
  DISETUJUI = 'Laporan Sudah Diverifikasi',
}

@Entity()
export class UserNotification implements IUserNotification {
  @PrimaryGeneratedColumn('uuid')
  user_notification_id: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({
    name: 'title',
    enum: NOTIFICATION,
    default: NOTIFICATION.DIAJUKAN,
    type: 'enum',
  })
  title: NOTIFICATION;

  @Column({
    name: 'status',
    type: 'boolean',
    default: false,
  })
  status: boolean;

  @ManyToOne(() => Report)
  @JoinColumn({ name: 'report_id', referencedColumnName: 'report_id' })
  report: Report;

  @CreateDateColumn({
    type: 'bigint',
    nullable: false,
    default: new Date().getTime(),
    unsigned: true,
  })
  created_at: number;

  @CreateDateColumn({
    type: 'bigint',
    nullable: false,
    default: new Date().getTime(),
    unsigned: true,
  })
  updated_at: number;
}
