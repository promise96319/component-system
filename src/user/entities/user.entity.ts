import { Column, CreateDateColumn, Entity, ObjectIdColumn } from 'typeorm';
import { ObjectId } from 'mongodb';

export enum Role {
  ADMIN = 'admin',
  DEVELOPMENT = 'development',
  GUEST = 'guest',
}

@Entity()
export class User {
  @ObjectIdColumn()
  _id: ObjectId;

  @ObjectIdColumn()
  id: ObjectId | string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  pwd: string;

  @Column()
  avatar: string;

  @CreateDateColumn({ name: 'createdAt' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updatedAt' })
  updatedAt: Date;

  @Column('boolean', { default: false })
  isDeleted: boolean;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.GUEST,
  })
  role: Role = Role.GUEST;
}
