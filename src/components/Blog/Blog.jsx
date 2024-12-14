import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import update_image from "../../assets/Blog/brand.jpg";
import img3 from "../../assets/Blog/img3.webp";
import img4 from "../../assets/Blog/img4.webp";
import img5 from "../../assets/Blog/img5.webp";
import img6 from "../../assets/Blog/img6.webp";
import outdoor_img1 from "../../assets/Blog/outdoor-img1.jpg";
import digital_marketing_img from "../../assets/Blog/digital-marketing-img.jpg";

const articles = [
  {
    img: outdoor_img1,
    title:
      "Capturing Attention On-the-Go: The Power of Outdoor Advertising in Public Spaces",
    link: "/Outdoor-Advertising-in-Raipur",
  },
  {
    img: digital_marketing_img,
    title:
      "Connecting Brands with Audiences: Digital Marketing Strategies for Enhanced Engagement",
    link: "/Digital-Marketing-in-Raipur",
  },
  {
    img: img3,
    title:
      "Visual Storytelling: Designing Services for Enhanced Brand Identity and User Experience",
    link: "/Designing-Services-in-Raipur",
  },
  {
    img: img5,
    title:
      "Crafting Unique Brand Identities: Strategic Planning for Long-Term Success",
    link: "/Print-Media-in-Raipur",
  },
  {
    img: img4,
    title: "Tangible Impact: The Enduring Power of Print Media in Advertising",
    link: "/Branding-Strategy-in-Raipur",
  },
  {
    img: img6,
    title:
      "Driving Engagement and Attendance: Effective Strategies for Event Promotion",
    link: "/Event-Promotion-in-Raipur",
  },
];

function Blog() {
  return (
    <div className="blog">
      <Helmet>
        <title>Blog: SP Advertising</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>
      <div className="new-update">
        <div className="headline-up">
          <div className="blog-item">
            <h3>Blog</h3>
            <div className="headline">
              <div className="headline-con">
                <h1 data-aos="fade-up" data-aos-duration="500">
                  The Significance of Branding in Digital Marketing
                </h1>
                <p data-aos="fade-up" data-aos-duration="1000">
                  "Exploring how a strong brand identity can impact your digital
                  marketing efforts and overall online presence. Discussing the
                  significance of content marketing and providing tips on
                  creating and distributing high-quality content."
                </p>
              </div>
            </div>
            <div className="update-image">
              <img
                src={update_image}
                alt="Branding Image"
                data-aos="fade-up"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="articles">
        <h1>Latest articles</h1>
        <div className="latest-article">
          {articles.map((article, index) => (
            <div className="article-box" key={index}>
              <div className="img-text">
                <img src={article.img} alt={article.title} />
                <h3>{article.title}</h3>
              </div>
              <Link to={article.link}>
                <p>
                  Read More <div className="p-dot"></div>
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
