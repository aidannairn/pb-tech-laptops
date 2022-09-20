import React from "react";
import styles from "./Banner.module.css";
import laptop from "../../images/MacBook.png";
import coupon from "../../images/coupon.png";
import thumb from "../../images/thumb.png";
import nz from "../../images/nzMade.png";

const Banner: React.FC = () => {
  return (
    <div className={styles.bannerContainer}>
      <div>
        <img src={laptop} alt="laptop"></img>
        <p>
          NZ's BIGGEST range<br></br> of laptops
        </p>
      </div>
      <div>
        <img src={coupon} alt="coupon"></img>
        <p>
          Low everyday<br></br> prices!
        </p>
      </div>
      <div>
        <img src={thumb} alt="thumb"></img>
        <p>
          Hassle free warranty<br></br> and returns
        </p>
      </div>
      <div>
        <img src={nz} alt="nz"></img>
        <p>
          Local stock -<br></br> no drop shipping!
        </p>
      </div>
    </div>
  );
};

export default Banner;
