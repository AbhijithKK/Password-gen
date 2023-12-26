import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { passDto } from './user.dto';
import { PasswordStoreModel } from 'src/database/Models/PasswordStore.model';
import { UsrModel } from 'src/database/Models/User.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(PasswordStoreModel)
    private readonly passwordModel: typeof PasswordStoreModel,
    @InjectModel(UsrModel) private readonly Usrmodel: typeof UsrModel,
  ) {}
  async GetHome(jwtData: number) {
    const data = await this.Usrmodel.findOne({ where: { id: jwtData } });
    console.log(data.id);

    const savedPasswords = await this.passwordModel.findAll({
      where: { userId: data.id },
    });
    console.log(savedPasswords);

    let sendData = {
      id: data.id,
      name: data.name,
      email: data.email,
      image: data.image,
      savedPasswords: savedPasswords,
    };
    return sendData;
  }

  async postPassData(userdata: passDto) {
    console.log(userdata);

    const passToCreate = {
      userId: userdata.userId,
      appName: userdata.appName,

      password: userdata.password,
    };
    const resp = await this.passwordModel.create(passToCreate);

    return { message: 'successfully created' };
  }

  async Deletepass(id: number) {
    try {
      await this.passwordModel.destroy({ where: { id: id } });
      return { message: 'Password Delete Successfully' };
    } catch (error) {
      return { message: 'something went wrong' };
    }
    console.log(id);
  }
}
