import { AuthService } from './auth.service';
import { UserDto, loginDto } from './auth.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    postLogin(loginDto: loginDto, req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    UserData(userdata: UserDto): Promise<string>;
}
