interface PassDto {
  userId: Number;
  appName: string;
  password: string;
}
export interface userdto{
    name:string
    email:string
    image:string
    savedPasswords:any[]
}
import {Axiosinstance as axios}  from '../Utils/Axios'

export const HomeApi = async (): Promise<userdto> => {
  const { data } = await axios.get("user/home");
  return data;
};
export const generateApi = async ({
  appName,
  password,
  userId,
}: PassDto): Promise<string> => {
  const { data } = await axios.post(
    "/user/genaratepassword",{
    appName,
    password,
    userId}
  );
  return data;
};
