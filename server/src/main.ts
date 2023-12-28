import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv';

dotenv.config();
import { NestExpressApplication } from '@nestjs/platform-express';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{rawBody:true});
  app.enableCors({
    origin:[process.env.BASE_URL,'*'],credentials:true
  })
  app.use(cookieParser())
app.useBodyParser('json',{limit:'100mb'})

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(7000);
}
bootstrap();
