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
import { FileInterceptor } from '@nestjs/platform-express';

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
      return res.cookie('jwt', data?.token).json({auth:data.auth});
    } else {
      return res.json({auth:data.auth});
    }
  }
  @Post('/signup')
  async UserData(@Body() userdata: UserDto) {

    try {
    const data = await this.authService.postUserdata(userdata);
    return data;
  } catch (error) {
      console.log(error);
      
  }
  }
  @Post('/googleauth')
  async GUserData(@Body() userdata: UserDto,@Res() res:Response) {

    try {      
    const data = await this.authService.postGUserdata(userdata);
    if (data?.auth) {
      return res.cookie('jwt', data?.token).json({auth:data.auth});
    } else {
      return res.json({auth:data.auth});
    }
  } catch (error) {
      console.log(error);
      return res.json({auth:false});

  }
  }

  @Get('/logout')
  async GetLogout(@Res() res: Response) {
    res.cookie("jwt",'').json({auth:false})
  }
}
