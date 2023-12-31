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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./auth.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async GetAuth(req) {
        const jwt = req.cookies.jwt;
        const data = await this.authService.GetAuth(jwt);
        return data;
    }
    async postLogin(loginDto, res) {
        const data = await this.authService.postLogin(loginDto);
        if (data?.auth) {
            return res.cookie('jwt', data?.token).json({ auth: data.auth });
        }
        else {
            return res.json({ auth: data.auth });
        }
    }
    async UserData(userdata) {
        try {
            const data = await this.authService.postUserdata(userdata);
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async GUserData(userdata, res) {
        try {
            const data = await this.authService.postGUserdata(userdata);
            if (data?.auth) {
                return res.cookie('jwt', data?.token).json({ auth: data.auth });
            }
            else {
                return res.json({ auth: data.auth });
            }
        }
        catch (error) {
            console.log(error);
            return res.json({ auth: false });
        }
    }
    async GetLogout(res) {
        res.cookie("jwt", '').json({ auth: false });
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "GetAuth", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "postLogin", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "UserData", null);
__decorate([
    (0, common_1.Post)('/googleauth'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "GUserData", null);
__decorate([
    (0, common_1.Get)('/logout'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "GetLogout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map