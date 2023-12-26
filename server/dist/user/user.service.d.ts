import { passDto } from './user.dto';
import { PasswordStoreModel } from 'src/database/Models/PasswordStore.model';
import { UsrModel } from 'src/database/Models/User.model';
export declare class UserService {
    private readonly passwordModel;
    private readonly Usrmodel;
    constructor(passwordModel: typeof PasswordStoreModel, Usrmodel: typeof UsrModel);
    GetHome(jwtData: number): Promise<{
        id: number;
        name: string;
        email: string;
        image: string;
        savedPasswords: PasswordStoreModel[];
    }>;
    postPassData(userdata: passDto): Promise<{
        message: string;
    }>;
    Deletepass(id: number): Promise<{
        message: string;
    }>;
}
