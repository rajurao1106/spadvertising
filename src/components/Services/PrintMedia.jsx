import React from "react";
import "./Services.css";
import { Helmet } from "react-helmet";
import print from "../../assets/Services/PrintMedia/print.png";
import { Link } from "react-router-dom";
import print_img2 from "../../assets/Services/PrintMedia/prini-img2.jpeg";
import Newspaper_Ads from "../../assets/Services/PrintMedia/Newspaper-Ads.jpg";
import Pamphlet from "../../assets/Services/PrintMedia/Pamphlet.jpg";
import inshop from "../../assets/Services/PrintMedia/inshop.png";
import inshop3 from "../../assets/Services/BrandingStrategy/inshop3.jpg";

function PrintMedia() {
  return (
    <div className="service">
      <div className="service-box-con">
        <div className="service-box">
          <div className="service-left">
            <h1>Print Media</h1>
            <p>
              Tangible Impact: The Enduring Power of Print Media in Advertising
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <img src={print} alt="Print Media in in Raipur" />
          </div>
        </div>
      </div>
      <Helmet>
        <title>Best Print Media company in Raipur | Print Media services</title>
        <meta
          name="description"
          content="Boost your brand with impactful print ads! From magazines to newspapers, we deliver tailored print solutions to grow your business. Contact us today!"
        />
        <meta
          name="keywords"
          content="Print media advertising, Print media services, Best print advertising agency, Professional print media solutions, Creative print advertising,"
        />
      </Helmet>
      <div className="service-con">
        <div className="ul">
          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Newspaper Ads</h1>
              <p>
                <a href="https://spadvertising.in/Print-Media-in-Raipur">Newspaper ads</a> are print advertisements placed in newspapers to
                reach a broad, local audience. They use compelling visuals and
                text to promote products or services, leveraging the newspaper’s
                daily readership for targeted exposure.
              </p>
            </div>
            <img
              src={Newspaper_Ads}
              alt="Newspaper Ads in Raipur"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img src={print_img2} alt="Brochure in Raipur" data-aos="zoom-in" />
            <div className="topic-left" data-aos="fade-right">
              <h1>Brochure</h1>
              <p className="dr">
                A <a href="https://spadvertising.in/Print-Media-in-Raipur">brochure</a> is a printed booklet that provides detailed
                information about products, services, or organizations. It uses
                high-quality graphics and structured content to inform and
                persuade potential customers, often distributed in public places
                or direct mail.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Pamphlet</h1>
              <p>
                A <a href="https://spadvertising.in/Print-Media-in-Raipur">pamphlet</a> is a small, folded booklet or flyer designed to offer
                concise information about a specific topic, product, or service.
                It aims to educate and engage readers through clear,
                straightforward content and appealing design.
              </p>
            </div>
            <img src={Pamphlet} alt="Pamphlet in Raipur" data-aos="zoom-in" />
          </div>

          <div className="topic-align1">
            <img
              src={inshop3}
              alt="In-Shop Branding in Raipur"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>In-Shop Branding</h1>
              <p>
                In-shop branding includes print materials like posters, banners,
                and point-of-sale displays used within retail environments. It
                enhances the shopping experience by reinforcing brand identity,
                promoting products, and guiding customer behavior at the point
                of purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrintMedia;
