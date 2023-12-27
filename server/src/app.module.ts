import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsrModel } from './database/Models/User.model';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PasswordStoreModel } from './database/Models/PasswordStore.model';



@Module({
  imports: [UserModule,SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'pass-gen',
    autoLoadModels:true,
    synchronize:true,
    models:[UsrModel,PasswordStoreModel]
  })
  , AuthModule,ConfigModule.forRoot({
    isGlobal:true,
  })
  ,JwtModule.register({
    global:true, 
    secret:process.env.JWT_KEY,
    signOptions: { expiresIn: '600s' },
    
    
  })],
  controllers: [],
  providers: [],
 
})
export class AppModule {}
