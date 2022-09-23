import "./productHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Heart from "../../images/heart.png";
import { useReducer, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_LAPTOP_AND_BUNDLE } from "../../queries/laptopQueries";
import { BundleModal } from "../bundleModal/BundleModal";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "@mui/material";

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

interface LaptopAndBundle {
  types: string;
  name: String;
  images: [string];
  caption: string;
  price: number;
  userRatings: [number];
  bundles: Bundle[];
}

interface Bundle {
  type: string;
  laptopExtras: LaptopExtra[];
}

interface LaptopExtra {
  name: string;
  price: number;
  images: [string];
}

interface Data {
  laptop: LaptopAndBundle;
}

export const ProductHeader: React.FC = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { INCREMENT, DECREMENT } = Types;
  const { loading, error, data } = useQuery<Data>(GET_LAPTOP_AND_BUNDLE, {
    variables: { id },
  });

  const navigate = useNavigate();

  const [bigPicture, setBigPicture] = useState<string | null>(null);

  const onClickImageHandler = (image: string) => {
    setBigPicture(image);
  };

  useEffect(() => {
    data && setBigPicture(data.laptop.images[0]);
  }, [data]);

  useEffect(() => {
    data && window.scrollTo(0, 0);
  }, [data]);

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>Error ...</h1>;

  return (
    <div className="PH-main-container">
      <div className="PH-page-link">
        <p>
          <span onClick={() => navigate(`/`)} className="links">
            Home
          </span>{" "}
          {">"} computers laptops {">"} laptops {">"}{" "}
          <span
            onClick={() => navigate(`/products/${data?.laptop.types[0]}`)}
            className="links"
          >
            {data?.laptop.types[0]} laptops{" "}
          </span>
          {">"} {data?.laptop.name}
        </p>
      </div>
      <div className="PH-main-content">
        <div className="PH-left-container">
          <div className="PH-large-laptop-img">
            {bigPicture && <img src={bigPicture} alt="laptop"></img>}
          </div>
          <div className="PH-small-container">
            {data &&
              data.laptop.images.map((image, i) => {
                return (
                  <div className="PH-small-laptop-img" key={i}>
                    <img
                      onClick={() => onClickImageHandler(image)}
                      src={image}
                      alt="laptop"
                      className={
                        bigPicture === image ? "boxed-image" : "normal-image"
                      }
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="PH-right-container">
          <div className="PH-information">
            <div className="PH-title-container">
              <h1 className="PH-product-title">
                {data && data.laptop.name} for {data && data.laptop.types}
              </h1>
              <h3 className="PH-product-desc">{data && data.laptop.caption}</h3>
            </div>
            <div className="PH-information-container">
              <p className="PH-item-desc">
                Style and speed. Stand out on HD video calls backed by Studio
                Mics. Capture ideas on the vibrant touchscreen. Do it all with a
                perfect balance of sleek design, speed, immersive audio, and
                significantly longer battery life than before.
              </p>
              <ul className="PH-UL">
                <li>
                  <b>Tailored for your business</b>
                </li>
                <li>
                  <b>Reduce IT complexity</b>
                </li>
                <li>
                  <b>Built-in security</b>
                </li>
              </ul>
            </div>
          </div>
          <div className="PH-reviews">
            <div className="PH-stars">
              <Rating
                name="read-only"
                value={data?.laptop.userRatings[0]}
                readOnly
              />
              <p>See all Reviews ({data && data.laptop.userRatings.length})</p>
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

          <div className="PH-price">
            <h1>${data && data.laptop.price}</h1>
          </div>

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
          {state.count >= 5 && <BundleModal />}
        </div>
      </div>
      {state.count >= 5 && (
        <div className="bundles-main-container">
          <div className="bundles-title-container">
            <h3>Create your business bundle and save!</h3>
          </div>
          <div className="bundles-add-title">
            <h4>Add {data && data.laptop.bundles[0].type}</h4>
          </div>
          <div className="bundles-product-container">
            {data &&
              data.laptop.bundles[0].laptopExtras.map((product, i) => {
                return (
                  <div key={i} className="bundles-card-container">
                    {product.images.map((accimage, i) => {
                      return (
                        <div key={i} className="bundles-image-container">
                          <img src={accimage} alt="accessories img"></img>
                        </div>
                      );
                    })}
                    <div className="bundles-name-price-container">
                      <p>{product.name}</p>
                      <p className="bundle-price">${product.price}</p>
                    </div>
                  </div>
                );
              })}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="bundle-chev-right"
            />
          </div>
          <hr></hr>
          <div className="bundles-add-title">
            <h4>Add {data && data.laptop.bundles[1].type}</h4>
          </div>
          <div className="bundles-product-container">
            {data &&
              data.laptop.bundles[1].laptopExtras.map((product, i) => {
                return (
                  <div key={i} className="bundles-card-container">
                    {product.images.map((essimage, i) => {
                      return (
                        <div key={i} className="bundles-image-container">
                          <img src={essimage} alt="accessories img"></img>
                        </div>
                      );
                    })}
                    <div className="bundles-name-price-container">
                      <p>{product.name}</p>
                      <p className="bundle-price">${product.price}</p>
                    </div>
                  </div>
                );
              })}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="bundle-chev-right"
            />
          </div>
          <hr></hr>
          <div className="bundles-add-title">
            <h4>Add {data && data.laptop.bundles[2].type}</h4>
          </div>
          <div className="bundles-product-container">
            {data &&
              data.laptop.bundles[2].laptopExtras.map((product, i) => {
                return (
                  <div key={i} className="bundles-card-container">
                    {product.images.map((softwareimg, i) => {
                      return (
                        <div key={i} className="bundles-image-container">
                          <img src={softwareimg} alt="accessories img"></img>
                        </div>
                      );
                    })}
                    <div className="bundles-name-price-container">
                      <p>{product.name}</p>
                      <p className="bundle-price">${product.price}</p>
                    </div>
                  </div>
                );
              })}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="bundle-chev-right"
            />
          </div>
        </div>
      )}
    </div>
  );
};
