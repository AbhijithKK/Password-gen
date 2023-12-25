import "./Home.css";
import centerImg from "../../assets/password-manager-vector.png";
import { useEffect } from "react";
import { HomeApi } from "../../api/UserApi";

const Home = () => {
  const GenPass = () => {};
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
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Include Lowercase(a-z)</label>
              </div>
              <div className="chekbox-">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Include Uppercase(A-Z)</label>
              </div>
            </div>
            <div>
              <div className="chekbox-">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Include Number(0-9)</label>
              </div>
              <div className="chekbox-">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Include Symbols(!@#%^&)</label>
              </div>
            </div>
          </div>
          <div className="range-container">
          <div className="chekbox-1">
            <div className="range-num">

                <p>10</p>
            </div>
            <div className="ranges">

                <input  type="range" min={10} max={40} name="" id="" />
            </div>
              </div>
              </div>
        </div>
        <div  style={{
        marginTop:"08px"
          }} className="center-image">
          <button type="button" onClick={GenPass}>
           &nbsp; GENERATE NEW PASSWORD &nbsp;
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
