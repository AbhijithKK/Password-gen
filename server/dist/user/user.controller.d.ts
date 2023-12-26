import { UserService } from './user.service';
import { passDto } from './user.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class UserController {
    private readonly userService;
    private Jwtservice;
    constructor(userService: UserService, Jwtservice: JwtService);
    Home(req: Request): Promise<{
        id: number;
        name: string;
        email: string;
        image: string;
        savedPasswords: import("../database/Models/PasswordStore.model").PasswordStoreModel[];
    }>;
    UserData(userdata: passDto): Promise<{
        message: string;
    }>;
    DeletePassword(id: any): Promise<{
        message: string;
    }>;
}
