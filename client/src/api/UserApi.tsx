interface PassDto {
  userId: Number;
  appName: string;
  password: string;
}

import {Axiosinstance as axios}  from '../Utils/Axios'

const HomeApi = async (): Promise<string> => {
  const { data } = await axios.get("user/home");
  return data;
};
const generateApi = async ({
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
