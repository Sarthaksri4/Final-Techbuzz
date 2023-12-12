import React from "react";
import Card from "../Components/Card";
import sir_card from "../assets/Sir_Card.svg";
import mam_card from '../assets/Mam_Card.svg'
import middle from "../assets/Image_middle.svg";
import mobile from '../assets/Mobile_cover.svg'
import Footer from '../Components/Footer'
import './Pages.css'

const Faculty = () => {
  return (
    <div>
      <div className="Header"></div>
      <div className="faculty-content">
        <Card />
        <h1>Faculty Coordinators</h1>
        <div className="WhiteCard">
            <img src={sir_card} alt="ImageNA" className="Image" />
            <img src={middle} alt="ImageNA" className="design"/>
            <img src={mobile} alt="ImageNA" className="mobile_design"/>
            <img src={mam_card} alt="ImageNA" className="Image" />
        </div>
      </div>
      <div className="footer_facultypage"> <Footer /></div>
    </div>
  );
};

export default Faculty;
