import { useState } from "react";
import "./App.css";

import AboutMe from "./components/About Us/AboutUs.jsx";
import Blog from "./components/Blog/Blog.jsx";
import ChooseUs from "./components/ChooseUs/ChooseUs.jsx";
import Contact from "./components/Contact Us/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BrandingStrategy from "./components/Services/BrandingStrategy.jsx";
import DigitalMarketing from "./components/Services/DigitalMarketing.jsx";
import DesigningServices from "./components/Services/DesigningServices.jsx";
import EventPromotion from "./components/Services/EventPromotion.jsx";
import OutdoorAdvertising from "./components/Services/OutdoorAdvertising.jsx";
import PrintMedia from "./components/Services/PrintMedia.jsx";
import RecentWork from "./components/Home/RecentWork.jsx";
import WhatWeDo from "./components/Home/Expertise.jsx";
import Clients from "./components/Clients/Clients.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ScollToTop from "./components/Home/useScrollToTop.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Homepage from "./components/Home/Homepage.jsx";
import Scroll from "./components/Home/ScrollToTop.jsx";
import Whatsapp from "./components/Home/Whatsapp.jsx";
import NeedHelp from "./components/Needhelp/NeedHelp.jsx";
import ConsultingPopup from "./components/Home/ConsultingPopup.jsx";
import AudioVisuals from "./components/Services/AudioVisuals.jsx";

function App() {
  return (
    <div>
      <Router>
        {/* <ConsultingPopup /> */}
        <ScollToTop />
        <Whatsapp />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Choose-Us" element={<ChooseUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Showcase" element={<RecentWork />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Services" element={<WhatWeDo />} />
          <Route
            path="/Outdoor-Advertising-in-Raipur"
            element={<OutdoorAdvertising />}
          />
          <Route
            path="/Outdoor-Advertising"
            element={<OutdoorAdvertising />}
          />
          <Route
            path="/Digital-Marketing-in-Raipur"
            element={<DigitalMarketing />}
          />
          <Route
            path="/Designing-Services-in-Raipur"
            element={<DesigningServices />}
          />
          <Route
            path="/Print-Media-in-Raipur"
            element={<PrintMedia />}
          />
          <Route
            path="/Branding-Strategy-in-Raipur"
            element={<BrandingStrategy />}
          />
          <Route
            path="/Event-Promotion-in-Raipur"
            element={<EventPromotion />}
          />
          <Route
            path="/Audio-Visuals-in-Raipur"
            element={<AudioVisuals />}
          />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
        <NeedHelp />
        <Footer />
      </Router>
      <Scroll />
    </div>
  );
}

export default App;
