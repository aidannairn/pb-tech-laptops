import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";

const Header: React.FC = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerBlackWrapper}>
        <div className={styles.headerBlack}>
          <div>PB Tech</div>
          <div>Hardwired</div>
          <div>PB Business</div>
          <div>PB Education</div>
          <div>PB Wholesale</div>
          <div>PB Government</div>
          <div>PB Health</div>
          <div>PB IoT</div>
        </div>
      </div>
      <div className={styles.headerBlueWrapper}>
        <div className={styles.headerBlue}>
          <div className={styles.logo}>
            <img src={logo} alt="pbtech logo"></img>
          </div>
          <div className={styles.search}>
            <input
              type="text"
              placeholder="Search by keywords or Part #"
            ></input>
            <select>
              <option>in All department</option>
              <option>Computer & Tablets</option>
              <option>PC Peripherals & Accessories</option>
              <option>PC Parts</option>
              <option>Networking</option>
              <option>Printing & Office</option>
              <option>Phone & Accessories</option>
              <option>TV & AV</option>
              <option>Headphones & Audio</option>
              <option>Gaming</option>
              <option>Cameras & Drones</option>
              <option>Smart home & Security</option>
              <option>Toys, Hobbies & STEM</option>
              <option>Gift Ideas</option>
            </select>
            <button type="button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div className={styles.buttons}>
            <div><i className="fa-regular fa-circle-question"></i><br></br>HELP</div>
            <div><i className="fa-solid fa-location-dot"></i><br></br>STORES</div>
            <div><i className="fa-solid fa-heart"></i><br></br>WISHLIST</div>
            <div><i className="fa-solid fa-user"></i><br></br>SIGN IN</div>
            <div><i className="fa-solid fa-cart-shopping"></i><br></br>CART</div>

          </div>
        </div>
      </div>
      {/* <div className={styles.inputs}>
        <input type="search"></input>
        <button type="button">Search</button>
      </div> */}
    </div>
  );
};

export default Header;
