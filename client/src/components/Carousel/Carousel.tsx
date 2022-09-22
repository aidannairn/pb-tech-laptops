import React, { useState} from "react";
import styles from "./Carousel.module.css";
import wish from "../../images/heart.png";
import { useQuery } from "@apollo/client";
import { GET_ALL_LAPTOPS} from "../../queries/laptopQueries";
import Rating from "@mui/material/Rating";

interface Laptop {
  name: string
  brand: string
  caption?: string
  types?: [string]
  price: number
  images: [string]
  isTrending: boolean
  isOnSpecial: boolean
  amountSold: number
  userRatings: [number]
}

interface Data {
laptops: Laptop[]
}

const Carousel: React.FC = () => {

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

  const {loading, error, data} = useQuery<Data>(GET_ALL_LAPTOPS)
  
  if(loading){<h2>Loading..</h2>}
  if(error){<h2>Error..</h2>}

  console.log(data && data.laptops)



  return (
       <div className={styles.carouselContainer}>
      <div className={styles.wrapper}>
        {rightIndex >= 5 && (
          <div onClick={handleLeft}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
        )}
        <div className={styles.products}> 

          {data && data.laptops
            .slice(leftIndex, rightIndex)
            .map((value: any, i: number) => (
              <div className={styles.card} key={i}>
                <div className={styles.wish}>
                  <img src={wish} alt="wish"></img>
                </div>
                <div className={styles.image}>
                  <img src={value.images[0]} alt="laptop"></img>
                </div>

                <div className={styles.info}>
                  <h3>${value.price}</h3>
                  <p>
                    <Rating
                      name="read-only"
                      value={value.userRatings[0]}
                      
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
       { data && rightIndex <= data.laptops.length -1 && (
          <div onClick={handleRight}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        )} 
      </div> 
     </div>
      ); 
  
  
   
    
}

export default Carousel;

