import './products-sorting-bar.scss'

interface ProductSortingBarProps {
  action: React.Dispatch<React.SetStateAction<string>>
}

interface PSBDropdownProps {
  options: string[]
  action?: any
}

const PSBDropdown: React.FC<PSBDropdownProps> = ({ action, options }) => {

  const handleDropdownItemClick = (index: number) => {
    action && action(options[index])
  }

  return (
    <div className="psb-dropdown">
      {
        options.map((option, i) => (
          <div key={i} className="psb-dropdown-option" onClick={() => handleDropdownItemClick(i)}>{option}</div>
        ))
      }
    </div>
  )
}

const ProductsSortingBar: React.FC<ProductSortingBarProps> = ({ action }) => {
  const sortTypes: string[] = ['Most Popular', 'Highest Price', 'Lowest Price', 'Name [A-Z]', 'Name [Z-A]']

  const availability: string[] = ['Show All', 'Ships within 1 working day', 'Click & Collect today']

  return (
    <div className="products-sorting-bar">
      <div className="psb-page-layout">
        <label htmlFor="productPageItemsAmount">Items per page</label>
        <select name="productPageItemsAmount" id="productPageItemsAmount">
          <option value="24">24</option>
          <option value="36">36</option>
          <option value="48">48</option>
          <option value="60">60</option>
        </select>
          <img className="product-list-icon" src="/images/product-list-icon.png" alt="Product list icon."/>
          <img className="product-list-icon" src="/images/product-grid-icon.png" alt="Product grid view icon."/>
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