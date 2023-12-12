import React from "react";
import Card from '../Components/Card'
import Rohit from '../assets/Rohit.svg'
import About_Design from '../assets/AboutPage_design.svg'
import Footer from "../Components/Footer";
import './Pages.css'

const About = () => {
  return (
    <div>
      <div className="about-content">
        <Card />
        <h1>### Mastering Algorithms: Mr. Rohit Negi</h1>
        <div className="WhiteCard">
          <img src={About_Design} alt="Rohit" className="Left_design"/>
          <img src={Rohit} alt="ImageNA" className="Rohit"/>
          <img src={About_Design} alt="Rohit" className="Right_design"/>
          <section>
            <h4>Rohit Negi</h4>
            <h5>IIT Guwahati | Ex- UBER SDE |</h5>
            <h6>Got Highest Placement in India of 2Cr+ | 150K+ Youtube</h6>
            <p>Rohit Negi, a software engineer from Kotdwar, Uttarakhand, overcame academic challenges to secure a job at Uber with a starting salary of Rs 96 lakh. Despite average grades, his GATE score got him into IIT Guwahati for an MTech degree. Hailing from a lower-middle-class family, the news of his Rs 2.05 crore job offer brought immense joy. Apart from his job, Rohit runs a YouTube channel with 150k+ subscribers, sharing insights on GATE and placements. He is also the Founder of CoderArmy, a heartfelt problem solver, instructor, and visionary leader striving to make a positive impact. His journey, marked by hard work, resulted in the highest placement in India of 2 Cr+. Rohit is working hard to make technology better and more impactful for society.</p>
          </section>
        </div>
      </div>
      <div className="footer_facultypage"> <Footer /></div>
    </div>
  );
};

export default About;
