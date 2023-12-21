import { Injectable } from '@nestjs/common';
import { loginDto, userReturnDto } from './auth.dto';
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
}
