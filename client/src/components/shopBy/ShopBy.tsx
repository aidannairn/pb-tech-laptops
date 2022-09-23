import React from "react";
import { useNavigate } from "react-router";
import styles from "./ShopBy.module.css";

const ShopBy = () => {

  const navigate = useNavigate();

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
          <div onClick={() => navigate(`/products/Business`)}>Business</div>
          <div onClick={() => navigate(`/products/Study`)}>Home & Study</div>
          <div onClick={() => navigate(`/products/Gaming`)}>Gaming</div>
        </div>
        <h3>
          Shop All <i className="fa-solid fa-chevron-right"></i>
        </h3>
      </div>
    </div>
  );
};

export default ShopBy;
