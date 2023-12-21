import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private jwtService:JwtService){}
 async use(req: Request, res: Response, next: NextFunction) {
try {
  const jwthash:string= req.cookies.psAuth
 const data= await this.jwtService.verifyAsync(jwthash)
 if (data) {
  console.log('jwt authpass');
  next();
 }else
 res.json({message:"auth Error"}).status(401)
 console.log('jwt authpass111');
} catch (error) {
  res.json({message:"auth Error"}).status(401)

}

}

}