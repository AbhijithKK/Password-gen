import { UserDto, loginDto, userReturnDto } from './auth.dto';
import { UsrModel } from 'src/database/Models/User.model';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userdata;
    private jwtServices;
    constructor(userdata: typeof UsrModel, jwtServices: JwtService);
    postLogin(data: loginDto): Promise<userReturnDto>;
    postUserdata(userdata: UserDto): Promise<{
        message: any;
        status: boolean;
    }>;
    postGUserdata(userdata: UserDto): Promise<{
        auth: boolean;
        data: any;
        token: string;
        message?: undefined;
        status?: undefined;
    } | {
        auth: boolean;
        data?: undefined;
        token?: undefined;
        message?: undefined;
        status?: undefined;
    } | {
        message: any;
        status: boolean;
        auth?: undefined;
        data?: undefined;
        token?: undefined;
    }>;
    GetAuth(jwt: string): Promise<{
        auth: boolean;
    }>;
}
