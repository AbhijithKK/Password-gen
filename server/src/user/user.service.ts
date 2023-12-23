import {  Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { passDto } from './user.dto';
import {  PasswordStoreModel } from 'src/database/Models/PasswordStore.model';
import { UsrModel } from 'src/database/Models/User.model';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(PasswordStoreModel) private readonly passwordModel:typeof PasswordStoreModel,
        @InjectModel(UsrModel) private readonly Usrmodel:typeof UsrModel
    ){}
    async GetHome(jwtData:number){

        const data=await this.Usrmodel.findOne({where:{id:jwtData}})
        return data
    }


   async postPassData(userdata:passDto){
    
    const passToCreate={
        userId:userdata.userId,
        appName:userdata.appName,
       
        password:userdata.password,
       
    }
    const resp=await  this.passwordModel.create(passToCreate)
    console.log('ffffffffffffff',resp.dataValues);
    
    return "successfully created"
    }
}

