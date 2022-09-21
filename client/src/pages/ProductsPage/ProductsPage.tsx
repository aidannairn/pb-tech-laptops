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
  const [defaultPriceRange, setDefaultPriceRange] = useState<NumberRange>(['$', 0, 9999])
  const [filteredPriceRange, setFilteredPriceRange] = useState<NumberRange>(['$', 0, 9999])
  const [defaultStorageRange, setDefaultStorageRange] = useState<NumberRange>(['GB', 128, 2500])
  const [filteredStorageRange, setFilteredStorageRange] = useState<NumberRange>(['GB', 128, 2500])
  const [defaultRamRange, setDefaultRamRange] = useState<NumberRange>(['GB', 4, 64])
  const [filteredRamRange, setFilteredRamRange] = useState<NumberRange>(['GB', 4, 64])
  const [searchBrands, setSearchBrands] = useState<string[]>(['Apple', 'HP', 'Acer', 'Dell'])
  const [searchOperatingSystems, setSearchOperatingSystems] = useState<string[]>(['Mac OS', 'Windows 10 Pro', 'Windows 10 Pro 64', 'Windows 10 Home', 'Windows 11 Pro', 'Windows 11 Home', 'Windows 10 S'])
  const [defaultSizeRange, setdefaultSizeRange] = useState<NumberRange>(['"', 10, 16])
  const [filteredSizeRange, setFilteredSizeRange] = useState<NumberRange>(['"', 10, 16])
  const [uniqueBrands, setUniqueBrands] = useState<string[]>([''])
  const [uniqueOperatingSystems, setUniqueOperatingSystems] = useState<string[]>([''])


  const { loading, error, data } = useQuery<Data>(GET_LAPTOPS)
  
  if (loading) <p>Loading...</p>
  if (error) <p>Error</p>

  const checkNumBetweenRange = (num: number, range: NumberRange) => 
    num >= range[1] && num <= range[2]

  const filterLaptops = (laptops: any) => {
    const filteredLaptops = laptops.filter((laptop: any) => {
      const { price, storage, brand, operatingSystem, ram, sizeInInches } = laptop
      return searchBrands.includes(brand)
        && searchOperatingSystems.includes(operatingSystem)
        && checkNumBetweenRange(price, filteredPriceRange)
        && checkNumBetweenRange(storage, filteredStorageRange)
        && checkNumBetweenRange(ram, filteredRamRange)
        && checkNumBetweenRange(sizeInInches, filteredSizeRange)
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
  }, [data, searchBrands, searchOperatingSystems, filteredPriceRange, filteredRamRange, filteredStorageRange, filteredSizeRange])
  
  return (
    <>
      <Banner />
      <div className="products-page">
        <div className="product-filters">
          { uniqueBrands && <FilterBlock 
            heading="Brand"
            list={uniqueBrands.map((brand) => brand)} 
          /> }
          { defaultPriceRange && filteredPriceRange && <FilterBlock 
            heading="Price"
            range={defaultPriceRange}
            filteredRange={filteredPriceRange}
            action={setFilteredPriceRange}
          /> }
          { defaultRamRange && <FilterBlock 
            heading="RAM"
            range={defaultRamRange}
            filteredRange={filteredRamRange}
            action={setFilteredRamRange}
          /> }
          { defaultStorageRange && <FilterBlock 
            heading="Storage"
            range={defaultStorageRange}
            filteredRange={filteredStorageRange}
            action={setFilteredStorageRange}
          /> }
          { uniqueOperatingSystems && <FilterBlock 
            heading="Operating Systems"
            list={uniqueOperatingSystems.map((os) => os)} 
          /> }
          { defaultSizeRange && <FilterBlock 
            heading="Screen Size"
            range={defaultSizeRange}
            filteredRange={filteredSizeRange}
            action={setFilteredSizeRange}
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