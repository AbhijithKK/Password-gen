import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { databaseProviders } from 'src/database/database.providers';

@Module({
  controllers: [UserController],
  providers: [UserService,...databaseProviders],
})
export class UserModule {}
