import React from "react";
import "./UnderWorking.css";
import under_working from "../assets/Home/page_not_found.png";

export default function UnderWorking() {
  return (
    <div className="under-working">
      <div className="under-working-con">
        <img loading="lazy" src={under_working} alt="under working" />
      </div>
    </div>
  );
}
