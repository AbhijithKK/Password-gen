import { CanActivate, ExecutionContext, Injectable, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class BeltGuard implements CanActivate {
  constructor(private jwtService:JwtService){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
     const request=context.switchToHttp().getRequest()
     
    const token=request.cookies.jwt
    if (!token) {
      return false
    }
    try {
      const decode=this.jwtService.verify(token)
      request.user=decode
      console.log(request.user);
      
      return true
    } catch (error) {
      return false
    }
  }
}
