import React from "react";  
import Footer from "../Components/Footer";
import Tech from "../assets/Group 30(1).svg";
import Rohit from "../assets/Ellipse 40.svg";
import location from "../assets/Vector(1).svg";
import calender from "../assets/Vector(3).svg";
import { useNavigate } from "react-router-dom";
import './Pages.css'

const Home = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/register");
  }

  return (
    <div className="home-container flex flex-col  ">
      <div className="home-content absolute text-[#fff]  mt-10  flex flex-col">
        <div className="main-upside ">
          <div className="upside-left">
            <img src={Tech} alt="ImageNA"></img>
          </div>
          <div className="upside-right">
            <img src={Rohit} alt="ImageNA"></img>
          </div>
        </div>

        <div className="main-below flex justify-between">
          <div className="below-left flex flex-col ml-2 justify-between">
            <div className="below-upside flex justify-between ">
              <div className="some flex gap-3 absolute left-[5%]">
                <div>
                  {" "}
                  <img src={location} alt="ImageNA"></img>
                </div>
                <div>
                  <p>CS/IT</p>
                  <p>seminar hall</p>
                </div>
              </div>
              <div className="some flex gap-3 absolute left-[35%]">
                <div>
                  {" "}
                  <img src={calender} alt="ImageNA"></img>
                </div>
                <div>
                  {" "}
                  <p>Date: 15th Dec</p>
                  <p>1:00PM onwards</p>
                </div>
              </div>
            </div>
            <div className="below-downside text-[#fff]">
              <button
                className="btn-pink absolute top-[80%] bg-[#fff] text-[#000] w-40 h-14 m-30 font-semibold p-3 rounded-md"
                onClick={clickHandler}
              >
                Register now
              </button>
            </div>
          </div>
          <div className="text-right font-poppins">
            <div className="font-bold text-2xl">
              <p>Speaker</p>
            </div>
            <div className="font-bold ">
            <p>Rohit Negi</p>
            </div>
            <div className="about_Rohitsir text-sm w-[100%]">
              <p>
               IIT Guwahati |
               Ex- UBER SDE |
              Got Highest
              Placement in 
              India of 2Cr+ |
               150K+ Youtube</p>
            </div>
          </div>
        </div>

        <div className="Home_footer text-[#fff] absolute top-[150%]">

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
