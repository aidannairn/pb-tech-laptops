import React, { useState } from "react";
import styles from "./Carousel.module.css";

const Carousel: React.FC = () => {

    const test: object[] = [{
        "id": 1,
        "product_name": "ROG Zephyrus",
        "product_desc": "Study laptop",
        "quantity": 18
      },
      {
        "id": 2,
        "product_name": "Zenbook",
        "product_desc": "Study laptop",
        "quantity": 5
      },
      {
        "id": 3,
        "product_name": "Spectre X360",
        "product_desc": "Thin & light laptop",
        "quantity": 13
      },
      {
        "id": 4,
        "product_name": "Spectre X360",
        "product_desc": "Business laptop",
        "quantity": 17
      },
      {
        "id": 5,
        "product_name": "Macbook Pro",
        "product_desc": "Thin & light laptop",
        "quantity": 1
      },
      {
        "id": 6,
        "product_name": "Macbook Air",
        "product_desc": "Thin & light laptop",
        "quantity": 18
      },
      {
        "id": 7,
        "product_name": "Spectre X360",
        "product_desc": "Business laptop",
        "quantity": 10
      },
      {
        "id": 8,
        "product_name": "Macbook Pro",
        "product_desc": "Study laptop",
        "quantity": 7
      },
      {
        "id": 9,
        "product_name": "Macbook Air",
        "product_desc": "Thin & light laptop",
        "quantity": 2
      },
      {
        "id": 10,
        "product_name": "Macbook Pro",
        "product_desc": "Business laptop",
        "quantity": 13
      }]

      const [rightIndex, setRightIndex] = useState<number>(4)
      const [leftIndex, setLeftIndex] = useState<number>(0)

      const handleRight = () => {
        setRightIndex(rightIndex + 1)
        setLeftIndex(leftIndex + 1)

        // rightIndex === 

      }

      const handleLeft = () => {
      }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.wrapper}>
        <h3>Our Best Sellers</h3>
        <hr></hr>
        <div className={styles.products}>
            <div onClick={handleLeft}><i className="fa-solid fa-chevron-left"></i></div>
            {test.slice(leftIndex, rightIndex).map((value: any, i: number) => 
            <div className={styles.card} key={i}>
                {/* <img src='' alt='laptop'></img> */}
                <h3>{value.id}</h3>
                <p>{value.product_name}</p>
                <p>{value.product_desc}</p>
                <button type='button'>Add to cart</button>
            </div>
            )}
            <div onClick={handleRight}><i className="fa-solid fa-chevron-right"></i></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
