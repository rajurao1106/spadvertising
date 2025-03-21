import React from "react";
import "./Blog.css";
import digital_marketing_img1 from "../../assets/Blog/digital-marketing-img9.jpg";
import digital_marketing_img2 from "../../assets/Blog/digital-marketing-img8.jpg";
import digital_marketing_img3 from "../../assets/Blog/digital-marketing-img7.jpg";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";

export default function HomeBlog() {
  const blogs = [
    {
      id: "1",
      date: "January 28, 2025",
      title: "Social Media Marketing: Best Practices for Engaging Your Audience",
      image: digital_marketing_img1,
      link: "https://spadvertising.in/Blog",
      category: "Social Media",
    },
    {
      id: "2",
      date: "January 17, 2025",
      title: "Influencer Marketing: Driving Success and Growth in 2025",
      image: digital_marketing_img2,
      link: "https://spadvertising.in/Blog",
      category: "Influencer Marketing",
    },
    {
      id: "3",
      date: "January 17, 2025",
      title: "What is Digital Marketing? Types, Examples and Benefits",
      image: digital_marketing_img3,
      link: "https://spadvertising.in/Blog",
      category: "Digital Marketing",
    },
  ];

  return (
    <div className="homeblog">
      <div className="about-title">
        <h1>
          BLOGS <span>BLOGS</span>
        </h1>
      </div>

      <div className="homeblog-con">
        <section className="homeblog-article">
          <div className="homeblog-article-title">
            <h2>Latest Insights</h2>
            <p>
              Discover the latest trends, strategies, and insights in digital
              marketing to help grow your business.
            </p>
          </div>
        </section>

        <div className="homeblog-main">
          {blogs.map((blog) => (
            <article key={blog.id} className="homeblog-main-con">
              <div>
                <span className="category-tag">{blog.category}</span>
                <img src={blog.image} alt={blog.title} loading="lazy" />
              </div>
              <div className="homeblog-main-details">
                <p>
                  <SlCalender /> {blog.date}
                </p>
                <h3>{blog.title}</h3>
                <Link className="Link" to={blog.link} aria-label={`Read more about ${blog.title}`}>
                  Read More <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
