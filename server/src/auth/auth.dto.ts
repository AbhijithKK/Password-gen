import { DataType } from "sequelize";

export interface loginDto{
    email:string;
    password:string;
}

export interface userReturnDto{
    auth:boolean;
    data?:string|number|undefined;
    token?:string|undefined
}