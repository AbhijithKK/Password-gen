import { UserDto } from './user.dto';
import { UsrModel } from 'src/database/Models/User.model';
export declare class UserService {
    private readonly userModule;
    constructor(userModule: typeof UsrModel);
    GetHome(): string;
    postUserdata(userdata: UserDto): Promise<string>;
}
