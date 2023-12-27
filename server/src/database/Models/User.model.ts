import { Types } from 'mysql2';
import { CHAR } from 'sequelize';
import { CharDataType, DataType } from 'sequelize';
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  Unique,
  IsEmail,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'userdetais',
  timestamps: true,
})
export class UsrModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Unique
  @IsEmail
  @Column
  email: string;

  @Column
  password: string

  @Column
  image: string;
}


