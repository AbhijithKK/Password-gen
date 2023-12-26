import "./Home.css";
import centerImg from "../../assets/password-manager-vector.png";
import { useEffect, useState } from "react";
import { HomeApi, userdto } from "../../api/UserApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const Lowercase: string =
    "abcdefghijklmnopqrstuvwxyz";
  const Uppercase: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const Number: string = "0123456789";
  const Symbols: string = "!@#$%^&*()/?";
  const [LC, setLC] = useState<boolean>(true);
  const [modalOn, setModal] = useState<boolean>(false);
  const [UP, setUP] = useState<boolean>(false);
  const [NM, setNM] = useState<boolean>(false);
  const [SY, setSY] = useState<boolean>(false);
  const [RNG, setRNG] = useState<string>("8");
  const [NewPass, setNewPass] = useState<string>("");
  const GenPass = () => {
    let totalValues = "";
    if (LC) {
      totalValues += Lowercase;
    }
    if (UP) {
      totalValues += Uppercase;
    }
    if (NM) {
      totalValues += Number;
    }
    if (SY) {
      totalValues += Symbols;
    }
    let lng: number = parseInt(RNG);
    let tempPassword = "";
    for (let i = 0; i < lng; i++) {
      let chatIntex = Math.round(Math.random() * totalValues.length);
      tempPassword +=totalValues.charAt(chatIntex)
    }
    setNewPass(tempPassword)
    
  };
  const [userData,setUserData]=useState<userdto>()
  const [userPass,setPassData]=useState<any[]>([])
  console.log(userPass);
  
  const ApiHelper = async () => {
    const data = await HomeApi();
    // console.log(data);
    
    setUserData(data)
    setPassData(data?.savedPasswords)
  };
  useEffect(() => {
    ApiHelper();
  }, []);
  const CopyText=async()=>{
    if (NewPass.length) {
        
        navigator.clipboard.writeText(NewPass)
        toast("Password copy Successfully");
    }
  }

  const SavedPass=()=>{
    setModal(!modalOn)
    
  }
  const SavePass=()=>{
    setModal(!modalOn)
  }
  return (
    <>
      <div className="navBar">
        <div className="logoName">
          <p>PASSWORD-GEN </p>
        </div>
        <div className="Propic">
          <div className="imagess">
            <img src="" alt="p" />
            <p>{userData?.name}</p>
            <img src="" alt="do" />
          </div>
        </div>
      </div>
      <div className="mainScreen">
        <div className="center-image">
          <img src={centerImg} alt="" />
        </div>
        <div className="genarate-pass-window">
          <p>Genarate Strong Password</p>


          <div className="range-container">
            <div className="chekbox-1">
             
              <div className="ranges" style={{
                border:"1px solid blue",
                boxShadow:"0px 3px 12px blue"
              }}>
                <input
                  type="text"
                  readOnly
                  defaultValue={NewPass}
                  name=""
                  id=""
                  style={{
                    outline:"none",
                    border:"0px"
                  }}
                />
              </div>
              <div onClick={CopyText} className="range-num" style={{
                border:"1px solid black",
                marginLeft:"5px"
                ,width:"50px",
                cursor:"pointer !important"
                
              }}>
                 <ToastContainer />
                <p  style={{
                   
                    fontSize:"13px",cursor:"pointer"
                }}>Copy</p>
              </div>
            </div>
          </div>



          <div className="supparator">
            <div>
              <div className="chekbox-">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={LC}
                  onChange={() => setLC(!LC)}
                />
                <label htmlFor="">Include Lower Case(a-z)</label>
              </div>
              <div className="chekbox-">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={UP}
                  onChange={() => setUP(!UP)}
                />
                <label htmlFor="">Include Upper Case(A-Z)</label>
              </div>
            </div>
            <div>
              <div className="chekbox-">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={NM}
                  onChange={() => setNM(!NM)}
                />
                <label htmlFor="">Include Number(0-9)</label>
              </div>
              <div className="chekbox-">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={SY}
                  onChange={() => setSY(!SY)}
                />
                <label htmlFor="">Include Symbols(!@#%^&)</label>
              </div>
            </div>
          </div>
          <div className="range-container">
            <div className="chekbox-1">
              <div className="range-num">
                <p>{RNG}</p>
              </div>
              <div className="ranges">
                <input
                  type="range"
                  defaultValue={RNG}
                  onChange={(E) => setRNG(E.currentTarget.value)}
                  min={8}
                  max={40}
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
        <div className="modal" 
        style={{
            display:modalOn===false ? "none": "block"
        }} >
        <div className="modaltitle">
            Saved PassWords
        </div>
        {
            userPass.map((val,index)=>(
                <div key={index} className="contentmodal">
            <div>

            <p>{val.appName}</p>
            <p>{val.password}</p>
            </div>
            <div>
                <p>copy</p>
                <p>{val.id}</p>
            </div>
        </div>
            ))
        }
        </div>
        </div>
        <div
          style={{
            marginTop: "08px",
           
    
          }}
          className="center-image buttonss"
        >
          <button type="button" onClick={GenPass}>
            &nbsp; GENERATE NEW PASSWORD &nbsp;
          </button>
          <button type="button" onClick={SavedPass}>
            &nbsp; SHOW SAVED PASSWORDS &nbsp;
          </button>
          <button type="button" onClick={SavePass}>
            &nbsp; SAVE PASSWORD &nbsp;
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
