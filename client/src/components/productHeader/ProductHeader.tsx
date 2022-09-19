import laptopData from "./mockData";
import "./productHeader.scss";

export const ProductHeader: React.FC = () => {
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
                <img src={image.mainImage} alt="laptop"></img>
              </div>
              <div className="PH-small-laptop-img">
                <img src={image.mainImage} alt="laptop" />
                <img src={image.subImageOne} alt="laptop" />
                <img src={image.subImageTwo} alt="laptop" />
                <img src={image.subImageThree} alt="laptop" />
                <img src={image.subImageFour} alt="laptop" />
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
              <span>Stars</span>
              <p>See all Reviews 25</p>
            </div>
          </div>
          <div className="PH-shipping-info">
            <ul>
              <li>Ships Tomorrow</li>
              <li>Click {"&"} Collect available in 13 stores</li>
            </ul>
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
            <button className="minus-btn">-</button>
            <span>0</span>
            <button className="plus-btn">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};
