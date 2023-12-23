import { UserService } from './user.service';
import { passDto } from './user.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class UserController {
    private readonly userService;
    private Jwtservice;
    constructor(userService: UserService, Jwtservice: JwtService);
    Home(req: Request): Promise<import("../database/Models/User.model").UsrModel>;
    UserData(userdata: passDto): Promise<string>;
}
