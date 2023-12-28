
import {
  Table,
  Column,
  Model,
  AutoIncrement,
  Unique,
  IsEmail,
  PrimaryKey,
  DataType,
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

  @Column({
    type: DataType.STRING(320), // Set an appropriate length for email addresses
  })
  name: string;

  @Unique
  @IsEmail
  @Column({
    type: DataType.STRING(320), // Set an appropriate length for email addresses
  })
  email: string;

  @Column
  password: string

  @Column({
    type:DataType.TEXT
  })
  image: string;
}


