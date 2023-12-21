import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsrModel } from 'src/database/Models/User.model';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([UsrModel])],
  controllers: [AuthController],
  providers: [AuthService,JwtService,],
})
export class AuthModule {}
