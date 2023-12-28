import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsrModel } from 'src/database/Models/User.model';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[SequelizeModule.forFeature([UsrModel]),
  ConfigModule.forRoot({isGlobal:true}),
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
