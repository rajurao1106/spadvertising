import React from "react";
import "./Services.css";
import { Helmet } from "react-helmet";
import outdoor_img1 from "../../assets/Services/AudioVisuals/AudioVisuals.png";
import { Link } from "react-router-dom";
import showcase1 from "../../assets/Services/AudioVisuals/AudioVisuals3.jpg";
import showcase2 from "../../assets/Services/AudioVisuals/AudioVisuals4.jpg";
import outdoor_img2 from "../../assets/Services/AudioVisuals/AudioVisuals1.jpg";
import gantry from "../../assets/Services/AudioVisuals/AudioVisuals2.jpg";

export default function AudioVisuals() {
  return (
    <div className="service">
      <div className="service-box-con">
      <div className="service-box">
          <div className="service-left">
            <h1>Audio Visuals</h1>
            <p data-aos="fade-right">
              Audio visuals combine sound and imagery to convey information,
              enhance communication
            </p>
            <Link to={'/Contact'}><button>Enquire Now</button></Link>
          </div>
          <div className="service-right">
            <img
              src={outdoor_img1}
              alt="Outdoor Advertising in Raipur"
             
            />
          </div>
        </div>
      </div>
      <Helmet>
        <title>
          Best Video Visuals service in Raipur |Video Visuals | SP
          Advertising
        </title>
        <meta
          name="description"
          content="Elevate your brand visibility with our expert outdoor advertising services. From billboards to hoardings, we deliver impactful campaigns that drive results. Contact us today!"
        />
        <meta
          name="keywords"
          content="Outdoor advertising services, Best outdoor advertising agency, Billboard advertising solutions, Professional outdoor advertising, Creative outdoor marketing,"
        />
      </Helmet>
      <div className="service-con">
        
        <div className="ul">
          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Video Presentations</h1>
              <p>
               <a href="https://spadvertising.in/Designing-Services-in-Raipur">Video presentations</a>  are a powerful medium for delivering
                information, combining visuals, animations, audio, and text to
                effectively engage audiences. They are commonly used in
                education, marketing, business meetings, and tutorials to
                simplify complex ideas and enhance viewer understanding.
              </p>
            </div>
            <img src={showcase1} alt="  " data-aos="zoom-in" />
          </div>

          <div className="topic-align1">
            <img
              src={outdoor_img2}
              alt="Hoardings in Raipur"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Short Films / Documentry</h1>
              <p>
                <a href="https://spadvertising.in/Designing-Services-in-Raipur">Short films and documentaries </a>are concise visual storytelling
                formats that explore various subjects, from fictional narratives
                to real-life events. They aim to entertain, inform, or inspire
                audiences by capturing powerful moments, emotions, and
                experiences in a brief time frame.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Radio & TV Commercials</h1>
              <p>
              <a href="https://spadvertising.in/Designing-Services-in-Raipur">Radio and TV commercials </a>Radio and TV commercials are audio-visual advertisements
                designed to promote products, services, or brands. They use
                compelling storytelling, catchy visuals, and sound to capture
                attention, influence consumer behavior, and drive brand
                awareness across mass media platforms.
              </p>
            </div>
            <img src={gantry} alt="Gantry" data-aos="zoom-in" />
          </div>

          <div className="topic-align1">
            <img
              src={showcase2}
              alt="Pole Kiosk in Raipur"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Photography & Videography</h1>
              <p>
                <a href="https://spadvertising.in/Designing-Services-in-Raipur">Photography and videography </a> are visual art forms capturing
                moments, scenes, or events through still images and moving
                visuals. They are used for storytelling, documentation,
                marketing, and personal expression, often combining technical
                skills with creativity to create impactful visuals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
