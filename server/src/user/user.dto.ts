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
