import React, { useState } from "react";
import styles from "./Carousel.module.css";
import wish from "../../images/heart.png";
import { useQuery } from "@apollo/client";
import { GET_ALL_LAPTOPS } from "../../queries/laptopQueries";
import Rating from "@mui/material/Rating";

const Carousel: React.FC = () => {
  interface Laptops {
    name: string;
    brand: string;
    caption: string;
    types: [string];
    price: number;
    images: string;
    isTrending: boolean;
    isOnSpecial: boolean;
    amountSold: number;
    userRatings: [number];
  }

  interface Laptops {
    laptops: []
  }

  console.log(GET_ALL_LAPTOPS)

  const { error, loading, data } = useQuery<Laptops | any>(GET_ALL_LAPTOPS);

  if (error) {
    console.log(error);
  }
  if (loading) {
    console.log("Loading...");
  }

  console.log(data);

  const [rightIndex, setRightIndex] = useState<number>(4);
  const [leftIndex, setLeftIndex] = useState<number>(0);

  const handleRight = () => {
    setRightIndex(rightIndex + 1);
    setLeftIndex(leftIndex + 1);
  };

  const handleLeft = () => {
    setLeftIndex(leftIndex - 1);
    setRightIndex(rightIndex - 1);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.wrapper}>
        {rightIndex >= 5 && (
          <div onClick={handleLeft}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        )}
        <div className={styles.products}>
          {data?.laptops
            .slice(leftIndex, rightIndex)
            .map((value: any, i: number) => (
              <div className={styles.card} key={i}>
                <div className={styles.wish}>
                  <img src={wish} alt="wish"></img>
                </div>
                <div className={styles.image}>
                  <img src={value.images} alt="laptop"></img>
                </div>

                <div className={styles.info}>
                  <h3>${value.price}</h3>
                  <p>
                    <Rating
                      name="read-only"
                      value={value.userRatings[0]}
                      readOnly
                    />
                  </p>
                  <p>{value.name}</p>
                  <p>{value.caption}</p>
                </div>
                <div className={styles.button}>
                  <button type="button">Add to cart</button>
                </div>
              </div>
            ))}
        </div>
        {rightIndex <= data.laptops.length - 1 && (
          <div onClick={handleRight}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
