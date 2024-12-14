import React from "react";
import { Helmet } from "react-helmet";
import RecentWork from "./RecentWork";
import WhatWeDo from "./Expertise";
import HomeAbout from "./About";
import NeedHelp from "../Needhelp/NeedHelp";
import AnimationHero from "./Hero";
import HomeBlog from "./Blog";
import HomeClients from "./Clients";

function Homepage() {
  return (
    <div>
      <Helmet>
        <title>SP Advertising: Best Advertising Agency in Raipur (C. G.)</title>
        <meta
          name="description"
          content="Engage your audience with our digital marketing, outdoor advertising, creative designing services and take your brand to new heights."
        />
        <meta
          name="keywords"
          content="SP Advertising agencies in Raipur, top Advertising agencies in Raipur, digital marketing in Raipur, creative ad agencies in Raipur,  Marketing agency in Raipur, Best Marketing agency in Raipur, Outdoor Advertising in Raipur, Best Outdoor Advertising in Raipur, Digital Marketing in Raipur, Best Digital Marketing in Raipur, Designing Services in Raipur"
        />
      </Helmet>
      
      <AnimationHero />
      <RecentWork />
      <WhatWeDo />
      <HomeAbout />
      <HomeClients />
      <HomeBlog />
    </div>
  );
}

export default Homepage;
