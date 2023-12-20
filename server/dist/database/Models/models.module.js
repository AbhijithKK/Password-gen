"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsrModelModule = void 0;
const common_1 = require("@nestjs/common");
const User_model_1 = require("./User.model");
const sequelize_1 = require("@nestjs/sequelize");
let UsrModelModule = class UsrModelModule {
};
exports.UsrModelModule = UsrModelModule;
exports.UsrModelModule = UsrModelModule = __decorate([
    (0, common_1.Module)({
        providers: [User_model_1.UsrModel],
        imports: [sequelize_1.SequelizeModule.forFeature([User_model_1.UsrModel])],
        exports: [sequelize_1.SequelizeModule.forFeature([User_model_1.UsrModel])],
    })
], UsrModelModule);
//# sourceMappingURL=models.module.js.map