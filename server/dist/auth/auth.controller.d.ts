import { AuthService } from './auth.service';
import { UserDto, loginDto } from './auth.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    GetAuth(req: Request): Promise<{
        auth: boolean;
    }>;
    postLogin(loginDto: loginDto, res: Response): Promise<Response<any, Record<string, any>>>;
    UserData(userdata: UserDto): Promise<{
        message: any;
        status: boolean;
    }>;
    GUserData(userdata: UserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    GetLogout(res: Response): Promise<void>;
}
