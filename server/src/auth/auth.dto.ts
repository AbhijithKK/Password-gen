import { DataType } from "sequelize";

export interface loginDto{
    email:string;
    password:string;
}

export interface userReturnDto{
    auth:boolean;
    data?:string|number|undefined;
    token?:string|undefined
}

import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class UserDto {
  @IsNotEmpty({ message: 'Must be add your Name' })
  @Length(3, 225, { message: 'Name atleast 3 characters Required' })
  name: string;
  @IsEmail({}, { message: 'Enter a proper Email Address' })
  email: string;
  @IsNotEmpty({ message: 'Enter a Strong password' })
  @Length(8, 225, { message: 'Password atleast 8 characters Required' })
  password: string;
  image: string;
}
