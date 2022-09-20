import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_LAPTOPS } from "../queries/laptopQueries"
import { sortArrByObjProps } from "../utils/sortArrByObjProps"
import Banner from "../components/Banner/Banner"

interface Laptop {
  __typename: string
  id: string
  name: string
  caption: string
  types: string[]
  quantity: number
  price: number
  images: string[]
  isTrending: boolean
  isOnSpecial: boolean
  userRatings: number[]
  amountSold: number
}

interface Data {
  laptops: Laptop[]
}

const ProductsPage: React.FC = () => {
  const [laptopsArray, setLaptopsArray] = useState<Laptop[] | null>(null)

  const { loading, error, data } = useQuery<Data>(GET_LAPTOPS)
  
  if (loading) <p>Loading...</p>
  if (error) <p>Error</p>

  useEffect(() => {
    if (data && data.laptops) {
      // Sort by ascending name, then descending price.
      console.log('Unsorted:', data.laptops)
      const laptops: Laptop[] = sortArrByObjProps([...data.laptops], '-price')
      console.log('Sorted:', laptops)
      setLaptopsArray(laptops)
    }
  }, [data])
  

  return (
    <div>
      <Banner />
      {
        laptopsArray && laptopsArray.map((laptop, i) => (
          <p>{laptop.name}</p>
        ))
      }
    </div>
  )
}

export default ProductsPage