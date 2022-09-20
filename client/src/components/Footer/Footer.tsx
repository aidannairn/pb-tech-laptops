import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.wrapper}>
        <div>
          <ul>
            <li>Shop by Departments</li>
            <li>Computer & tablet</li>
            <li>PC Parts</li>
            <li>Phones & Accessories</li>
            <li>Headphones & Audio</li>
            <li>Printing & Office </li>
            <li>Gaming</li>
            <li>TV & AV</li>
            <li>Smart Home & Security</li>
            <li>Apple</li>
            <li>Networking</li>
            <li>Cameras & Drones</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Company Info</li>
            <li>About us</li>
            <li>Business</li>
            <li>Education</li>
            <li>Wholesale</li>
            <li>Government</li>
            <li>Health</li>
            <li>Stores</li>
            <li>News</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Service & support</li>
            <li>Contact Us</li>
            <li>Help</li>
            <li>Returns & warranty</li>
            <li>Finance</li>
            <li>IT Services</li>
            <li>Home Services</li>
            <li>Repair services</li>
            <li>System builder</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Promotion & Offers</li>
            <li>Promotions</li>
            <li>Clearance</li>
            <li>New Arrivals</li>
            <li>BYOD</li>
            <li>PB Insider</li>
            <li>PB Adviser</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
      <div className={styles.social}>
        <i className="fa-brands fa-square-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-regular fa-envelope"></i>
      </div>
      <hr></hr>
      <div className={styles.copyRight}></div>
    </div>
  );
};

export default Footer;
