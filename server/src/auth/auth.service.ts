import { Injectable } from '@nestjs/common';
import { loginDto, userReturnDto } from './auth.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UsrModel } from 'src/database/Models/User.model';
import { JwtService } from '@nestjs/jwt';

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
        const jwtData: string = await this.jwtServices.signAsync(
          datq?.dataValues?.id,
        );
        return { auth: true, data: datq?.dataValues, token: jwtData };
      }
    } catch (error) {
      return { auth: false };
    }

    return { auth: false };
  }
}
