import "./Home.css";
import centerImg from "../../assets/password-manager-vector.png";
import { useEffect, useState } from "react";
import { HomeApi } from "../../api/UserApi";

const Home = () => {
  const Lowercase: string =
    "abcdefghijklmnopqrstuvwxyz";
  const Uppercase: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const Number: string = "0123456789";
  const Symbols: string = "!@#$%^&*()/?";
  const [LC, setLC] = useState<boolean>(false);
  const [UP, setUP] = useState<boolean>(false);
  const [NM, setNM] = useState<boolean>(false);
  const [SY, setSY] = useState<boolean>(false);
  const [RNG, setRNG] = useState<string>("8");
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
    console.log(tempPassword);
    
  };
  const ApiHelper = async () => {
    const data = await HomeApi();
    console.log(data);
  };
  useEffect(() => {
    ApiHelper();
  }, []);
  return (
    <>
      <div className="navBar">
        <div className="logoName">
          <p>PASSWORD-GEN </p>
        </div>
        <div className="Propic">
          <div className="imagess">
            <img src="" alt="p" />
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
                <label htmlFor="">Include Lowercase(a-z)</label>
              </div>
              <div className="chekbox-">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={UP}
                  onChange={() => setUP(!UP)}
                />
                <label htmlFor="">Include Uppercase(A-Z)</label>
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
        </div>
        <div
          style={{
            marginTop: "08px",
          }}
          className="center-image"
        >
          <button type="button" onClick={GenPass}>
            &nbsp; GENERATE NEW PASSWORD &nbsp;
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
