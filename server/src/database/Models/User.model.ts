import { Table, Column, Model, AutoIncrement, Unique, IsNull, IsEmail } from 'sequelize-typescript';

@Table
export class UsrModel extends Model {
  @Column
  @AutoIncrement
  id: number;

  @Column
  @IsNull
  name: string;

  @Column
  @Unique
  @IsEmail
  email: string;

  @Column
  password: string;

  @Column
  image: string;
}
