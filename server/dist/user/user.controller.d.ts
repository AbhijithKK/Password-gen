import { UserService } from './user.service';
import { UserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    Home(): Promise<string>;
    UserData(userdata: UserDto): Promise<string>;
}
