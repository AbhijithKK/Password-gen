import { Body, Controller, Delete, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { BeltGuard } from 'src/belt/belt.guard';
import { passDto } from './user.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService
    ,private Jwtservice:JwtService) {}
  @UseGuards(BeltGuard)
  @Get('/home')
 async Home (@Req() req:Request){
  const jwt=req.cookies.jwt
  const jwtData=await this.Jwtservice.verify(jwt,{secret:process.env.JWT_KEY})
  console.log(jwtData.data);
  
    const data=await this.userService.GetHome(jwtData.data)
    return data
  }


  @UseGuards(BeltGuard)
  @Post('/genaratepassword')
  async UserData(@Body() userdata:passDto){
  
    
    const data=await this.userService.postPassData(userdata)
    return data
  }

  @UseGuards(BeltGuard)
  @Delete('/deletepasswor')
  async DeletePassword(@Query() id:any){
    const data =await this.userService.Deletepass(id.id)
    return data

  }

}
