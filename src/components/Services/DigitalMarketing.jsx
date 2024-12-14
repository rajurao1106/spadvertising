import React from "react";
import "./Services.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import digital_marketing_img from "../../assets/Services/DigitalMarketing/digital-marketing-img.jpg";
import digital_marketing_img1 from "../../assets/Services/DigitalMarketing/digital-marketing-img1.jpg";
import digital_marketing_img2 from "../../assets/Services/DigitalMarketing/digital-marketing-img2.jpg";
import digital_marketing_img3 from "../../assets/Services/DigitalMarketing/digital-marketing-img3.jpg";
import digital_marketing_img4 from "../../assets/Services/DigitalMarketing/digital-marketing-img4.jpg";

function DigitalMarketing() {
  return (
    <div className="service">
      <div className="service-box-con">
        <div className="service-box">
          <div className="service-left">
            <h1>Digital Marketing</h1>
            <p>
              Connecting Brands with Audiences: Digital Marketing Strategies for
              Enhanced Engagement
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <img
              src={digital_marketing_img}
              alt="Digital Marketing in Raipur"
              
            />
          </div>
        </div>
      </div>
      <Helmet>
        <title>
          Best Digital Marketing agency in Raipur | Digital Marketing services
        </title>
        <meta
          name="description"
          content="Grow your business with the best digital marketing agency in Raipur. Expert strategies in SEO, social media, and online marketing to uplift your business."
        />
      </Helmet>
      <div className="service-con">
        <div className="ul">
          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Website Development</h1>
              <p>
                SP Advertising offers exceptional <a href="https://spadvertising.in/Digital-Marketing-in-Raipur">Website Development services</a> 
                to enhance your online presence. Our team specializes in
                creating user-friendly, visually appealing websites that drive
                engagement and conversions, ensuring your brand stands out in
                the digital landscape with top-notch Website Development
                services.
              </p>
            </div>
            <img
              src={digital_marketing_img1}
              alt="Website Development in Raipur"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              src={digital_marketing_img2}
              alt="SEO / SEM Optimization in Raipur"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>SEO / SEM Optimization</h1>
              <p>
                SP Advertising provides premier <a href="https://spadvertising.in/Digital-Marketing-in-Raipur">SEO / SEM Optimization Service</a> 
                to boost your online visibility and drive targeted traffic to
                your website. Our expert team focuses on strategic SEO / SEM
                Optimization Service to enhance your search engine rankings and
                optimize your online marketing efforts for maximum impact and
                growth.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Social Media Marketing</h1>
              <p>
                SP Advertising provides the best <a href="https://spadvertising.in/Digital-Marketing-in-Raipur">Social Media Marketing Service</a> 
                to amplify your brand's presence across social media platforms.
                Our tailored approach ensures you receive the best Social Media
                Marketing Service, leveraging strategic content, targeted
                campaigns, and performance analytics to drive engagement and
                achieve your marketing objectives.
              </p>
            </div>
            <img
              src={digital_marketing_img3}
              alt="Social Media Marketing in Raipur"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              src={digital_marketing_img4}
              alt="Application Development in Raipur"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Application Development</h1>
              <p>
                SP Advertising delivers the best <a href="https://spadvertising.in/Digital-Marketing-in-Raipur">Application Development Service</a> 
                to create innovative, high-performance applications tailored to
                your business needs. Our commitment to excellence ensures you
                receive the best Application Development Service, with custom
                solutions that enhance functionality and user experience,
                driving your success in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;
