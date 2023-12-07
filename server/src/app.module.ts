import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { databaseProviders } from './database/database.providers';


@Module({
  imports: [UserModule],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
