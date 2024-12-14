import React from "react";
import "./About.css";
import about_team from '../../assets/AboutMe/about-imge1.jpg'
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function HomeAbout() {
  return (
    <div className="home-about">
        <div className="about-title">
          <h1>
            ABOUT US<p>ABOUT US</p>
          </h1>
        </div>
      <div className="home-about-con">
      
        <div className="home-content">
          
          <h1>The great team of industry expert behind Growth</h1>
          <p>
            Behind every success, there’s a team of seasoned professionals. Meet
            our industry experts who bring unparalleled expertise, innovation,
            and dedication to drive sustainable growth and transformation.
          </p>
          <Link to={'/About'}><button>About Us</button></Link>
        </div>
        <img src={about_team} alt="" />
      </div>
    </div>
  );
}
