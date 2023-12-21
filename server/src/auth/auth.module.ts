import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsrModel } from 'src/database/Models/User.model';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([UsrModel]),
  JwtModule.register({
    global:true, 
    secret:'AASDS',
    signOptions: { expiresIn: '60s' },
    secretOrPrivateKey:process.env.JWT_KEY || 'AASDS',
    
  })],
  controllers: [AuthController],
  providers: [AuthService,JwtService,],
})
export class AuthModule {}
