import React from "react";
import "./Hero.css";
import img3 from "../../assets/WhatWeDo/img3.webp";
import hero_outdoor from "../../assets/Home/hero_outdoor.png";
import hero_digital from "../../assets/Home/hero_digital.png";
import hero_design from "../../assets/Home/hero_design.png";
import hero_event from "../../assets/Home/hero_event.png";
import hero_bg from "../../assets/Home/hero_bg.png";
import img_bg from "../../assets/Home/bg.png";
import { Link } from "react-router-dom";
import right_arrow from "../../assets/Home/right-arrow.png";
import FloatingBalloons from "../Home/FloatingBalloons";

export default function AnimationHero() {
  return (
    <div className="hero">
    <FloatingBalloons/>
      <div className="hero-con">
        <div className="shadow-effect"></div> 
        <div className="hero-content">
          <h1>Empowering Your Brand with Strategic Advertising</h1>
          <h2 className="typing-effect"></h2>
          <p>
            Welcome to SP ADVERTISING, We are one of the most creative and
            well-established advertising agencies in Raipur Chhattisgarh. With
            SP Advertising, make your brand live better.
          </p>
          <br />
          <Link to={"https://spadvertising.in/Services"}>
            <button className="hero-btn">
              Get Services
              <div className="btn-hover">
                <img src={right_arrow} alt="Digital Marketing in Raipur" />
              </div>
            </button>
          </Link>
        </div>
        <div className="hero-anim-bg">
          <img src={img_bg} alt="Advertising in Raipur" className="services-con" />
          <img src={hero_bg} alt="Creatives Designing Services in Raipur" className="hero-anim-img" />
        </div>
        <div className="hero-images">
          <div className="round">
            <div className="round-con">
              <div className="round-ele1">
                <div className="hero-box">
                  <img
                    src={hero_outdoor}
                    alt="Advertising agency near me"
                    className="img-rotate1"
                  />
                </div>
                <div className="hero-box">
                  <img
                    src={hero_digital}
                    alt="Advertising agency jobs"
                    className="img-rotate2"
                  />
                </div>
              </div>
              <div className="round-ele2">
                <div className="hero-box">
                  <img
                    src={hero_design}
                    alt="Top Advertising agency in Raipur"
                    className="img-rotate3"
                  />
                </div>
                <div className="hero-box">
                  <img
                    src={hero_event}
                    alt="Advertising agency in Raipur"
                    className="img-rotate4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
