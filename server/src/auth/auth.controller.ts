import { Body, Controller, Post, Req, Res, UseGuards, } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto, loginDto } from './auth.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('/login')
  
 async postLogin(@Body() loginDto:loginDto ,@Req() req:Request,@Res() res:Response){
  
    const data=await this.authService.postLogin(loginDto)
    if (data?.auth) {
      
    return  res.cookie("jwt",data?.token).json(data.data)
    }else{
    return  res.json(data)
    } 
  }
  @Post('/signup')
  async UserData(@Body() userdata:UserDto){
    const data=await this.authService.postUserdata(userdata)
    return data
  }
}
