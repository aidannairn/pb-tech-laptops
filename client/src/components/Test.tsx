import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_LAPTOPS } from '../queries/laptopQueries'
import { sortArrByObjProps } from '../utils/sortArrByObjProps'

interface Laptop {
  __typename: string
  id: string
  name: string
  types: string[]
  quantity: number
  price: number
  images: string[]
}

interface Data {
  laptops: Laptop[]
}

const Test: React.FC = () => {
  const [laptopsArray, setLaptopsArray] = useState<Laptop[] | null>(null)

  const { loading, error, data } = useQuery<Data>(GET_LAPTOPS)
  
  if (loading) <p>Loading...</p>
  if (error) <p>Error</p>

  useEffect(() => {
    if (data && data.laptops) {
      // Sort by ascending name, then descending price.
      console.log('Unsorted:', data.laptops)
      const laptops: Laptop[] = sortArrByObjProps([...data.laptops], 'name', '-price')
      console.log('Sorted:', laptops)
      setLaptopsArray(laptops)
    }
  }, [data])
  
  return (
    <div>
      {
        laptopsArray && laptopsArray.map((laptop, i) => (
          <div key={i}>
            <h2>{laptop.name}</h2>
            <p>Price: {laptop.price}</p>
            <p>quantity: {laptop.quantity}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Test