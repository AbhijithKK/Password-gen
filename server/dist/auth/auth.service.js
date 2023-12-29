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
const bcrypt = require("bcrypt");
const cloudinary_1 = require("cloudinary");
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
                const passCheck = await bcrypt.compare(data.password, datq.dataValues.password);
                if (passCheck) {
                    const jwtData = await this.jwtServices.sign({ data: datq.dataValues.id }, { secret: process.env.JWT_KEY });
                    return { auth: true, data: datq?.dataValues, token: jwtData };
                }
            }
            else {
                return { auth: false };
            }
        }
        catch (error) {
            return { auth: false };
        }
        return { auth: false };
    }
    async postUserdata(userdata) {
        try {
            cloudinary_1.v2.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.CLOUD_API_KEY,
                api_secret: process.env.CLOUD_API_SECRECT,
            });
            const password = await bcrypt.hash(userdata.password, 10);
            console.log(userdata);
            let tempval = '';
            if (userdata.image) {
                let img = await cloudinary_1.v2.uploader.upload(userdata.image);
                tempval = img.secure_url;
            }
            const userToCreate = {
                name: userdata.name,
                email: userdata.email,
                password: password,
                image: tempval,
            };
            const resp = await this.userdata.create(userToCreate);
            console.log(resp);
            return { message: 'successfully created', status: true };
        }
        catch (error) {
            return { message: error.errors[0].message, status: false };
        }
    }
    async postGUserdata(userdata) {
        try {
            console.log(userdata);
            const datq = await this.userdata.findOne({
                where: { email: userdata.email },
            });
            if (datq?.dataValues == undefined) {
                const password = await bcrypt.hash(userdata.password, 10);
                const userToCreate = {
                    name: userdata.name,
                    email: userdata.email,
                    password: password,
                    image: userdata.image,
                };
                const resp = await this.userdata.create(userToCreate);
                console.log(resp);
                const jwtData = await this.jwtServices.sign({ data: datq.dataValues.id }, { secret: process.env.JWT_KEY });
                return { auth: true, data: datq?.dataValues, token: jwtData };
            }
            else {
                try {
                    const datq = await this.userdata.findOne({
                        where: { email: userdata.email },
                    });
                    if (datq?.dataValues != undefined) {
                        const passCheck = await bcrypt.compare(userdata.password, datq.dataValues.password);
                        if (passCheck) {
                            const jwtData = await this.jwtServices.sign({ data: datq.dataValues.id }, { secret: process.env.JWT_KEY });
                            return { auth: true, data: datq?.dataValues, token: jwtData };
                        }
                    }
                    else {
                        return { auth: false };
                    }
                }
                catch (error) {
                    return { auth: false };
                }
            }
        }
        catch (error) {
            return { message: error?.errors[0]?.message, status: false };
        }
    }
    async GetAuth(jwt) {
        try {
            const data = await this.jwtServices.verify(jwt, { secret: process.env.JWT_KEY });
            if (data) {
                return { auth: true };
            }
        }
        catch (error) {
            return { auth: false };
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(User_model_1.UsrModel)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map