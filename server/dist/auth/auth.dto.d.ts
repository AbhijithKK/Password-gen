export interface loginDto {
    email: string;
    password: string;
}
export interface userReturnDto {
    auth: boolean;
    data?: string | number | undefined;
    token?: string | undefined;
}
export declare class UserDto {
    name: string;
    email: string;
    password: string;
    image: string;
}
