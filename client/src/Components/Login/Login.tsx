import {  useState } from "react";
import "./Login.css";
import {  GoogleSignUpApi, LoginApi } from "../../api/AuthApi";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthCheckReducer } from "../../Utils/reducers";
import {  GoogleLogin } from '@react-oauth/google';
import { JwtPayload, jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const dispatch=useDispatch()
  
  const Nav:NavigateFunction=useNavigate()
  const [passwordType, setPassswordType] = useState<string>("password");
  const [password, setPasssword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errorr, setError] = useState<string>("");

  const GoogleApiHelp=async(data:JwtPayload)=>{
    if (data) {
      const datas:any=await GoogleSignUpApi({name:data.name,email:data.email,image:data.picture,password:data.sub})
      if (datas?.auth===true) {
        dispatch(AuthCheckReducer({auth:datas.auth}))
         Nav('/home')
       }else{
        setError('Something went wrong')
       }      
      
    }
  }

  const HideUnHide = (e: any) => {
    if (e?.target?.checked) {
      setPassswordType("text");
    } else {
      setPassswordType("password");
    }
  };
  const Submit=async()=>{
    if (password.trim()&&email.trim()) {
        const data:any=await LoginApi(email,password)
        
       if (data?.auth===true) {
        dispatch(AuthCheckReducer({auth:data.auth}))
        
        
         Nav('/home')
       }else{
        setError('Enter Proper Email address and Password')
       }
        
    }else{
        setError('Invald Username or Password')
    }
    
  }
  
  return (
    <>
      <div className="main-container">
        <div className="form-main">
          <div> PASSWORD GENERATOR</div>
          <p>{errorr}</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            title="Enter Email Address"
          />
          <div className="chekboxer">
            <input type="checkbox" onChange={(e: EventInit) => HideUnHide(e)} />
          </div>
          <input
            type={passwordType}
            title="Enter Password"
            placeholder="Password"
            onChange={(e) => setPasssword(e.target.value)}
            value={password}
          />
          <button 
          type="button"
          onClick={Submit}>Login</button>
          <Link to='/signup'>Create a new Account</Link>
          <div style={{
            marginTop:"10px",
            marginBottom:"10px"
          }}>
          <GoogleLogin
  onSuccess={(credentialResponse:any) => {
   const decode=jwtDecode(credentialResponse.credential)
  GoogleApiHelp(decode)
  }}
  onError={() => {
toast('Login Failed')  }}
/>
<ToastContainer/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
