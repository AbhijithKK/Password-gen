import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    GetHome(){
        return 'hiii'
    }
}
