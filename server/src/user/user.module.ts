import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';


import { SequelizeModule } from '@nestjs/sequelize';
import { UsrModel } from 'src/database/Models/User.model';


@Module({
  imports:[ SequelizeModule.forFeature([UsrModel])],
  controllers: [UserController],
  providers: [UserService,],
  exports:[SequelizeModule]
})
export class UserModule {}
