import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";
import { AuthApi } from "./api/AuthApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthCheckReducer } from "./Utils/reducers";

function App() {
  const {auth}=useSelector((state:any)=>state.auth)
  const dispatch=useDispatch()
  const AuthCheck = async () => {
    const data = await AuthApi();
      dispatch(AuthCheckReducer({auth:data.auth}))
  };
  useEffect(() => {
    AuthCheck();
  }, []);
  console.log(auth);
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          {auth &&
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to='/home'/>} />
            <Route path="/signup" element={<Navigate to='/home'/>} />
          </>
            }
          {!auth &&
          <>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Navigate to='/'/>} />
            </>
            }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
