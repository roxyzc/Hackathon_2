import { User } from '../user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { UserNotification } from '../user_notifications/user_notification.entity';
import { Point } from '../point/point.entity';

export enum STATUS_REPORT {
  DIAJUKAN = 'diajukan',
  DIPROSES = 'diproses',
  DISETUJUI = 'disetujui',
}

interface IReport {
  report_id: string;
  no_report: string;
  description: string;
  files: string[];
  location: string;
  status: STATUS_REPORT;
  created_at: number;
  updated_at: number;
}

@Entity()
export class Report implements IReport {
  @PrimaryGeneratedColumn('uuid')
  report_id: string;

  @Column({
    name: 'no_report',
    type: 'varchar',
    length: 12,
    nullable: false,
  })
  no_report: string;

  @Column({
    name: 'description',
    type: 'text',
    nullable: false,
  })
  description: string;

  @Column({
    name: 'files',
    type: 'varchar',
    nullable: false,
  })
  files: string[];

  @Column({
    name: 'location',
    type: 'varchar',
    nullable: false,
  })
  location: string;

  @Column({
    name: 'status',
    enum: STATUS_REPORT,
    default: STATUS_REPORT.DIAJUKAN,
    type: 'enum',
  })
  status: STATUS_REPORT;

  @Column({
    name: 'anonim',
    type: 'boolean',
    default: false,
  })
  anonim: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  user: User;

  @OneToMany(
    () => UserNotification,
    (userNotification) => userNotification.report,
  )
  userNotification: UserNotification[];

  @OneToOne(() => Point, (point) => point.report)
  point?: Point;

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
