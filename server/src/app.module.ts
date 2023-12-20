import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsrModel } from './database/Models/User.model';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [UserModule,SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'pass-gen',
    models:[UsrModel]
  }), AuthModule],
  controllers: [],
  providers: [],
 
})
export class AppModule {}
