import { useQuery } from '@apollo/client'
import { GET_LAPTOPS } from '../queries/laptopQueries'

interface Laptop {
  id: String
  name: String
  type: String
  quantity: Number
  price: Number
  images: String[]
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
    <div>Test</div>
  )
}

export default Test