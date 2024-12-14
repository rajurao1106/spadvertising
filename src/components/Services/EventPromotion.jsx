import React from "react";
import "./Services.css";
import { Helmet } from "react-helmet";
import event from "../../assets/Services/EventPromotion/event.png";
import { Link } from "react-router-dom";
import Corporate_Event from "../../assets/Services/EventPromotion/Corporate-Event.jpg";
import mall from "../../assets/Services/EventPromotion/mall.png";

function EventPromotion() {
  return (
    <div className="service">
      <div className="service-box-con">
        <div className="service-box">
          <div className="service-left">
            <h1>Event Promotion</h1>
            <p>
              Driving Engagement and Attendance: Effective Strategies for Event
              Promotion
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <img src={event} alt="Event Promotion in Raipur" />
          </div>
        </div>
      </div>
      <Helmet>
        <title>
          Best Event Promotion company in Raipur | Event Promotion services
        </title>
        <meta
          name="description"
          content="Maximize your event's reach with expert promotion! From social media to creative ads, we ensure your event shines. Contact us today for standout results!"
        />
        <meta
          name="keywords"
          content="Event promotion services, Best event promotion agency, Online event marketing, Event advertising solutions, Professional event promotion, Affordable event promotion strategies, Expert event marketing services for businesses, Social media event promotion solutions, Event promotion agency near me, Creative event advertising campaigns, Event promotion company in Raipur, Best event marketing services in Raipur, Local event promotion agency near Raipur, Event advertising and marketing in Raipur,"
        />
      </Helmet>
      <div className="service-con">
        <div className="ul">
          <div className="topic-align1">
            <img
              src={Corporate_Event}
              alt="Corporate Event in Raipur"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Corporate Event</h1>
              <p>
                {" "}
                A <a href="https://spadvertising.in/Event-Promotion-in-Raipur">corporate event</a>  is a professionally organized gathering for
                business purposes, such as conferences, seminars, or company
                parties. It focuses on networking, team-building, or sharing
                important information, often requiring strategic promotion to
                ensure success.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Mall Activation</h1>
              <p>
                <a href="https://spadvertising.in/Event-Promotion-in-Raipur">Mall activation</a>  involves organizing promotional events or
                interactive activities within a shopping mall to attract
                shoppers and boost engagement. This can include product
                demonstrations, contests, and experiential marketing to enhance
                brand visibility and drive foot traffic.  
              </p>
            </div>
            <img
              src={mall}
              alt="Mall Activation in Raipur"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPromotion;
