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
    GetAuth(jwt: string): Promise<{
        auth: boolean;
    }>;
}
