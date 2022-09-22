import { useState } from 'react'
import './products-sorting-bar.scss'

interface ProductSortingBarProps {
  action: React.Dispatch<React.SetStateAction<string>>
}

interface PSBDropdownProps {
  options: string[]
  action?: any
}

const PSBDropdown: React.FC<PSBDropdownProps> = ({ action, options }) => {
  const [currentOption, setCurrentOption] = useState<string>(options[0])
  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const handleDropdownItemClick = (option: string, index: number) => {
    action && action(options[index])
    setCurrentOption(option)
    setIsExpanded(false)
  }

  return (
    <div className='psb-dropdown-container'>
      <div className="psb-dropdown" onClick={action && (() => setIsExpanded(!isExpanded))} >
        <div className={`psb-current-option ${!action ?'psb-disabled' : ''}`}>
          <p>{currentOption}</p>
          <img src="/images/dropdown-arrow.png" className={`psb-dropdown-arrow ${isExpanded ? '-active' : ''}`} alt="Dropdown arrow." />
        </div>
      </div>
      {
        isExpanded &&
        <div className="psb-dropdown">
          {
            options.map((option, i) => (
              option !== currentOption && <div key={i} className="psb-dropdown-option" onClick={() => handleDropdownItemClick(option, i)}>
                <p>{option}</p>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

const ProductsSortingBar: React.FC<ProductSortingBarProps> = ({ action }) => {
  const sortTypes: string[] = ['Most Popular', 'Highest Price', 'Lowest Price', 'Name [A-Z]', 'Name [Z-A]']

  const availability: string[] = ['Show All', 'Ships within 1 working day', 'Click & Collect today']

  const itemsPerPage: string[] = ['24', '36', '48', '60']

  return (
    <div className="products-sorting-bar">
      <div className="psb-page-layout">
        <label htmlFor="productPageItemsAmount">Items per page</label>
        <PSBDropdown options={itemsPerPage} />
          <img className="product-list-view-icon" src="/images/product-list-icon.png" alt="Product list icon."/>
          <img className="product-grid-view-icon" src="/images/product-grid-icon.png" alt="Product grid view icon."/>
      </div>
      <div className="psb-sort-filters">
        <PSBDropdown options={availability} />
        <label htmlFor="sortFilters">Sort by</label>
        <PSBDropdown options={sortTypes} action={action} />
      </div>
    </div>
  )
}

export default ProductsSortingBar