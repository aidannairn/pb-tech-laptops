import React from "react";
import styles from "./QuizBanner.module.css";
import banner from '../../images/quizBanner.png'

const QuizBanner = () => {
  return (
    <div className={styles.quizBannerContainer}>
      <div className={styles.texts}>
        <h2>
          <span>Need help</span> choosing the perfect laptop?
        </h2>
        <p>
          Answer our <span>short quiz</span> for laptop recommendations that are
          tailored to your needs,<br></br> or read through our
          <span> buying guide</span> written by our team of tech experts.
        </p>
      </div>
      <div className={styles.buttons}>
        <button type="button">Take Quiz</button>
        <button type="button">Read buying guide</button>
      </div>
        <img src={banner} alt='banner'></img>
    </div>
  );
};

export default QuizBanner;
