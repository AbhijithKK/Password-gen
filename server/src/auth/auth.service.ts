import { Injectable } from '@nestjs/common';
import { UserDto, loginDto, userReturnDto } from './auth.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UsrModel } from 'src/database/Models/User.model';
import { JwtService } from '@nestjs/jwt';
import { log } from 'console';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UsrModel) private readonly userdata: typeof UsrModel,
    private jwtServices: JwtService,
  ) {}
  async postLogin(data: loginDto): Promise<userReturnDto> {
    try {
      const datq = await this.userdata.findOne({
        where: { email: data.email },
      });

      if (datq?.dataValues != undefined) {
        const jwtData = await this.jwtServices.sign(
          { data: datq.dataValues.id },
          { secret: process.env.JWT_KEY },
        );
        return { auth: true, data: datq?.dataValues, token: jwtData };
      }
    } catch (error) {
      return { auth: false };
    }

    return { auth: false };
  }
  async postUserdata(userdata:UserDto){
    
    const userToCreate={
        id:null,
        name:userdata.name,
        email:userdata.email,
        password:userdata.password,
        image:userdata.image
    }
    const resp=await  this.userdata.create(userToCreate)
    console.log('ffffffffffffff',resp.dataValues);
    
    return "successfully created"
    }
    async GetAuth(jwt :string){
      try {
        const data=await this.jwtServices.verify(jwt)
        if (data) {
          return {auth:true}
        }
      } catch (error) {
        return {auth:false}

      }
    }
}
