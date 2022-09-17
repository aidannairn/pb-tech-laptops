import { useQuery } from '@apollo/client'
import { GET_LAPTOPS } from '../queries/laptopQueries'

interface Laptop {
  id: string
  name: string
  types: string
  quantity: number
  price: Number
  images: string[]
}

interface Laptops {
  laptops: Laptop[]
}

const Test: React.FC = () => {
  const { loading, error, data } = useQuery<Laptops>(GET_LAPTOPS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  console.log(data)
  
  return (
    <div>
      {data.laptops.map((data: any) => (
        <div>
          <h2>
            <img src={data.images} alt='laptop img'></img>
            Name: {data.name} <br></br>
            Stock available: {data.quantity}
          </h2>
        </div>
      ))}
    </div>
  )
}

export default Test