import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Index,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Report } from '../report/report.entity';
import { Point } from '../point/point.entity';

export enum ROLE_USER {
  USER = 'user',
  ADMIN = 'admin',
}

export enum STATUS_USER {
  ACTIVE = 'active',
  PENDING = 'pending',
}

interface IUser {
  user_id: string;
  email: string;
  password: string;
  status: STATUS_USER;
  role: ROLE_USER;
  created_at: number;
  updated_at: number;
}

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({
    name: 'username',
    type: 'varchar',
    unique: true,
    length: 30,
    nullable: false,
  })
  @Index('i_username')
  username: string;

  @Column({
    name: 'email',
    type: 'varchar',
    unique: true,
    length: 317,
    nullable: false,
  })
  email: string;

  @Column({ name: 'password', type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ name: 'name', type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ name: 'phone', type: 'varchar', length: 13, nullable: false })
  phone: string;

  @Column({ name: 'image', type: 'varchar', length: 255, nullable: true })
  image?: string;

  @Column({ name: 'location', type: 'varchar', nullable: true })
  location?: string;

  @Column({ enum: STATUS_USER, default: STATUS_USER.ACTIVE, type: 'enum' })
  status: STATUS_USER;

  @Column({ enum: ROLE_USER, default: ROLE_USER.USER, type: 'enum' })
  role: ROLE_USER;

  @OneToMany(() => Report, (report) => report.user)
  report: Report[];

  @OneToMany(() => Point, (point) => point.user)
  point: Point[];

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
