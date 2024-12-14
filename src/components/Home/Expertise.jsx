import React from "react";
import "./Expertise.css";
import img3 from "../../assets/WhatWeDo/img3.webp";
import img4 from "../../assets/WhatWeDo/img4.webp";
import img5 from "../../assets/WhatWeDo/img5.webp";
import img6 from "../../assets/WhatWeDo/img6.webp";
import outdoor_img1 from "../../assets/WhatWeDo/outdoor-img1.jpg";
import outdoor_ad1 from "../../assets/WhatWeDo/outdoor_ad1.png";
import digital_marketing from "../../assets/WhatWeDo/bullhorn.png";
import design_thinking from "../../assets/WhatWeDo/design-thinking.png";
import print_media from "../../assets/WhatWeDo/flyer.png";
import analysis from "../../assets/WhatWeDo/analysis.png";
import marketing from "../../assets/WhatWeDo/marketing.png";

import digital_marketing_img from "../../assets/WhatWeDo/digital-marketing-img.jpg";
import blue_tick from "../../assets/WhatWeDo/approved.png";
import red_tick from "../../assets/WhatWeDo/approved-red.png";
import yellow_tick from "../../assets/WhatWeDo/approved-yellow.png";
import orange_tick from "../../assets/WhatWeDo/approved-orange.png";
import purple_tick from "../../assets/WhatWeDo/approved-purple.png";
import lightblue_tick from "../../assets/WhatWeDo/approved-light-blue.png";
import audio_visual from "../../assets/WhatWeDo/audio-visual.png";



function WhatWeDo() {
  return (
    <div className="whatwedo" id="services">
      <div className="whatwedo-con">
        <div className="our-expertise">
          <h1>
            OUR EXPERTISE<p>OUR EXPERTISE</p>
          </h1>
        </div>

        <div className="service-heading">
          <h1>High-Impact Services to take your bussiness to next level</h1>
          <p>
            Accelerate your business growth with tailored, high-impact services
            designed to unlock new opportunities and maximize your brand's
            success.
          </p>
        </div>
        <div className="whatwedo-box">
          <div
            to={"/Outdoor-Advertising-in-Raipur"}
            className="wwd-box"
            data-aos="fade-up"
          >
            <img src={outdoor_ad1} alt="" className="outdoor-image" />
            <h3>Outdoor Advertising</h3>
            <p className="desc1">
              Grow your brand with the best <a href="https://spadvertising.in/Outdoor-Advertising-in-Raipur"> outdoor advertising agency</a>  in
              Raipur, offering hoardings, gantry, and mobile advertising
              solutions.
            </p>
            <div className="points">
              <div className="points-box">
                <img src={blue_tick} alt="" />
                <p>Mobile Hoarding</p>
              </div>
              <div className="points-box">
                <img src={blue_tick} alt="" />
                <p>Hoardings</p>
              </div>
              <div className="points-box">
                <img src={blue_tick} alt="" />
                <p>Gantry</p>
              </div>
              <div className="points-box">
                <img src={blue_tick} alt="" />
                <p>Pole Kiosk</p>
              </div>
            </div>
          </div>
          <div
            
            className="wwd-box"
            data-aos="fade-up"
          >
            <img src={digital_marketing} alt="" className="outdoor-image" />
            <h3>Digital Marketing</h3>
            <p className="desc1">
            Boost your business with a leading <a href="https://spadvertising.in/Digital-Marketing-in-Raipur">digital marketing company</a>  in Raipur, offering SEO, social media, and advertising solutions.
            </p>
            <div className="points">
              <div className="points-box">
                <img src={purple_tick} alt="" />
                <p>Website Development</p>
              </div>
              <div className="points-box">
                <img src={purple_tick} alt="" />
                <p>SEO / SEM Omtimization</p>
              </div>
              <div className="points-box">
                <img src={purple_tick} alt="" />
                <p>Social Media Marketing</p>
              </div>
              <div className="points-box">
                <img src={purple_tick} alt="" />
                <p>Application Development</p>
              </div>
            </div>
          </div>
          <div
            to={"/Designing-Services-in-Raipur"}
            className="wwd-box"
            data-aos="fade-up"
          >
            <img src={design_thinking} alt="" className="outdoor-image" />
            <h3>Designing Services</h3>
            <p className="desc1">
            Elevate your brand with a top <a href="https://spadvertising.in/Designing-Services-in-Raipur">designing services company</a>  in Raipur, specializing in logos, graphics, and creative web designs.
            </p>
            <div className="points">
              <div className="points-box">
                <img src={yellow_tick} alt="" />
                <p>Packaging</p>
              </div>
              <div className="points-box">
                <img src={yellow_tick} alt="" />
                <p>Creative Concepts</p>
              </div>
              <div className="points-box">
                <img src={yellow_tick} alt="" />
                <p>Design & Artwork</p>
              </div>
            </div>
          </div>
          <div
            to={"/Audio-Visuals-in-Raipur"}
            className="wwd-box"
            data-aos="fade-up"
          >
            <img src={audio_visual} alt="" className="outdoor-image" />
            <h3>Audio Visual</h3>
            <p className="desc1">
            Enhance your events with top-notch <a href="https://spadvertising.in/Designing-Services-in-Raipur">audio visual services</a>  in Raipur, offering sound systems, video setups, and seamless presentations.
            </p>
            <div className="points">
              <div className="points-box">
                <img src={lightblue_tick} alt="" />
                <p>Video Presentations</p>
              </div>
              <div className="points-box">
                <img src={lightblue_tick} alt="" />
                <p>Short Films / Documentry</p>
              </div>
              <div className="points-box">
                <img src={lightblue_tick} alt="" />
                <p>Radio & TV Commercials</p>
              </div>
              <div className="points-box">
                <img src={lightblue_tick} alt="" />
                <p>Photography & Videography</p>
              </div>
            </div>
          </div>

          <div
            to={"/Branding-Strategy-in-Raipur"}
            className="wwd-box"
            data-aos="fade-up"
          >
            <img src={analysis} alt="" className="outdoor-image" />
            <h3>Branding & Strategy</h3>
            <p className="desc1">
            Leading <a href="https://spadvertising.in/Branding-Strategy-in-Raipur">branding & strategy company</a>  in Raipur, crafting impactful brand identities and growth-driven marketing strategies.
            </p>
            <div className="points">
              <div className="points-box">
                <img src={orange_tick} alt="" />
                <p>Communication Strategy</p>
              </div>
              <div className="points-box">
                <img src={orange_tick} alt="" />
                <p>Creative 360 Campaigns</p>
              </div>
              <div className="points-box">
                <img src={orange_tick} alt="" />
                <p>Corporate and Brand Identity</p>
              </div>
            </div>
          </div>
          <div
            to={"/Print-Media-in-Raipur"}
            className="wwd-box"
            data-aos="fade-up"
          >
            <img src={print_media} alt="" className="outdoor-image" />
            <h3>Print Media</h3>
            <p className="desc1">
            Promote your brand with a trusted <a href="https://spadvertising.in/Event-Promotion-in-Raipur">print media company</a>  in Raipur, offering high-quality printing solutions for various needs.
            </p>
            <div className="points">
              <div className="points-box">
                <img src={red_tick} alt="" />
                <p>News Paper Ads</p>
              </div>
              <div className="points-box">
                <img src={red_tick} alt="" />
                <p>Brochure</p>
              </div>
              <div className="points-box">
                <img src={red_tick} alt="" />
                <p>Pamphlet</p>
              </div>
              <div className="points-box">
                <img src={red_tick} alt="" />
                <p>In-Shop Branding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
