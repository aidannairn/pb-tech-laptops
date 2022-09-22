import React from "react";
import "./DeliveryWarrantyEmpty.scss";
import msfooterbanner from "../../images/msfooterbanner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const DeliveryWarrantyEmpty = () => {
  return (
    <div>
      <div className="D-W-main-container">
        <div className="D-W-title-container">
          <h3>Delivery {"&"} Pickup</h3>
          <FontAwesomeIcon icon={faChevronDown} className="chev-up" />
        </div>
        <hr className="HR"></hr>
      </div>
      <div className="D-W-main-container">
        <div className="D-W-title-container">
          <h3>Warranty</h3>
          <FontAwesomeIcon icon={faChevronDown} className="chev-up" />
        </div>
        <hr className="HR"></hr>
      </div>
      <div className="msfooterbanner-container">
        <img
          src={msfooterbanner}
          alt="footer banner"
          className="msfooterbanner"
        ></img>
      </div>
    </div>
  );
};
