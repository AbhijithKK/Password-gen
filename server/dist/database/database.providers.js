"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const User_model_1 = require("./Models/User.model");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'root',
                database: 'pass-gen',
            });
            sequelize.addModels([User_model_1.UsrModel]);
            await sequelize.sync({ alter: true });
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map