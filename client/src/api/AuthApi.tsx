interface SignUpDto {
  name: string;
  email: string;
  password: string;
  image: any;
}

import {Axiosinstance as axios}  from '../Utils/Axios'
export const LoginApi = async (
  email: string,
  password: string
): Promise<string | boolean> => {
  const { data } = await axios.post("auth/login",{ email, password});
  return data;
};
export const SignUpApi = async ({ name, email, password, image }: SignUpDto):Promise<string> => {
  console.log(name,email,password,image);
  
  const { data } = await axios.post(
    "auth/signup",{
    name,
    email,
    password,
    image},{headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,}
  );
  return data
};

export const AuthApi=async()=>{
  const { data } = await axios.get("auth/");
  return data;
}