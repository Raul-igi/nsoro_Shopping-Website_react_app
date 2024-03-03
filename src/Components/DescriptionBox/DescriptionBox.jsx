import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Nike, Inc. is an American athletic footwear
         and apparel corporation headquartered near 
         Beaverton, Oregon, United States. It is the world's 
         largest supplier of athletic shoes and apparel and a major 
         manufacturer of sports equipment, with revenue in excess of
          US$46 billion in its fiscal year 2022. </p>
          <p>
          Nike, Inc. is an American athletic footwear and apparel 
          corporation headquartered near Beaverton, Oregon, United States.
          </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
