import { NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
export declare class JwtMiddleware implements NestMiddleware {
    private jwtService;
    constructor(jwtService: JwtService);
    use(req: Request, res: Response, next: () => void): void;
}
