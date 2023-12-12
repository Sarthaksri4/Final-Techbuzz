import React from "react";
import Tech from "../assets/Tech1.svg";
import Rishabh from "../assets/Rectangle 29.svg";
import Sarthak from "../assets/Sarthak Srivastava 1.svg";
import Priya from "../assets/20221127_183841 1.svg";
import location from "../assets/Vector(1).svg";
import akgec from "../assets/Group 41.svg";
import call from "../assets/Vector(2).svg";

const Footer = () => {
  return (
    <div className="footer-container flex flex-col  ">
      <div className="Tech-Buzz m-auto w-96 mt-5">
        <img src={Tech} alt="" />{" "}
      </div>

      <div className="footer-main flex justify-evenly">
        <div className="picture-card text-[#fff] bg-[#312f2f] ">
          <div className="picture w-40 bg-[#312f2f] ">
            <img className="rounded-xl bg-[#312f2f]" src={Rishabh} alt="" />
          </div>
          <div className="picture-content w-40 bg-[#312f2f] ">
            <p className="bg-[#312f2f] mx-7">Risabh Gupta</p>
            <p className="bg-[#312f2f] mx-2">(Event Coordinator)</p>
          </div>
        </div>
        <div className="picture-card text-[#fff] bg-[#312f2f] ">
          <div className="picture w-40 bg-[#312f2f] ">
            <img className=" .priya_maamphoto rounded-xl bg-[#312f2f]" src={Priya} alt="" />
          </div>
          <div className="picture-content w-40 bg-[#312f2f] ">
            <p className="bg-[#312f2f] mx-7">Priya Sharma</p>
            <p className="bg-[#312f2f] mx-2">(Event Coordinator)</p>
          </div>
        </div>

        <div className="picture-card text-[#fff] bg-[#312f2f] ">
          <div className="picture w-40 h-30 bg-[#312f2f] ">
            <img className="rounded-xl bg-[#312f2f]" src={Sarthak} alt="" />
          </div>
          <div className="picture-content w-40 bg-[#312f2f] ">
            <p className="bg-[#312f2f] mx-7">Sarthak Srivastava</p>
            <p className="bg-[#312f2f] mx-2">(Event Coordinator)</p>
          </div>
        </div>
      </div>

      <div className="footer-below flex justify-around flex-wrap absolute top-[120%]">
        <div className="footer-links text-[#fff]">
          <div className="flex gap-1">
            <div className="logo-image">
              {" "}
              <img src={akgec} alt="" />
            </div>
            <div className="logo-para">
              {" "}
              <p>
                Ajay Kumar Garg Engineering College, 27th Km milestone NH-24
                Delhi-Hapur Bypass, Adhyatmik Nagar Ghaziabad.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="logo-image">
              <img src={location} alt="" />
            </div>
            <div className="logo-para">
              {" "}
              <p>
                If you require help or have any inquiries, feel free to reach
                out - we're here to support you. CCC Lab, 3th floor CSIT Block
              </p>
            </div>
          </div>
        </div>

        <div className="contact flex text-[#fff] flex-col gap-1 m-5">
          <div>
            <h2>Contacts</h2>
          </div>
          <div className="flex justify-between gap-2 ">
            <div>
              <img src={call} alt="" />
            </div>
            <div>
              <p>+919120616821</p>
              <p>+917355648107</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;