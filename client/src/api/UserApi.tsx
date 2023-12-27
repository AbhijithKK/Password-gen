interface PassDto {
  userId: Number|undefined;
  appName: string;
  password: string;
}
export interface userdto{
  id:number|undefined
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
  console.log(appName,password,userId);
  
  const { data } = await axios.post("user/genaratepassword",{
    appName,
    password,
    userId},
  );
  return data;
};

export const DeleteApi=async(id:number):Promise<string>=>{
  const { data } = await axios.delete("user/deletepasswor",{params:{id}})
  return data
}
