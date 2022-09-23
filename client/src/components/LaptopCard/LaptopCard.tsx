import { useNavigate, Link } from 'react-router-dom'
import { Rating } from '@mui/material'
import './laptop-card.scss'

interface Props {
  id: string
  price: number
  image: string
  userRating: number
  name: string
  caption: string
  numReviews: number
}

const LaptopCard: React.FC<Props> = ({ id, image, price, userRating, name, caption, numReviews }) => {
  const navigate = useNavigate()

  const handleLaptopClick = (id: string) => {
    navigate(`/product-page/${id}`)
  }

  return (
    <div className="laptop-card">
      <div className="lc-wish"><img src="/images/heart.png" alt='wish'></img></div>
      <div className="lc-image">
        <img
          src={image}
          alt="laptop"
        ></img>
      </div>

      <div className="lc-info-and-btn">
        <div className="lc-info">
          <h3>${price}</h3>
          <p className='lc-rating-container'><Rating name="read-only" value={userRating} readOnly /><span className='lc-reviews-number'>({numReviews})</span></p>
          <p onClick={() => handleLaptopClick(id)}>{name}</p>
          <p>{caption}</p>
        </div>
        <div className="lc-button">
          <button type="button">Add to cart</button>
        </div>
        <div className="lc-compare-btn-container">
          <input type="checkbox" name="product-compare" id="productCompare" />
          <label htmlFor="productCompare">Compare</label>
        </div>
      </div>
    </div>
  )
}

export default LaptopCard