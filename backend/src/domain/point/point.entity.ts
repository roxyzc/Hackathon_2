import { Report } from '../report/report.entity';
import { User } from '../user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';

interface IPoint {
  point_id: string;
  point: number;
  description: string;
  created_at: number;
  updated_at: number;
}

@Entity()
export class Point implements IPoint {
  @PrimaryGeneratedColumn('uuid')
  point_id: string;

  @Column({
    name: 'point',
    type: 'integer',
    default: 0,
  })
  point: number;

  @Column({
    name: 'description',
    type: 'varchar',
    length: 60,
    nullable: true,
  })
  description: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'user_id' })
  user: User;

  @OneToOne(() => Report, (report) => report.point, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'report' })
  report?: Report;

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
