import React from "react";
import "../../commondesign.css";
import image1 from "../../images/ash/Achievement/achieve1.jpg";

const Achievement = (props) => {
  return (
    <div className="container-fluid pl-1 pr-2">
      <div className="introduction">
        <h2 className="intro text-uppercase tx-blue">Achievement</h2>
      </div>
      <div className="ash-achievement">
        <div className="achieve">
          <h5 className="text-dark font-weight-bold pl-2 achieve-heading">
            1. Chemistry Department of Applied Science & Huanities, Faculty of
            Engineering & Technology, form aloe vera gel & alcohol based hand
            sanitizer 'Sanfoe' to battle COVID-19. (University in news on 20
            March 2020)
          </h5>
          
          <div className="ash-achieve-flex">
            <div className="ash-achieve-img pl-3 single-image">
              <img src={image1} alt="image1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
