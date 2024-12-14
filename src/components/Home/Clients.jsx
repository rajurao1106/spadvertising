import React from "react";
import "./Clients.css";
import client1 from "../../assets/WelcomePage/client1.png";
import client2 from "../../assets/WelcomePage/client2.png";
import client3 from "../../assets/WelcomePage/client3.jpeg";
import client4 from "../../assets/WelcomePage/client4.png";
import client5 from "../../assets/WelcomePage/client5.svg";
import client6 from "../../assets/WelcomePage/client6.webp";
import client7 from "../../assets/WelcomePage/client7.png";
import client8 from "../../assets/WelcomePage/client8.jpeg";
import client9 from "../../assets/WelcomePage/client9.png";
import client10 from "../../assets/WelcomePage/client10.svg";
import client11 from "../../assets/WelcomePage/client11.png";
import client12 from "../../assets/WelcomePage/client12.jpeg";
import client13 from "../../assets/WelcomePage/client13.png";
import client14 from "../../assets/WelcomePage/client14.png";
import client15 from "../../assets/WelcomePage/client15.webp";
import client16 from "../../assets/WelcomePage/client16.jpg";
import client17 from "../../assets/WelcomePage/client17.webp";

export default function HomeClients() {
  return (
    <div className="home-clients">
      <div className="home-clients-con">
        <div className="home-clients-title">
          <h1>
            OUR CLIENTS<p>OUR CLIENTS</p>
          </h1>
        </div>

        <p className="home-clients-con-p">At SP Advertising, we create impactful ads that capture attention and deliver results. Our expert team is dedicated to ensuring every project’s success, whether for outdoor advertising and digital ads campaigns.</p>

        <div className="home-clients-images">
          <img src={client1} alt="" />

          <img src={client2} alt="" />

          <img src={client3} alt="" />

          <img src={client4} alt="" />
          <img className="img-visible" src={client7} alt="" />
          <img src={client5} alt="" />
          <img className="img-visible" src={client6} alt="" />

          <img src={client8} alt="" />

          <img src={client9} alt="" />

          <img src={client10} alt="" />

          <img src={client11} alt="" />

          <img src={client12} alt="" />

          <img src={client13} alt="" />

          <img src={client14} alt="" />

          <img className="img-visible" src={client15} alt="" />

          <img src={client16} alt="" />

          <img src={client17} alt="" />
        </div>
      </div>
    </div>
  );
}
