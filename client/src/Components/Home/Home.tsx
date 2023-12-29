import "./Home.css";
import centerImg from "../../assets/password-manager-vector.png";
import { useEffect, useState } from "react";
import { DeleteApi, HomeApi, generateApi, userdto } from "../../api/UserApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import proPic from '../../assets/60111.jpg'
import { LogoutApi } from "../../api/AuthApi";
import { useDispatch } from "react-redux";
import { AuthCheckReducer } from "../../Utils/reducers";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const Lowercase: string = "abcdefghijklmnopqrstuvwxyz";
  const Uppercase: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const Number: string = "0123456789";
  const Symbols: string = "!@#$%^&*()/?";
  const [LC, setLC] = useState<boolean>(true);
  const [modalOn, setModal] = useState<boolean>(false);
  const [savemodalOn, setSaveModal] = useState<boolean>(false);
  const [UP, setUP] = useState<boolean>(false);
  const [NM, setNM] = useState<boolean>(false);
  const [SY, setSY] = useState<boolean>(false);
  const [PassName, setPassName] = useState<string>("");
  const [RNG, setRNG] = useState<string>("8");
  const [NewPass, setNewPass] = useState<string>("");
  const [userData, setUserData] = useState<userdto>();
  const [userPass, setPassData] = useState<any[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
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
      tempPassword += totalValues.charAt(chatIntex);
    }
    setNewPass(tempPassword);
  };
  const ApiHelper = async () => {
    const data = await HomeApi();
    setUserData(data);
    setPassData(data?.savedPasswords);
  };
  useEffect(() => {
    ApiHelper();
  }, [refresh]);
  const CopyText = async () => {
    if (NewPass.length) {
      navigator.clipboard.writeText(NewPass);
      toast("Password copy Successfully");
    }
  };

  const SavedPass = () => {
    setModal(!modalOn);
  };
  const SavePass = () => {
    if (NewPass.length) {
      setSaveModal(!savemodalOn);
    } else {
      toast("Generate a new password");
    }
  };
  const SavePassword = async () => {
    if (NewPass.length && PassName.trim()) {
      const id: number | undefined = userData?.id;
      const data: any = await generateApi({
        appName: PassName,
        password: NewPass,
        userId: id,
      });
      setRefresh(!refresh);
      toast(data.message);
    } else {
      toast("Enter a Valid Name");
    }
  };
  const copyText = async (passwor: string) => {
    await navigator.clipboard.writeText(passwor);
    toast("Password copy successfully");
  };
  const DeletePass = async (id: number) => {
    if (id) {
      const data: any = await DeleteApi(id);
      setRefresh(!refresh);
      toast(data.message);
    }
  };
  const Dispatch=useDispatch()
  const Nav=useNavigate()
  const Logout=async()=>{
    
    const resp=await LogoutApi()
    Dispatch(AuthCheckReducer({auth:resp.auth}))
    Nav('/')
  }
  
  return (
    <>
      <div className="navBar">
        <div className="logoName">
          <p>PASSWORD-GEN </p>
        </div>
        <div className="Propic">
          <div className="imagess">
            <img src={userData?.image ?  userData?.image :proPic} alt="p" />
            <p>{userData?.name}</p>
          </div>
            <div className="dropdown">
              <select onChange={Logout} name="" id="">
                <option hidden value=""></option>
               
               <option   value="">Log Out</option>
               
              </select>
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
              <div
                className="ranges"
                style={{
                  border: "1px solid blue",
                  boxShadow: "0px 3px 12px blue",
                }}
              >
                <input
                  type="text"
                  readOnly
                  defaultValue={NewPass}
                  name=""
                  id=""
                  style={{
                    outline: "none",
                    border: "0px",
                  }}
                />
              </div>
              <div
                onClick={CopyText}
                className="range-num"
                style={{
                  border: "1px solid black",
                  marginLeft: "5px",
                  width: "50px",
                  cursor: "pointer !important",
                }}
              >
                <ToastContainer />
                <p
                  style={{
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  Copy
                </p>
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
          <div
            className="modal"
            style={{
              display: modalOn === false ? "none" : "block",
            }}
          >
            <div
              style={{
                display: "flex",
                
                alignItems: "center",
                marginLeft:"10px",
                marginTop:"10px",
              }}
            >
              <button style={{
                fontWeight:"bold",
                fontSize:"10px"
                ,border:"0px",

              }} type="button" onClick={() => setModal(!modalOn)}>
                X
              </button>
            </div>
            <div className="modaltitle">Saved PassWords</div>
            {userPass.map((val, index) => (
              <div key={index} className="contentmodal">
                <div className="passwor-name">
                  <p>{val.appName}</p>
                  <p>{val.password}</p>
                </div>
                <div className="password-btns">
                  <p onClick={() => copyText(val.password)}>copy</p>
                  <p onClick={() => DeletePass(val.id)}>delete</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="modal"
            style={{
              display: savemodalOn === false ? "none" : "block",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                
                alignItems: "center",
                marginLeft:"10px",
                marginTop:"10px",
              }}
            >
              <button style={{
                fontWeight:"bold",
                fontSize:"10px"
                ,border:"0px",
                
              }} type="button" onClick={() => setSaveModal(!savemodalOn)}>
                X
              </button>
            </div>
            <div className="modaltitle">Saved PassWords</div>

            <div
              style={{
                backgroundColor: "white",
                height: "100%",
              }}
              className="contentmodal"
            >
              <div
                style={{
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50%",
                }}
              >
                <input className="c-m-i" type="text" readOnly value={NewPass} />
                <input
                  className="c-m-i"
                  type="text"
                  placeholder="Enter a Name "
                  onChange={(e) => setPassName(e.target.value)}
                  min={3}
                  required
                />
                <button
                  className="c-m-i cmi-btn"
                  type="button"
                  onClick={SavePassword}
                >
                  save
                </button>
              </div>
            </div>
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
