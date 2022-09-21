import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_LAPTOPS } from "../../queries/laptopQueries"
import { sortArrByObjProps } from "../../utils/sortArrByObjProps"
import FilterBlock from "../../components/FilterBlock/FilterBlock"
import getUniqueObjFields from "../../utils/getUniqueObjFields"
import Banner from "../../components/Banner/Banner"
import './products-page.scss'

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

type NumberRange = [string, number, number]

const ProductsPage: React.FC = () => {
  const [laptopsArray, setLaptopsArray] = useState<Laptop[] | null>(null)
  const [priceRange, setPriceRange] = useState<NumberRange>(['$', 0, 9999.99])
  const [storageRange, setStorageRange] = useState<NumberRange>(['GB', 128, 2500])
  const [ramRange, setRamRange] = useState<NumberRange>(['GB', 4, 64])
  const [searchBrands, setSearchBrands] = useState<string[]>(['Apple', 'HP'])
  const [searchOperatingSystems, setSearchOperatingSystems] = useState<string[]>(['Mac OS', 'Windows 10 Pro', 'Windows 10 Pro 64', 'Windows 10 Home'])
  const [uniqueBrands, setUniqueBrands] = useState<string[]>([''])
  const [uniqueOperatingSystems, setUniqueOperatingSystems] = useState<string[]>([''])


  const { loading, error, data } = useQuery<Data>(GET_LAPTOPS)
  
  if (loading) <p>Loading...</p>
  if (error) <p>Error</p>

  const checkNumBetweenRange = (num: number, range: NumberRange) => 
    num >= range[1] && num <= range[2]

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

      const uniqueBrandsArray = getUniqueObjFields('brand', laptops)
      setUniqueBrands(uniqueBrandsArray)

      const uniqueOperatingSystemsArray = getUniqueObjFields('operatingSystem', laptops)
      setUniqueOperatingSystems(uniqueOperatingSystemsArray)

      const filteredLaptops = filterLaptops(laptops)
      setLaptopsArray(filteredLaptops)
    }
  }, [data])
  
  return (
    <>
      <Banner />
      <div className="products-page">
        <div className="product-filters">
          { uniqueBrands && <FilterBlock 
            heading="Brand"
            list={uniqueBrands.map((brand) => brand)} 
          /> }
          { priceRange && <FilterBlock 
            heading="Price"
            range={priceRange}
          /> }
          { ramRange && <FilterBlock 
            heading="RAM"
            range={ramRange}
          /> }
          { uniqueOperatingSystems && <FilterBlock 
            heading="Operating Systems"
            list={uniqueOperatingSystems.map((os) => os)} 
          /> }
        </div>
        <div className="products-collection">
          {
            laptopsArray && laptopsArray.map((laptop, i) => (
              <p key={i} >{laptop.name}</p>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default ProductsPage