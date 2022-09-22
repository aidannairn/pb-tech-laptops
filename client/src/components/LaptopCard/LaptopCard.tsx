import './laptop-card.scss'

interface Props {
  price: number
  image: string
  userRating: number
  name: string
  caption: string
}

const LaptopCard: React.FC<Props> = ({ image, price, userRating, name, caption }) => {
  return (
    <div className="laptop-card">
      <div className="lc-wish"><img src="/images/heart.png" alt='wish'></img></div>
      <div className="lc.image">
        <img
          src={image}
          alt="laptop"
        ></img>
      </div>

      <div className="lc-info">
        <h3>${price}</h3>
        <p>{name}</p>
        <p>{caption}</p>
      </div>
      <div className="lc-button">
        <button type="button">Add to cart</button>
      </div>
    </div>
  )
}

export default LaptopCard