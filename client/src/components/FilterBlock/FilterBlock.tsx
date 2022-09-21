import { useState } from 'react'
import './filter-block.scss'

interface Props {
  heading: string
  list?: any
  range?: [string, number, number]
}

const FilterBlock: React.FC<Props> = ({ heading, list, range }) => {
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
        range &&
        <div className="fb-range">
          { range[0] === '$' && <p>${range[1]} - ${range[2]}</p> }
          { range[0] === 'GB' && <p>{range[1]}GB - {range[2]}GB</p> }
        </div>
      }
    </div>
  )
}

export default FilterBlock