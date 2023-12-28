interface SignUpDto {
  name: string;
  email: string;
  password: string;
  image: any;
}

import { Axiosinstance as axios } from "../Utils/Axios";
export const LoginApi = async (
  email: string,
  password: string
): Promise<string | boolean> => {
  const { data } = await axios.post("auth/login", { email, password });
  return data;
};
export const SignUpApi = async ({
  name,
  email,
  password,
  image,
}: SignUpDto): Promise<string> => {
  console.log(name, email, password, image);
  try {
    const { data } = await axios.post(
      "auth/signup",
      {
        name,
        email,
        password,
        image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(data,'data');
    
    return data;
  } catch (e) {
    console.log(e);
    return "";
  }
};

export const AuthApi = async () => {
  const { data } = await axios.get("auth/");
  return data;
};
export const LogoutApi = async () => {
  const { data } = await axios.get("auth/logout");
  return data;
};



export const GoogleSignUpApi = async ({
  name,
  email,
  password,
  image,
}: SignUpDto): Promise<string|boolean> => {
  console.log(name, email, password, image);
  try {
    const { data } = await axios.post(
      "auth/googleauth",
      {
        name,
        email,
        password,
        image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    
    return data;
  } catch (e) {
    return "";
  }}