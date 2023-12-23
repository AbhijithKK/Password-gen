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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const User_model_1 = require("../database/Models/User.model");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userdata, jwtServices) {
        this.userdata = userdata;
        this.jwtServices = jwtServices;
    }
    async postLogin(data) {
        try {
            const datq = await this.userdata.findOne({
                where: { email: data.email },
            });
            if (datq?.dataValues != undefined) {
                const jwtData = await this.jwtServices.sign({ data: datq.dataValues.id }, { secret: process.env.JWT_KEY });
                return { auth: true, data: datq?.dataValues, token: jwtData };
            }
        }
        catch (error) {
            return { auth: false };
        }
        return { auth: false };
    }
    async postUserdata(userdata) {
        const userToCreate = {
            id: null,
            name: userdata.name,
            email: userdata.email,
            password: userdata.password,
            image: userdata.image
        };
        const resp = await this.userdata.create(userToCreate);
        console.log('ffffffffffffff', resp.dataValues);
        return "successfully created";
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(User_model_1.UsrModel)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map