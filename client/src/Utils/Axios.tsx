import axios from "axios";

console.log('kk',import.meta.env.VITE_BASE_URL);

export const Axiosinstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL ,

    headers: {
        "Content-Type":'application/json'
    },withCredentials:true
  });
