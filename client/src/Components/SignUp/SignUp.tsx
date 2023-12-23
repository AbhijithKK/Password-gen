import { useState } from "react";
import "./SignUp.css";
const SignUp = () => {
  const [passwordType, setPassswordType] = useState<string>("password");
  const [password, setPasssword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errorr, setError] = useState<string>("");
  const HideUnHide = (e: any) => {
    if (e?.target?.checked) {
      setPassswordType("text");
    } else {
      setPassswordType("password");
    }
  };
  const Submit=async()=>{
    if (password.trim()&&email.trim()) {
        
        console.log(email,password);
    }else{
        setError('gg')
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
        </div>
      </div>
    </>
  );
};

export default SignUp;
