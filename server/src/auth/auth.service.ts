import { Injectable } from '@nestjs/common';
import { UserDto, loginDto, userReturnDto } from './auth.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UsrModel } from 'src/database/Models/User.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';

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
        const passCheck = await bcrypt.compare(
          data.password,
          datq.dataValues.password,
        );
        if (passCheck) {
          const jwtData = await this.jwtServices.sign(
            { data: datq.dataValues.id },
            { secret: process.env.JWT_KEY },
          );

          return { auth: true, data: datq?.dataValues, token: jwtData };
        }
      } else {
        return { auth: false };
      }
    } catch (error) {
      return { auth: false };
    }

    return { auth: false };
  }
  async postUserdata(userdata: UserDto) {
    try {
      cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.CLOUD_API_KEY,
        api_secret: process.env.CLOUD_API_SECRECT,
      });

      const password: string = await bcrypt.hash(userdata.password, 10);
      console.log(userdata);
      
      let tempval=''
      if (userdata.image) {
      let img = await cloudinary.uploader.upload(userdata.image);
        tempval=img.secure_url
      }
      const userToCreate = {
        name: userdata.name,
        email: userdata.email,
        password: password,
        image: tempval,
      };

      const resp = await this.userdata.create(userToCreate);
      console.log(resp);

      return { message: 'successfully created', status: true };
    } catch (error) {
      // console.log(error);

      return { message: error.errors[0].message, status: false };
    }
  }
  async postGUserdata(userdata: UserDto) {
    try {
      console.log(userdata);
      
      const datq = await this.userdata.findOne({
        where: { email: userdata.email },
      });

      if (datq?.dataValues == undefined) {
      const password: string = await bcrypt.hash(userdata.password, 10);   
      const userToCreate = {
        name: userdata.name,
        email: userdata.email,
        password: password,
        image: userdata.image,
      };

      const resp = await this.userdata.create(userToCreate);
      console.log(resp);

      const jwtData = await this.jwtServices.sign(
        { data: datq.dataValues.id },
        { secret: process.env.JWT_KEY },
      );
      return { auth: true, data: datq?.dataValues, token: jwtData };

    }else{
      try {
        const datq = await this.userdata.findOne({
          where: { email: userdata.email },
        });
  
        if (datq?.dataValues != undefined) {
          const passCheck = await bcrypt.compare(
            userdata.password,
            datq.dataValues.password,
          );
          if (passCheck) {
            const jwtData = await this.jwtServices.sign(
              { data: datq.dataValues.id },
              { secret: process.env.JWT_KEY },
            );
  
            return { auth: true, data: datq?.dataValues, token: jwtData };
          }
        } else {
          return { auth: false };
        }
      } catch (error) {
        return { auth: false };
      }
    }
    } catch (error) {

      return { message: error?.errors[0]?.message, status: false };
    }
  }
  async GetAuth(jwt: string) {
    try {
      const data = await this.jwtServices.verify(jwt,{secret:process.env.JWT_KEY});
      
      if (data) {
        return { auth: true };
      }
    } catch (error) {
      
      return { auth: false };
    }
  }
}
