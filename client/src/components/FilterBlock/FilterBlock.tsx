import { useEffect, useState } from 'react'
import MultiRangeSlider from '../MultiRangeSlider/MultiRangeSlider'
import './filter-block.scss'

type NumberRange = [string, number, number]

interface Props {
  heading: string
  list?: any
  range?: NumberRange
  filteredRange?: NumberRange
  action?: any
}

const FilterBlock: React.FC<Props> = ({ heading, list, range, filteredRange, action }) => {
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
              <div key={i} className="fb-checklist-item">
                <input type="checkbox" name={heading} id={`${item}-${i}`} />
                <label htmlFor={`${item}-${i}`}>{item}</label>
              </div>
            ))
          }
        </div>
      }
      {
        range && filteredRange &&
        <div className="fb-range">
          <MultiRangeSlider range={range} action={action} />
          { filteredRange[0] === '$' && <p>${filteredRange[1]} - ${filteredRange[2]}</p> }
          { filteredRange[0] === 'GB' && <p>{filteredRange[1]}GB - {filteredRange[2]}GB</p> }
          { filteredRange[0] === '"' && <p>{filteredRange[1]}" - {filteredRange[2]}"</p> }
        </div>
      }
    </div>
  )
}

export default FilterBlock