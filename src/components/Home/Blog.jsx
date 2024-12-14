import React from "react";
import "./Blog.css";
import outdoor_img1 from "../../assets/Blog/outdoor-img1.jpg";
import digital_marketing_img from "../../assets/Blog/digital-marketing-img.jpg";
import img3 from "../../assets/Blog/img3.webp";
import { Link } from "react-router-dom";

export default function HomeBlog() {
  const blogs = [
    {
      id: "1",
      title: "Outdoor Advertising",
      description:
        "Capturing Attention On-the-Go: The Power of Outdoor Advertising in Public Spaces.",
      image: outdoor_img1,
      link: "/Outdoor-Advertising-in-Raipur",
    },
    {
      id: "1",
      title: "Digital Marketing",
      description:
        "Connecting Brands: Digital marketing strategies boost engagement by connecting brands with audiences",
      image: digital_marketing_img,
      link: "/Digital-Marketing-in-Raipur",
    },
    {
      id: "1",
      title: "Designing & Services",
      description:
        "Visual Storytelling: Designing Services for Enhanced Brand Identity and User Experience",
      image: img3,
      link: "/Designing-Services-in-Raipur",
    },
  ];

  return (
    <div className="homeblog">
      <div className="homeblog-title">
        <h1>
          BLOGS<p>BLOGS</p>
        </h1>
      </div>
      <div className="homeblog-con">
        <div className="homeblog-article">
          <div className="homeblog-article-title">
            <div className="homeblog-article-title-con">
              <h1>Browse Our Content On Growth Marketing</h1>
              <p>
                Explore our blog for actionable growth marketing tips,
                strategies, tools, and trends to elevate your business and
                achieve success.
              </p>
            </div>
          </div>
        </div>
        <div className="homeblog-main">
          {blogs.map((blog) => (
            <div key={blog.id} className="homeblog-main-con">
              <img src={blog.image} alt="" />
              <div className="homeblog-main-details">
                <h3 className="">{blog.title}</h3>
                <p>{blog.description}</p>
                <Link to={blog.link}>Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
