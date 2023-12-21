import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto } from './auth.dto';
import { GuardGuard } from 'src/guard/guard.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(GuardGuard)
  @Post('/login')
 async postLogin(@Body() loginDto:loginDto){
    const data=await this.authService.postLogin(loginDto)
    console.log(data);
    

    
  }
}
