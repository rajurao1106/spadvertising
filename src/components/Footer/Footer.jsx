import React from "react";
import "./Footer.css";
import facebook from "../../assets/Footer/facebook.png";
import instagram from "../../assets/Footer/instagram.png";
import linkedin from "../../assets/Footer/linkedin.png";
import youtube from "../../assets/Footer/youtube.png";
import logo from "../../assets/Navbar/logo.webp";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <div className="footer-con">
        <div className="footer-box">
          <div className="best-line">
            <img src={logo} alt="" />
            <p>
              SP Advertising is a 360-degree marketing and branding agency
              dedicated to delivering exceptional results. Our team of experts
              combines knowledge and passion to create impactful campaigns that
              drive business growth.
            </p>
          </div>

          <div className="footer-contact">
            <h2>Pages</h2>
            <div className="pages">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"/About"}>
                <li>About</li>
              </Link>
              <Link to={"/Welcome-page"}>
                <li>Clients</li>
              </Link>
              <Link to={"/Contact"}>
                <li>Contact Us</li>
              </Link>
              <Link to={"/Blog"}>
                <li>Blog</li>
              </Link>
              <Link to={"https://forms.gle/9fxJFB3RH6nysCb77"}>
                <li>Career</li>
              </Link>
            </div>
          </div>

          <div className="footer-service">
            <h2>Services</h2>
            <div className="pages">
              <Link to={"/Outdoor-Advertising-in-Raipur"}>
                <li>Outdoor Advertising</li>
              </Link>
              <Link to={"/Digital-Marketing-in-Raipur"}>
                <li>Digital Marketing</li>
              </Link>
              <Link to={"/Designing-Services-in-Raipur"}>
                <li>Designing Services</li>
              </Link>
              <Link to={"/Audio-Visuals-in-Raipur"}>
                <li>Audio Visuals</li>
              </Link>
              <Link to={"/Branding-Strategy-in-Raipur"}>
                <li>Branding & Strategy</li>
              </Link>
              <Link to={"/Event-Promotion-in-Raipur"}>
                <li>Event Promotion</li>
              </Link>
              <Link to={"/Print-Media-in-Raipur"}>
                <li>Print Media</li>
              </Link>
            </div>
          </div>

          <div className="div2">
            <div className="address">
              <div className="footer-conct">
                <h2>Contacts</h2>
                <p>+91-8085354646</p>
                <p>spadvertising@live.com</p>
              </div>
              <div className="icons">
                <a href="https://www.facebook.com/spadvertisingraipur">
                  <img src={facebook} alt="" />
                </a>
                <a href="https://www.instagram.com/spadvertisingrpr/">
                  <img src={instagram} alt="" />
                </a>
                <a href="https://www.linkedin.com/company/sp-advertising20/posts/?feedView=all">
                  <img src={linkedin} alt="" />
                </a>
                <a href="https://www.youtube.com/@spadvertising530">
                  <img src={youtube} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="copyright">
        <p>
          © Copyright 2024 <a href="https://spadvertising.in">SP Advertising</a>{" "}
          - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;