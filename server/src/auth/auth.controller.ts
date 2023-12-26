import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto, loginDto } from './auth.dto';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/')
  async GetAuth(@Req() req: Request) {
    const jwt: string = req.cookies.jwt;
    const data = await this.authService.GetAuth(jwt);
    return data;
  }

  @Post('/login')
  async postLogin(
    @Body() loginDto: loginDto,
    @Res() res: Response,
  ) {
    const data = await this.authService.postLogin(loginDto);
    if (data?.auth) {
      return res.cookie('jwt', data?.token).json(data.data);
    } else {
      return res.json(data);
    }
  }
  @Post('/signup')
  async UserData(@Body() userdata: UserDto) {
    const data = await this.authService.postUserdata(userdata);
    return data;
  }
}
