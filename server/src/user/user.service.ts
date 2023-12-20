import { Inject, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UsrModel } from 'src/database/Models/User.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(UsrModel) private readonly userModule:typeof UsrModel
    ){}
    GetHome(){
        return 'hiii'
    }
   async postUserdata(userdata:UserDto){
    
    const userToCreate={
        id:null,
        name:userdata.name,
        email:userdata.email,
        password:userdata.password,
        image:userdata.image
    }
    const resp=await  this.userModule.create(userToCreate)
    console.log('ffffffffffffff',resp.dataValues);
    
    return "successfully created"
    }
}

