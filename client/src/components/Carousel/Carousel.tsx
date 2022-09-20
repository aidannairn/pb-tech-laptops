import React, { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel: React.FC = () => {
  const test: object[] = [
    {
      id: 1,
      product_name: "ROG Zephyrus",
      product_desc: "Study laptop",
      quantity: 18,
    },
    {
      id: 2,
      product_name: "Zenbook",
      product_desc: "Study laptop",
      quantity: 5,
    },
    {
      id: 3,
      product_name: "Spectre X360",
      product_desc: "Thin & light laptop",
      quantity: 13,
    },
    {
      id: 4,
      product_name: "Spectre X360",
      product_desc: "Business laptop",
      quantity: 17,
    },
    {
      id: 5,
      product_name: "Macbook Pro",
      product_desc: "Thin & light laptop",
      quantity: 1,
    },
    {
      id: 6,
      product_name: "Macbook Air",
      product_desc: "Thin & light laptop",
      quantity: 18,
    },
    {
      id: 7,
      product_name: "Spectre X360",
      product_desc: "Business laptop",
      quantity: 10,
    },
    {
      id: 8,
      product_name: "Macbook Pro",
      product_desc: "Study laptop",
      quantity: 7,
    },
    {
      id: 9,
      product_name: "Macbook Air",
      product_desc: "Thin & light laptop",
      quantity: 2,
    },
    {
      id: 10,
      product_name: "Macbook Pro",
      product_desc: "Business laptop",
      quantity: 13,
    },
  ];



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
          {test.slice(leftIndex, rightIndex).map((value: any, i: number) => (
            <div className={styles.card} key={i}>
              <img src='https://www.pbtech.co.nz/imgprod/T/A/TABMST13106411__1.jpg?h=359492194' alt='laptop'></img>
              <h3>Price: $$$$</h3>
              <p>{value.product_name}</p>
              <p>{value.product_desc}</p>
              <button type="button">Add to cart</button>
            </div>
          ))}
        </div>
          {rightIndex <= test.length - 1 && (
            <div onClick={handleRight}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          )}
      </div>
    </div>
  );
};

export default Carousel;
