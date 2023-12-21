import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(BeltGuard)
  @Get('/home')
 async Home (){
    const data=await this.userService.GetHome()
    return data
  }
  @Post('/userdata')
  async UserData(@Body() userdata:UserDto){
    const data=await this.userService.postUserdata(userdata)
    return data
  }

}
