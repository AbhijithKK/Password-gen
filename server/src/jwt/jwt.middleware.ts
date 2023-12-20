import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private jwtService:JwtService){}
  use(req: Request, res: Response, next: () => void) {
try {
  const jwthash:string= req.cookies.psAuth
 const data= this.jwtService.verifyAsync(jwthash)
 if (data) {
  console.log('jwt authpass');
  
  next();
 }else
 res.json({message:"auth Error"}).status(401)

} catch (error) {
  res.json({message:"auth Error"}).status(401)

}   
    
  }
}
