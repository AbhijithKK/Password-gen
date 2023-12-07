import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/home')
 async Home (){
    const data=await this.userService.GetHome()
    return data
  }

}
