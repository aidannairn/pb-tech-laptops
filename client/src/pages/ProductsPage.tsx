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
  storage: string
  ram: string
  operatingSystem: string
  brand: string
}

interface Data {
  laptops: Laptop[] | null
}

type NumberRange = [number, number]

const ProductsPage: React.FC = () => {
  const [laptopsArray, setLaptopsArray] = useState<Laptop[] | null>(null)
  const [priceRange, setPriceRange] = useState<NumberRange>([0, 9999.99])
  const [storageRange, setStorageRange] = useState<NumberRange>([128, 2500])
  const [ramRange, setRamRange] = useState<NumberRange>([4, 64])
  const [searchBrands, setSearchBrands] = useState<string[]>(['Apple', 'HP'])
  const [searchOperatingSystems, setSearchOperatingSystems] = useState<string[]>(['Mac OS', 'Windows 10 Pro', 'Windows 10 Pro 64', 'Windows 10 Home'])


  const { loading, error, data } = useQuery<Data>(GET_LAPTOPS)
  
  if (loading) <p>Loading...</p>
  if (error) <p>Error</p>

  const checkNumBetweenRange = (num: number, range: NumberRange) => 
    num >= range[0] && num <= range[1]

  const filterLaptops = (laptops: any) => {
    const filteredLaptops = laptops.filter((laptop: any) => {
      const { price, storage, brand, operatingSystem, ram } = laptop
      return searchBrands.includes(brand)
        && searchOperatingSystems.includes(operatingSystem)
        && checkNumBetweenRange(price, priceRange)
        && checkNumBetweenRange(storage, storageRange)
        && checkNumBetweenRange(ram, ramRange)
    })
    return filteredLaptops
  }

  useEffect(() => {
    if (data && data.laptops) {
      const laptops: Laptop[] = sortArrByObjProps([...data.laptops], '-price')
      setLaptopsArray(laptops)
      const filteredLaptops = filterLaptops(laptops)
      setLaptopsArray(filteredLaptops)
    }
  }, [data])
  
  return (
    <div>
      <Banner />
      {
        laptopsArray && laptopsArray.map((laptop, i) => (
          <p key={i} >{laptop.name}</p>
        ))
      }
    </div>
  )
}

export default ProductsPage