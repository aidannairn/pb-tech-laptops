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
  laptopData: Laptop[]
}

const Test: React.FC = () => {
  const { loading, error, data } = useQuery<Laptops>(GET_LAPTOPS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  console.log(data)
  
  return (
    <div>
      Test
    </div>
  )
}

export default Test