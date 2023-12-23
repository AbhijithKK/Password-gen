import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';


import { SequelizeModule } from '@nestjs/sequelize';
import { UsrModel } from 'src/database/Models/User.model';
import { PasswordStoreModel } from 'src/database/Models/PasswordStore.model';


@Module({
  imports:[ SequelizeModule.forFeature([UsrModel,PasswordStoreModel])],
  controllers: [UserController],
  providers: [UserService,],
  exports:[SequelizeModule]
})
export class UserModule {}
