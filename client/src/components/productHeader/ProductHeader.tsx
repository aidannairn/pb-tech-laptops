import laptopData from "./mockData";
import "./productHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCheck } from "@fortawesome/free-solid-svg-icons";
import Heart from "../../images/heart.png";
import { useReducer, useState } from "react";

interface State {
  count: number;
}

enum Types {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

type Action = { type: Types.INCREMENT } | { type: Types.DECREMENT };

const reducer = (state: State, action: Action) => {
  const { INCREMENT, DECREMENT } = Types;
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const initialState: State = { count: 0 };

export const ProductHeader: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { INCREMENT, DECREMENT } = Types;

  const [imageClicked, setImageClicked] = useState({
    first: true,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const onClickImageHandler = (order: any) => {
    const resetImages = {
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
    };
    setImageClicked({
      ...resetImages,
      [order]: true,
    });
  };

  return (
    <div className="PH-main-container">
      <div className="PH-page-link">
        <h3>
          Placeholder Home {">"} computers laptops {">"} laptops {">"} business
          laptops
        </h3>
      </div>
      <div className="PH-main-content">
        {laptopData.map((image, i) => {
          return (
            <div className="PH-left-container" key={i}>
              <div className="PH-large-laptop-img">
                {imageClicked.first && (
                  <img src={image.mainImage} alt="laptop"></img>
                )}
                {imageClicked.second && (
                  <img src={image.subImageOne} alt="laptop"></img>
                )}
                {imageClicked.third && (
                  <img src={image.subImageTwo} alt="laptop"></img>
                )}
                {imageClicked.fourth && (
                  <img src={image.subImageThree} alt="laptop"></img>
                )}
                {imageClicked.fifth && (
                  <img src={image.subImageFour} alt="laptop"></img>
                )}
              </div>
              <div className="PH-small-laptop-img">
                <img
                  src={image.mainImage}
                  alt="laptop"
                  onClick={() => onClickImageHandler("first")}
                  className={
                    imageClicked.first ? "boxed-image" : "normal-image"
                  }
                />
                <img
                  src={image.subImageOne}
                  alt="laptop"
                  onClick={() => onClickImageHandler("second")}
                  className={
                    imageClicked.second ? "boxed-image" : "normal-image"
                  }
                />
                <img
                  src={image.subImageTwo}
                  alt="laptop"
                  onClick={() => onClickImageHandler("third")}
                  className={
                    imageClicked.third ? "boxed-image" : "normal-image"
                  }
                />
                <img
                  src={image.subImageThree}
                  alt="laptop"
                  onClick={() => onClickImageHandler("fourth")}
                  className={
                    imageClicked.fourth ? "boxed-image" : "normal-image"
                  }
                />
                <img
                  src={image.subImageFour}
                  alt="laptop"
                  onClick={() => onClickImageHandler("fifth")}
                  className={
                    imageClicked.fifth ? "boxed-image" : "normal-image"
                  }
                />
              </div>
            </div>
          );
        })}
        <div className="PH-right-container">
          {laptopData.map((item, i) => {
            return (
              <div className="PH-information" key={i}>
                <div className="PH-title-container">
                  <h1 className="PH-product-title">
                    {item.laptopName} for Business
                  </h1>
                  <h3 className="PH-product-desc">{item.subName}</h3>
                </div>
                <div className="PH-information-container">
                  <p className="PH-item-desc">{item.description}</p>
                  <ul className="PH-UL">
                    <li>
                      <b>{item.subNameOne}</b>
                    </li>
                    <li>
                      <b>{item.subNameTwo}</b>
                    </li>
                    <li>
                      <b>{item.subNameThree}</b>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
          <div className="PH-reviews">
            <div className="PH-stars">
              <FontAwesomeIcon icon={faStar} className="faStar" />
              <FontAwesomeIcon icon={faStar} className="faStar" />
              <FontAwesomeIcon icon={faStar} className="faStar" />
              <FontAwesomeIcon icon={faStar} className="faStar" />
              <FontAwesomeIcon icon={faStar} className="faStar" />
              <p>See all Reviews 25</p>
            </div>
          </div>
          <div className="PH-shipping-info">
            <div className="checkone">
              <FontAwesomeIcon icon={faCheck} className="faCheck" />
              <p>Ships Tomorrow</p>
            </div>
            <div className="checktwo">
              <FontAwesomeIcon icon={faCheck} className="faCheck" />
              <p>
                Click {"&"} Collect available in <span>13 stores</span>
              </p>
            </div>
          </div>
          {laptopData.map((price, i) => {
            return (
              <div className="PH-price" key={i}>
                <h1>{price.price}</h1>
              </div>
            );
          })}
          <div className="PH-buttons">
            <button className="PH-add-to-cart">Add to Cart</button>
            <button
              className="minus-btn"
              onClick={() => dispatch({ type: DECREMENT })}
            >
              -
            </button>
            <span>{state.count > 0 ? state.count : (state.count = 0)}</span>
            <button
              className="plus-btn"
              onClick={() => dispatch({ type: INCREMENT })}
            >
              +
            </button>
            <img src={Heart} alt="heart icon" className="heart-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
