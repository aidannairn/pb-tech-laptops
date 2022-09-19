import laptopData from "./mockData";

export const ProductHeader: React.FC = () => {
  return (
    <div>
      <div>
        <h3>
          Placeholder Home {">"} computers laptops {">"} laptops {">"} business
          laptops
        </h3>
      </div>
      <div>
        {laptopData.map((image, i) => {
          return (
            <div className="left" key={i}>
              <img src={image.mainImage} alt="laptop"></img>
            </div>
          );
        })}
        <div className="right">
          {laptopData.map((item, i) => {
            return (
              <div className="information" key={i}>
                <div>
                  <h1>{item.laptopName}</h1>
                  <h4>{item.subName}</h4>
                </div>
                <div>
                  <p>{item.description}</p>
                  <ul>
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
          <div className="reviews">
            <div className="stars">
              <span>Stars</span>
              <p>See all Reviews 25</p>
            </div>
          </div>
          <div className="Shipping-info">
            <ul>
              <li>Ships Tomorrow</li>
              <li>Click {"&"} Collect available in 13 stores</li>
            </ul>
          </div>
          {laptopData.map((price, i) => {
            return (
              <div className="price" key={i}>
                <h1>{price.price}</h1>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <button>Add to Cart</button>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};
