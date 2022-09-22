import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Reviews.scss";
import { fakeReviews } from "./fakeReviews";

export const Reviews = () => {
  const [openReview, setOpenReview] = React.useState<boolean>(false);

  const handleReviewOpen = () => {
    setOpenReview(!openReview);
  };

  return (
    <div className="RV-main-container">
      <div className="RV-title-container">
        <h3>Reviews</h3>
        <FontAwesomeIcon
          icon={openReview ? faChevronDown : faChevronUp}
          className="chev-up"
          onClick={() => handleReviewOpen()}
        />
      </div>
      <hr className="HR"></hr>
      {openReview && (
        <div className="reviews-main-container">
          <div className="reviews-inner-container">
            <div className="sort-by-container">
              <label>Sort by</label>

              <div className="custom-select">
                <select>
                  <option>Latest</option>
                  <option>Most Helpful</option>
                  <option>Highest Rated</option>
                  <option>Lowest Rated</option>
                </select>
              </div>
            </div>
            {fakeReviews.map(
              (
                review: {
                  name: string;
                  stars: string[];
                  review: string;
                  date: string;
                  pictures: string[];
                },
                i: number
              ) => {
                return (
                  <div key={i} className="reviews-card-main-container">
                    <div className="reviews-card-container">
                      <div className="star-container">
                        {review.stars.map((star, i) => {
                          return (
                            <FontAwesomeIcon
                              icon={faStar}
                              className={star}
                              key={i}
                            />
                          );
                        })}
                      </div>
                      <p className="review-name">
                        {review.name}, {review.date}
                      </p>
                      <p className="review-review">{review.review}</p>
                    </div>
                    {review.pictures.map((picture, i) => {
                      return (
                        <div className="review-card-image" key={i}>
                          <img src={picture} alt="review laptop"></img>
                        </div>
                      );
                    })}
                  </div>
                );
              }
            )}
          </div>
          <div className="loadmore-container">
            <h1>Load More</h1>
          </div>
        </div>
      )}
    </div>
  );
};
