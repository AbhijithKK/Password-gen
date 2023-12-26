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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const belt_guard_1 = require("../belt/belt.guard");
const user_dto_1 = require("./user.dto");
const jwt_1 = require("@nestjs/jwt");
let UserController = class UserController {
    constructor(userService, Jwtservice) {
        this.userService = userService;
        this.Jwtservice = Jwtservice;
    }
    async Home(req) {
        const jwt = req.cookies.jwt;
        const jwtData = await this.Jwtservice.verify(jwt, { secret: process.env.JWT_KEY });
        console.log(jwtData.data);
        const data = await this.userService.GetHome(jwtData.data);
        return data;
    }
    async UserData(userdata) {
        const data = await this.userService.postPassData(userdata);
        return data;
    }
    async DeletePassword(id) {
        const data = await this.userService.Deletepass(id.id);
        return data;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.UseGuards)(belt_guard_1.BeltGuard),
    (0, common_1.Get)('/home'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "Home", null);
__decorate([
    (0, common_1.UseGuards)(belt_guard_1.BeltGuard),
    (0, common_1.Post)('/genaratepassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.passDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "UserData", null);
__decorate([
    (0, common_1.UseGuards)(belt_guard_1.BeltGuard),
    (0, common_1.Delete)('/deletepasswor'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "DeletePassword", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], UserController);
//# sourceMappingURL=user.controller.js.map