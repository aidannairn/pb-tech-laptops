import { useEffect, useState } from 'react'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider'
import './filter-block.scss'

type NumberRange = [string, number, number]

interface FilterBlockProps {
  heading: string
  list?: any
  range?: NumberRange
  filteredRange?: NumberRange
  action?: any
}

interface ListItemProps {
  index: number
  heading: string
  list: any
  item: any
  action: any
}

const ListItem: React.FC<ListItemProps> = ({ index, heading, list, item, action }) => {
  const [isChecked, setIsChecked] = useState(true)

  const handleCheckboxClick = () => {
    const updatedItems = [...list]
    const updatedItem = !updatedItems[index]['isChecked']
    
    updatedItems[index]['isChecked'] = updatedItem 
    
    setIsChecked(!isChecked)
    action(updatedItems)
  }

  return (
    <div className="fb-checklist-item">
      <input type="checkbox" name={heading} id={`${item.name}-${index}`} onClick={handleCheckboxClick} checked={isChecked} readOnly />
      <label htmlFor={`${item.name}-${index}`} className={`${isChecked ? 'active' : null}`}>{item.name}</label>
    </div>
  )
}

const FilterBlock: React.FC<FilterBlockProps> = ({ heading, list, range, filteredRange, action }) => {
  const [blockType, setBlockType] = useState<string>('list')
  const [isExpanded, setIsExpanded] = useState<boolean>(true)

  return (
    <div className="filter-block">
      <div className="filter-block-header">
        <p className="filter-block-title">{heading}</p>
        <div className="filter-block-toggle-btn">-</div>
      </div>
      {
        list &&
        <div className="fb-checklist">
          {
            list.map((item: any, i: number) => (
              <ListItem key={i} list={list} index={i} item={item} heading={heading} action={action} />
            ))
          }
        </div>
      }
      {
        range && filteredRange &&
        <div className="fb-range">
          <MultiRangeSlider range={range} action={action} />
          { filteredRange[0] === '$' ? <p>${filteredRange[1]} - ${filteredRange[2]}</p> : <p>{filteredRange[1]}{range[0]} - {filteredRange[2]}{range[0]}</p>}
        </div>
      }
    </div>
  )
}

export default FilterBlock