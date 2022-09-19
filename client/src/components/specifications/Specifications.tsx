import React from "react";
import specicon1 from "../../images/spec-icon1.png";
import specicon2 from "../../images/spec-icon2.png";
import specicon3 from "../../images/spec-icon3.png";
import specicon4 from "../../images/spec-icon4.png";
import "./Specifications.scss";

export const Specifications: React.FC = () => {
  return (
    <div className="spec-main-container">
      <div className="spec-title-container">
        <h3>Specifications</h3>
      </div>
      <hr className="HR"></hr>
      <div className="spec-icon-main-container">
        <div className="spec-HP-icon">
          <img src={specicon1} alt="high performance icon"></img>
          <h4>High Performance</h4>
          <p>
            11th Gen Intel® Core™ and custom AMD Ryzen™ Microsoft Surface®
            Edition processors deliver <b>70% more speed.</b>
          </p>
        </div>
        <div className="spec-GS-icon">
          <img src={specicon2} alt="great storage icon"></img>
          <h4>Great Storage Capacity</h4>
          <p>
            <b>Cat ipsum dolor</b> sit amet, burrow under covers knock over
            christmas tree scratch so owner bleeds.
          </p>
        </div>
        <div className="spec-LS-icon">
          <img src={specicon4} alt="lastest screen icon"></img>
          <h4>Latest Screen Technology</h4>
          <p>
            <b>Cat ipsum dolor</b> sit amet, burrow under covers knock over
            christmas tree scratch so owner bleeds.
          </p>
        </div>
        <div className="spec-LL-icon">
          <img src={specicon3} alt="long lasting battery icon"></img>
          <h4>Long-Lasting Battery</h4>
          <p>
            With up to <b>19 hours of battery life</b>, work all-day without
            worrying about having to recharge your device.
          </p>
        </div>
      </div>
      <div className="spec-show-all">
        <h4>Show All Specifications</h4>
      </div>
    </div>
  );
};
