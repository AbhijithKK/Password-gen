import { Model } from 'sequelize-typescript';
export declare class UsrModel extends Model {
    id: number;
    name: string;
    email: string;
    password: string;
    image: string;
}
