"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const PasswordStore_model_1 = require("../database/Models/PasswordStore.model");
const User_model_1 = require("../database/Models/User.model");
let UserService = class UserService {
    constructor(passwordModel, Usrmodel) {
        this.passwordModel = passwordModel;
        this.Usrmodel = Usrmodel;
    }
    async GetHome(jwtData) {
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
    async postPassData(userdata) {
        console.log(userdata);
        const passToCreate = {
            userId: userdata.userId,
            appName: userdata.appName,
            password: userdata.password,
        };
        const resp = await this.passwordModel.create(passToCreate);
        return { message: 'successfully created' };
    }
    async Deletepass(id) {
        try {
            await this.passwordModel.destroy({ where: { id: id } });
            return { message: 'Password Delete Successfully' };
        }
        catch (error) {
            return { message: 'something went wrong' };
        }
        console.log(id);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(PasswordStore_model_1.PasswordStoreModel)),
    __param(1, (0, sequelize_1.InjectModel)(User_model_1.UsrModel)),
    __metadata("design:paramtypes", [Object, Object])
], UserService);
//# sourceMappingURL=user.service.js.map