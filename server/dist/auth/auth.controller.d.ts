import { AuthService } from './auth.service';
import { loginDto } from './auth.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    postLogin(loginDto: loginDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
