import { Injectable } from '@nestjs/common';
import { UserDto, loginDto, userReturnDto } from './auth.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UsrModel } from 'src/database/Models/User.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

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
        const passCheck=await bcrypt.compare(data.password,datq.dataValues.password)
        if (passCheck) {
        const jwtData = await this.jwtServices.sign(
          { data: datq.dataValues.id },
          { secret: process.env.JWT_KEY },
        );
        
        return { auth: true, data: datq?.dataValues, token: jwtData };
      }
    }else{
      return { auth: false };
    }
    } catch (error) {
      return { auth: false };
    }

    return { auth: false };
  }
  async postUserdata(userdata:UserDto){
    try {
      
    

    const password:string=await bcrypt.hash(userdata.password,10)

    const userToCreate={
        id:null,
        name:userdata.name,
        email:userdata.email,
        password:password,
        image:userdata.image
    }    
    const resp=await  this.userdata.create(userToCreate)
   
    
    return {message:"successfully created",status:true}
  } catch (error) {
   return {message:error.errors[0].message,status:false}
      
  }
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
