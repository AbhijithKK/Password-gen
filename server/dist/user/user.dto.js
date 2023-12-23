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
Object.defineProperty(exports, "__esModule", { value: true });
exports.passDto = void 0;
const class_validator_1 = require("class-validator");
class passDto {
}
exports.passDto = passDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Must be add an Id' }),
    __metadata("design:type", Number)
], passDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Must be add Name' }),
    (0, class_validator_1.Length)(3, 225, { message: 'Name atleast 3 characters Required' }),
    __metadata("design:type", String)
], passDto.prototype, "appName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Genarate a Strong password' }),
    (0, class_validator_1.Length)(8, 225, { message: 'Password atleast 8 characters Required' }),
    __metadata("design:type", String)
], passDto.prototype, "password", void 0);
//# sourceMappingURL=user.dto.js.map