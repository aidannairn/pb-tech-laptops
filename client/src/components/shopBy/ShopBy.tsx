import React from "react";
import styles from "./ShopBy.module.css";
import image1 from "../../images/imag1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";

const ShopBy = () => {
  return (
    <div className={styles.shopByContainer}>
      <div className={styles.texts}>
        <h1>Laptops</h1>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="computerAndLaptops">Computer & Laptops</a>
          </li>
          <li>
            <a href="laptops">Laptops</a>
          </li>
        </ul>
      </div>
      <div className={styles.shopBySection}>
        <h4>Shop by Laptop Use</h4>
        <div className={styles.imageContainer}>
          <a href="business">
            <img src={image1} alt=""></img>
          </a>
          <a href="homeAndStudy">
            <img src={image2} alt=""></img>
          </a>
          <a href="gaming">
            <img src={image3} alt=""></img>
          </a>
        </div>
          <h3>Shop All <i className="fa-solid fa-chevron-right"></i></h3>
      </div>
    </div>
  );
};

export default ShopBy;
