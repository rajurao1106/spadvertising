import React from "react";
import "./Services.css";
import { Helmet } from "react-helmet";
import design from "../../assets/Services/DesigningServices/design.png";
import { Link } from "react-router-dom";
import packaging_img from "../../assets/Services/DesigningServices/packaging-img.jpg";
import packaging_img2 from "../../assets/Services/DesigningServices/creative-design3.jpg";
import packaging_img1 from "../../assets/Services/DesigningServices/creative-design8.jpg";

function DesigningServices() {
  return (
    <div className="service">
      <div className="service-box-con">
      <div className="service-box">
          <div className="service-left">
            <h1>Designing Services</h1>
            <p>
              Visual Storytelling: Designing Services for Enhanced Brand
              Identity and User Experience
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <img
              src={design}
              alt="Designing Services in Raipur"
              
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
          content="Elevate your business with top branding services! From creative solutions to tailored strategies, we help you grow and stand out. Contact us today!"
        />
        <meta
          name="keywords"
          content="Professional designing services,Creative design solutions,Best design services,Graphic designing services,Affordable designing services,Custom designing services for businesses,Top creative design agencies near me,Affordable graphic designing solutions,Expert design services for startups,Innovative designing services for branding,Best designing services in  Raipur,Creative design agency in Raipur,Affordable designing solutions near Raipur,Graphic designing company in Raipur"
        />
      </Helmet>
      <div className="service-con">
        
        <div className="ul">
          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Packaging</h1>
              <p>
                In today's competitive market, having the <a href="https://spadvertising.in/Designing-Services-in-Raipur">Best Packaging Design Company</a> 
                Service is essential to capture consumer attention. Our creative
                solutions ensure your packaging is not only visually stunning
                but also functional and aligned with your brand's identity. With
                the Best Packaging Design Service, you can make a memorable
                impact that drives sales and brand loyalty.
              </p>
            </div>
            <img
              src={packaging_img}
              alt="Packaging in Raipur"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              src={packaging_img1}
              alt="Creative Concepts in Raipur"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Creative Concepts</h1>
              <p>
              <a href="https://spadvertising.in/Designing-Services-in-Raipur">Creative concepts company</a> involve generating original ideas and visual
                strategies to convey a brand’s message uniquely. This process
                includes brainstorming, sketching, and developing innovative
                themes that resonate with target audiences and differentiate the
                brand.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Design & Artwork</h1>
              <p>
              <a href="https://spadvertising.in/Designing-Services-in-Raipur">Design & artwork agency</a> encompass the creation of visual elements for
                various media. This includes graphic design, illustrations, and
                layouts that effectively communicate ideas, enhance brand
                identity, and engage audiences through aesthetically pleasing
                and functional visuals.
              </p>
            </div>
            <img
              src={packaging_img2}
              alt="Design & Artwork in Raipur"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesigningServices;
