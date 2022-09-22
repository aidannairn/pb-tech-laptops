import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useQuery } from "@apollo/client"
import { GET_LAPTOPS } from "../../queries/laptopQueries"
import { sortArrByObjProps } from "../../utils/sortArrByObjProps"
import FilterBlock from "../../components/FilterBlock/FilterBlock"
import getUniqueObjFields from "../../utils/getUniqueObjFields"
import Banner from "../../components/Banner/Banner"
import './products-page.scss'
import ProductsSortingBar from "../../components/ProductsSortingBar/ProductsSortingBar"

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

interface UniqueItem {
  name: string
  isChecked: boolean
}

const ProductsPage: React.FC = () => {
  const [laptopsArray, setLaptopsArray] = useState<Laptop[] | null>(null)
  const [filteredLaptopsArray, setFilteredLaptopsArray] = useState<Laptop[] | null>(null)
  const [defaultPriceRange, setDefaultPriceRange] = useState<NumberRange>(['$', 0, 9999])
  const [filteredPriceRange, setFilteredPriceRange] = useState<NumberRange>(['$', 0, 9999])
  const [defaultStorageRange, setDefaultStorageRange] = useState<NumberRange>(['GB', 128, 2500])
  const [filteredStorageRange, setFilteredStorageRange] = useState<NumberRange>(['GB', 128, 2500])
  const [defaultRamRange, setDefaultRamRange] = useState<NumberRange>(['GB', 4, 64])
  const [filteredRamRange, setFilteredRamRange] = useState<NumberRange>(['GB', 4, 64])
  const [searchBrands, setSearchBrands] = useState<string[]>(['Apple', 'HP', 'Acer', 'Dell'])
  const [searchOperatingSystems, setSearchOperatingSystems] = useState<string[]>(['Windows 10 Pro', 'Mac OS', 'Windows 10 Pro 64', 'Windows 10 Home', 'Windows 11 Pro', 'Windows 11 Home', 'Windows 10 S'])
  const [defaultSizeRange, setdefaultSizeRange] = useState<NumberRange>(['"', 10, 16])
  const [filteredSizeRange, setFilteredSizeRange] = useState<NumberRange>(['"', 10, 16])
  const [uniqueBrands, setUniqueBrands] = useState<UniqueItem[]>([])
  const [uniqueOperatingSystems, setUniqueOperatingSystems] = useState<UniqueItem[]>([])
  const [sortType, setSortType] = useState('Most Popular')
  
  const { loading, error, data } = useQuery<Data>(GET_LAPTOPS)
  
  const navigate = useNavigate()

  const handleLaptopClick = (id: string) => {
    console.log(id)
    navigate(`/product-page/${id}`)
  }

  if (loading) <p>Loading...</p>
  if (error) <p>Error</p>

  const checkNumBetweenRange = (num: number, range: NumberRange) => 
  num >= range[1] && num <= range[2]
  
  const filterLaptops = (laptops: any) => {
    const filteredLaptops = laptops.filter((laptop: any) => {
      const { price, storage, brand, operatingSystem, ram, sizeInInches } = laptop

      return (
        uniqueBrands.some(uBrand => uBrand.name === brand && uBrand.isChecked === true)
        && uniqueOperatingSystems.some(uOS => uOS.name === operatingSystem && uOS.isChecked === true)
        && checkNumBetweenRange(price, filteredPriceRange)
        && checkNumBetweenRange(storage, filteredStorageRange)
        && checkNumBetweenRange(ram, filteredRamRange)
        && checkNumBetweenRange(sizeInInches, filteredSizeRange)
      )
    })
    return filteredLaptops
  }

  useEffect(() => {
    let sortField: string

    switch (sortType) {
      case 'Most Popular': sortField = '-amountSold'
        break;
      case 'Highest Price': sortField = '-price'
        break;
      case 'Lowest Price': sortField = 'price'
        break;
      case 'Name [A-Z]': sortField = 'name'
        break;
      case 'Name [Z-A]': sortField = '-name'
        break;
      default: sortField = '-price'
        break;
    }

    const laptops = filteredLaptopsArray && sortArrByObjProps([...filteredLaptopsArray], sortField)
      setFilteredLaptopsArray(laptops)
  }, [sortType])

  useEffect(() => {
    if (data && data.laptops) {
      const laptops: Laptop[] = sortArrByObjProps([...data.laptops], '-price')
      setLaptopsArray(laptops)

      const uniqueBrandsArray = getUniqueObjFields('brand', laptops)
      setUniqueBrands(uniqueBrandsArray)

      const uniqueOperatingSystemsArray = getUniqueObjFields('operatingSystem', laptops)
      setUniqueOperatingSystems(uniqueOperatingSystemsArray)
    }
  }, [data])

  useEffect(() => {
    const filteredLaptops = laptopsArray && filterLaptops([...laptopsArray])

    setFilteredLaptopsArray(filteredLaptops)
  }, [searchBrands, searchOperatingSystems, filteredPriceRange, filteredRamRange, filteredStorageRange, filteredSizeRange, uniqueBrands, uniqueOperatingSystems])
  
  return (
    <>
      <Banner />
      <div className="products-page">
        <div className="product-filters">
          { uniqueBrands && <FilterBlock 
            heading="Brand"
            list={uniqueBrands.map((brand) => brand)} 
            action={setUniqueBrands}
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
            action={setUniqueOperatingSystems}
          /> }
          { defaultSizeRange && <FilterBlock 
            heading="Screen Size"
            range={defaultSizeRange}
            filteredRange={filteredSizeRange}
            action={setFilteredSizeRange}
          /> }
        </div>
        <div className="products-container">
          <ProductsSortingBar action={setSortType} />
          <div className="products-collection">
            {
              filteredLaptopsArray && filteredLaptopsArray.map((laptop, i) => (
                <div key={i} onClick={() => handleLaptopClick(laptop.id)}>{laptop.name}</div>
                
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductsPage