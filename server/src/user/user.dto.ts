import { IsNotEmpty, Length } from 'class-validator';

export class passDto {
  @IsNotEmpty({ message: 'Must be add an Id' })
  userId:number
  @IsNotEmpty({ message: 'Must be add Name' })
  @Length(3, 225, { message: 'Name atleast 3 characters Required' })
  appName: string;
  
  @IsNotEmpty({ message: 'Genarate a Strong password' })
  @Length(8, 225, { message: 'Password atleast 8 characters Required' })
  password: string;
 
}
