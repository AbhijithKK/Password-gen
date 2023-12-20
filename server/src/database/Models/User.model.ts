import { Table, Column, Model, AutoIncrement, Unique, IsNull, IsEmail, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName:'userdetais',timestamps:true
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
  password: string;

  @Column
  image: string;
}
