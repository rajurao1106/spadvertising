import React from "react";
import "./Portfolio.css";
import portfolio_heading_img from "../../assets/Portfolio/heading-img.jpg";
import homepage1 from "../../assets/Portfolio/homepage1.png";
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import Slider from "react-slick";

import outdoor_img1 from "../../assets/Services/OutdoorAdvertising/outdoor-img1.png";
import outdoor_img2 from "../../assets/Services/OutdoorAdvertising/hoarding.jpg";
import showcase1 from "../../assets/Services/OutdoorAdvertising/showcase1.webp";
import showcase2 from "../../assets/Services/OutdoorAdvertising/showcase2.webp";
import gantry from "../../assets/Services/OutdoorAdvertising/gantry.jpg";
import outdoor1 from "../../assets/Services/OutdoorAdvertising/Outdoor-Advertising1.jpg";
import outdoor2 from "../../assets/Services/OutdoorAdvertising/Outdoor-Advertising2.jpg";
import outdoor3 from "../../assets/Services/OutdoorAdvertising/Outdoor-Advertising3.jpg";
import outdoor4 from "../../assets/Services/OutdoorAdvertising/Outdoor-Advertising4.jpg";
import outdoor5 from "../../assets/Services/OutdoorAdvertising/Outdoor-Advertising5.jpg";
import outdoor6 from "../../assets/Services/OutdoorAdvertising/Outdoor-Advertising6.jpg";
import outdoor7 from "../../assets/Services/OutdoorAdvertising/Outdoor-Advertising7.jpg";
import outdoor8 from "../../assets/Services/OutdoorAdvertising/Outdoor-Advertising8.jpg";
import outdoor9 from "../../assets/Services/OutdoorAdvertising/Outdoor-Advertising9.jpg";
import outdoor10 from "../../assets/Services/OutdoorAdvertising/Outdoor-Advertising10.jpg";
import outdoor11 from "../../assets/Services/OutdoorAdvertising/Outdoor-Advertising11.jpg";

import digital_marketing_img from "../../assets/Services/DigitalMarketing/digital-marketing-img.jpg";
import digital_marketing_img1 from "../../assets/Services/DigitalMarketing/digital-marketing-img1.jpg";
import digital_marketing_img2 from "../../assets/Services/DigitalMarketing/digital-marketing-img2.jpg";
import digital_marketing_img3 from "../../assets/Services/DigitalMarketing/digital-marketing-img3.jpg";
import digital_marketing_img4 from "../../assets/Services/DigitalMarketing/digital-marketing-img4.jpg";
import digital_marketing_img5 from "../../assets/Services/DigitalMarketing/digital-marketing-img5.jpg";
import digital_marketing_img6 from "../../assets/Services/DigitalMarketing/digital-marketing-img6.jpg";
import digital_marketing_img7 from "../../assets/Services/DigitalMarketing/digital-marketing-img7.jpg";
import digital_marketing_img8 from "../../assets/Services/DigitalMarketing/digital-marketing-img8.jpg";
import digital_marketing_img9 from "../../assets/Services/DigitalMarketing/digital-marketing-img9.jpg";
import digital_marketing_img10 from "../../assets/Services/DigitalMarketing/digital-marketing-img10.jpg";

import packaging_img from "../../assets/Services/DesigningServices/packaging-img.jpg";
import packaging_img1 from "../../assets/Services/DesigningServices/packaging-img2.jpg";
import packaging_img2 from "../../assets/Services/DesigningServices/packaging-img3.jpg";
import design1 from "../../assets/Services/DesigningServices/creative-design1.jpg";
import design2 from "../../assets/Services/DesigningServices/creative-design2.jpg";
import design3 from "../../assets/Services/DesigningServices/creative-design3.jpg";
import design4 from "../../assets/Services/DesigningServices/creative-design4.jpg";
import design5 from "../../assets/Services/DesigningServices/creative-design5.jpg";
import design6 from "../../assets/Services/DesigningServices/creative-design6.jpg";
import design7 from "../../assets/Services/DesigningServices/creative-design7.jpg";
import design8 from "../../assets/Services/DesigningServices/creative-design8.jpg";
import design9 from "../../assets/Services/DesigningServices/creative-design9.jpg";
import design10 from "../../assets/Services/DesigningServices/creative-design10.jpg";

import print_img2 from "../../assets/Services/PrintMedia/prini-img2.jpeg";
import Newspaper_Ads from "../../assets/Services/PrintMedia/Newspaper-Ads.jpg";
import Pamphlet from "../../assets/Services/PrintMedia/Pamphlet.jpg";

import inshop1 from "../../assets/Services/BrandingStrategy/inshop1.jpg";
import inshop2 from "../../assets/Services/BrandingStrategy/inshop2.jpg";
import inshop3 from "../../assets/Services/BrandingStrategy/inshop3.jpg";
import inshop4 from "../../assets/Services/BrandingStrategy/inshop4.jpg";
import inshop5 from "../../assets/Services/BrandingStrategy/inshop5.jpg";
import inshop6 from "../../assets/Services/BrandingStrategy/inshop6.jpg";
import inshop7 from "../../assets/Services/BrandingStrategy/inshop7.jpg";
import inshop8 from "../../assets/Services/BrandingStrategy/inshop8.jpg";
import inshop9 from "../../assets/Services/BrandingStrategy/inshop9.jpg";

import Corporate_Event from "../../assets/Services/EventPromotion/Corporate-Event.jpg";
import mall from "../../assets/Services/EventPromotion/mall.png";
import event_promotion1 from "../../assets/Services/EventPromotion/event-promotion1.jpg";
import event_promotion2 from "../../assets/Services/EventPromotion/event-promotion2.jpg";
import event_promotion3 from "../../assets/Services/EventPromotion/event-promotion3.jpg";
import event_promotion4 from "../../assets/Services/EventPromotion/event-promotion4.jpg";

import homepageImage1 from "../../assets/Portfolio/homepage1.png";
import homepageImage2 from "../../assets/Portfolio/homepage2.png";
import homepageImage3 from "../../assets/Portfolio/homepage3.png";
import homepageImage4 from "../../assets/Portfolio/homepage4.png";

import external_link from "../../assets/Portfolio/external-link.png";

function Portfolio() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "lightgray",
          borderRadius: "50px",
          boxShadow: "0px 0px 10px gray",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "lightgray",
          borderRadius: "50px",
          boxShadow: "0px 0px 10px gray",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 100,
    speed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
    ],
  };
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 100,
    speed: 5000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    cssEase: "linear",
    pauseOnHover: true,
    autoplaySpeed: 100,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
    ],
  };
  const settings3 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 100,
    speed: 5000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
    ],
  };
  const settings4 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    rtl: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const settings5 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 100,
    speed: 5000,
    cssEase: "linear",
    rtl: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="portfolio">
      <Helmet>
        <title>Portfolio | SP Advertising</title>
        <meta name="description" content="Explore SP Advertising’s portfolio to see our successful projects! From branding to digital marketing, our work showcases our expertise. Let it speak for itself!" />
        <meta name="keywords" content="Our portfolio, SP Advertising portfolio, Best design portfolio, Professional portfolio, Portfolio of work," />
      </Helmet>
      <div className="img-back">
        <div className="portfolio-heading">
          <div className="port-text">
            <h3>Portfolio</h3>
            <h1 data-aos="fade-up" data-aos-duration="500">
              Explore Our Success Stories
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              "We take pride in showcasing our diverse range of projects that
              have driven success to many of our valued clients."
            </p>
          </div>
        </div>
        <img
          src={portfolio_heading_img}
          alt=""   loading="lazy"
          data-aos="fade-up"
          data-aos-duration="1500"
           
        />
      </div>

      <div className="port-slider">
        <h2>Outdoor Advertising</h2>
        <Slider {...settings} className="portfolio-slider">
          {/* <div>
        <img src={outdoor_img1} alt=""   loading="lazy" />
        </div> */}

          <div>
            <img src={showcase1} alt="Outdoor Advertising agency in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={showcase2} alt="Outdoor Advertising agency in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={gantry} alt="Outdoor Advertising agency in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={outdoor1} alt="Outdoor Advertising agency in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={outdoor2} alt="Outdoor Advertising agency in Raipur"   loading="lazy" />
          </div>

          {/* <div>
            <img src={outdoor4} alt=""   loading="lazy" />
        </div> */}
          <div>
            <img src={outdoor5} alt="Outdoor Advertising agency in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={outdoor6} alt="Outdoor Advertising agency in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={outdoor7} alt="Outdoor Advertising agency in Raipur"   loading="lazy" />
          </div>
          {/* <div>
            <img src={outdoor8} alt=""   loading="lazy" />
        </div> */}
          <div>
            <img src={outdoor9} alt="Outdoor Advertising agency in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={outdoor10} alt="Outdoor Advertising agency in Raipur"   loading="lazy" />
          </div>
        </Slider>
      </div>

      <div className="port-slider">
        <h2>Digital Marketing</h2>
        <Slider {...settings1} className="portfolio-slider">
          <div className="portfolio-dm">
            <img src={digital_marketing_img5} alt="Digital Marketing in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={digital_marketing_img6} alt="Digital Marketing in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={digital_marketing_img7} alt="Digital Marketing in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={digital_marketing_img8} alt="Digital Marketing in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={digital_marketing_img9} alt="Digital Marketing in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={digital_marketing_img10} alt="Digital Marketing in Raipur"   loading="lazy" />
          </div>
          
        </Slider>
      </div>

      <div className="port-slider">
        <h2>Creative Designs</h2>
        <Slider {...settings} className="portfolio-slider">
          <div>
            <img src={design1} alt="Creative Concepts in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={design2} alt="Creative Concepts in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={design3} alt="Creative Concepts in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={design4} alt="Creative Concepts in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={design5} alt="Creative Concepts in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={design6} alt="Creative Concepts in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={design7} alt="Creative Concepts in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={design8} alt="Creative Concepts in Raipur"   loading="lazy" />
          </div>
          {/* <div>
        <img src={design9} alt=""   loading="lazy" />
        </div> */}
          <div>
            <img src={design10} alt=""   loading="lazy" />
          </div>
        </Slider>
      </div>

      <div className="port-slider">
        <h2>Print Media</h2>
        <Slider {...settings2} className="portfolio-slider">
          <div>
            <img src={print_img2} alt="Print Media in in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={Newspaper_Ads} alt="Print Media in in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={Pamphlet} alt="Print Media in in Raipur"   loading="lazy" />
          </div>
        </Slider>
      </div>

      <div className="port-slider">
        <h2>Inshop Branding</h2>
        <Slider {...settings} className="portfolio-slider">
          <div>
            <img src={inshop1} alt="In-Shop Branding in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={inshop2} alt="In-Shop Branding in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={inshop3} alt="In-Shop Branding in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={inshop4} alt="In-Shop Branding in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={inshop5} alt="In-Shop Branding in Raipur"   loading="lazy" />
          </div>
          {/* <div>
        <img src={inshop6} alt=""   loading="lazy" />
        </div> */}
          <div>
            <img src={inshop7} alt="In-Shop Branding in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={inshop8} alt="In-Shop Branding in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={inshop9} alt="In-Shop Branding in Raipur"   loading="lazy" />
          </div>
        </Slider>
      </div>

      <div className="port-slider">
        <h2>Event Promotion</h2>
        <Slider {...settings3} className="portfolio-slider">
          <div>
            <img src={event_promotion1} alt="Event Promotion in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={event_promotion2} alt="Event Promotion in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={event_promotion3} alt="Event Promotion in Raipur"   loading="lazy" />
          </div>
          <div>
            <img src={event_promotion4} alt="Event Promotion in Raipur"   loading="lazy" />
          </div>
        </Slider>
      </div>

      <div className="port-slider">
        <h2>Website Development</h2>
        <Slider {...settings5} className="portfolio-slider-website">
          <div className="website-con">
            <a href="https://cleveryoungsters.in/">
              <div className="website-absolute">
                <img src={homepageImage1} alt=""   loading="lazy" />
                <div>
                  <p>visit website</p>
                  <img src={external_link} alt="Website Development in Raipur"   loading="lazy" />
                </div>
              </div>
            </a>
          </div>
          <div className="website-con">
            <a href="https://www.nirmaantmt.com/">
              <div className="website-absolute">
                <img src={homepageImage2} alt=""   loading="lazy" />
                <div>
                  <p>visit website</p>
                  <img src={external_link} alt="Website Development in Raipur"   loading="lazy" />
                </div>
              </div>
            </a>
          </div>
          <div className="website-con">
            <a href="https://sprn.in/">
              <div className="website-absolute">
                <img src={homepageImage3} alt=""   loading="lazy" />
                <div>
                  <p>visit website</p>
                  <img src={external_link} alt="Website Development in Raipur"   loading="lazy" />
                </div>
              </div>
            </a>
          </div>
          <div className="website-con">
            <a href="https://sprn.in/">
              <div className="website-absolute">
                <img src={homepageImage4} alt=""   loading="lazy" />
                <div>
                  <p>visit website</p>
                  <img src={external_link} alt="Website Development in Raipur"   loading="lazy" />
                </div>
              </div>
            </a>
          </div>
        </Slider>
      </div>

      <div className="port-slider ">
        <h2>Videos Promotions</h2>
        <Slider {...settings4} className="youtube-video">
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/advdAc9T4t4?si=qQYkKMioC5eTPJh7"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/x6krlcfwAu4?si=2LKIbHunn6T2HiBE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NhAMivemT74?si=2o-mpo5AgLuys5EL"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ngh3UnPYdtA?si=DPVz_SvvBIbsHZ0F"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PYK6dejbeEw?si=74EuiYES1bJ-KJX9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Vr-AeBMXcsw?si=YS4vkiAb3wtGeFmC"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aZ-602v_lzI?si=wdNE5Bl9ipInf4Rq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/44wW3594gws?si=jpIkdJOxUx4gxek2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QoAE0WHyHA0?si=uBFNWlH3sjuMso-h"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </Slider>
      </div>

      <div className="fort-footer">
        <div className="fort-cover">
          <div className="fort-footer-con">
            <h1>Ready to elevate your brand </h1>
            <Link to={"/contact"}>
              <button>
                {/* <img src={flight} alt=""   loading="lazy" /> */}
                Let's Take Flight
              </button>
            </Link>
          </div>
          <iframe
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Mcieg9x-nJk?si=Kh4KZGEKY7cQWX3j"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;