import axios from "axios";

export const Axiosinstance = axios.create({
    baseURL:'http://localhost:7000/' ,// process.env.REACT_APP_BASE_URL 

    headers: {
        "Content-Type":'application/json'
    },withCredentials:true
  });
