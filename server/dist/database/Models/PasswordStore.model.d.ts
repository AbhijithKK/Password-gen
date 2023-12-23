import { Model } from 'sequelize-typescript';
export declare class PasswordStoreModel extends Model {
    id: number;
    userId: number;
    appName: string;
    password: string;
}
