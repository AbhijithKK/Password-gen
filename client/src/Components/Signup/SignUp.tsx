import { useState } from "react";
import "../Login/Login.css";
import { SignUpApi } from "../../api/AuthApi";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
    const Nav=useNavigate()
  const [passwordType, setPassswordType] = useState<string>("password");
  const [password, setPasssword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<FileList|null|string>(null);
  const [email, setEmail] = useState<string>("");
  const [errorr, setError] = useState<string>("");
  const HideUnHide = (e: any) => {
    if (e?.target?.checked) {
      setPassswordType("text");
    } else {
      setPassswordType("password");
    }
  };
  const Base64Convert=async(file:any,cb:any)=>{
    const reader=new FileReader()
    reader.onloadend=()=>{
      cb(reader.result)
    }
    reader.readAsDataURL(file)
  }
  
const BaseConverter=async()=>{
  if (image) {
    Base64Convert(image,(result:string)=>{
      setImage(result)
      Submitd(result)
    })
    
  }else{
    Submitd('')
  }
}
  
  const Submitd=async(image:string)=>{
   
    if (password.trim()&&email.trim()&&name.trim()) {

        const data:any=await SignUpApi({name,email,password,image})
        if (data.status) {
            Nav('/')
        }else{
          setError(data.message)
        }
        
    }else{
        setError('Enter Proper Email address and Password')
    }
    
  }
  return (
    <>
      <div className="main-container">
        <div className="form-main">
          <div> PASSWORD GENERATOR</div>
          <p>{errorr}</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
            title="Enter Your Name"
          />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            title="Enter Email Address"
          />
          <input
            type="file"
            title="Choose Image"
            placeholder="Choose Image"
            accept="jpeg,png,jpg"
            onChange={(e:any) => setImage(e.target.files[0])}
            
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
          onClick={BaseConverter}>Sign Up</button>
        <Link to='/'>Already have an account?</Link>
        </div>

      </div>
    </>
  );
};

export default SignUp;
