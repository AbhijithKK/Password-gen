import {
  AutoIncrement,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { UsrModel } from './User.model';

@Table({
  tableName: 'passwordStores',
  createdAt: true,
})
export class PasswordStoreModel extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @ForeignKey(()=>UsrModel)
  @Column
  userId: number;

  @Column
  appName: string;

  @Column
  password: string;
}
