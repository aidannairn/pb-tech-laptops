import { useState, useRef, useCallback, useEffect, ChangeEvent } from "react"
import './multi-range-slider.scss'

interface Props {
  range: [string, number, number]
  action?: any
}

const MultiRangeSlider: React.FC<Props> = ({ range, action }) => {
  const rangeType = range[0]
  const min = range[1]
  const max = range[2]

  const [minVal, setMinVal] = useState<number>(min)
  const [maxVal, setMaxVal] = useState<number>(max)

  const minValRef = useRef<HTMLInputElement>(null)
  const maxValRef = useRef<HTMLInputElement>(null)
  const rangeRef = useRef<HTMLInputElement>(null)

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal)
      const maxPercent = getPercent(+maxValRef.current.value)

      if (rangeRef.current) {
        rangeRef.current.style.left = `${minPercent}%`
        rangeRef.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minVal, getPercent])

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value)
      const maxPercent = getPercent(maxVal)

      if (rangeRef.current) {
        rangeRef.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxVal, getPercent])

  useEffect(() => {
    action([rangeType, minVal, maxVal])
  }, [minVal, maxVal, action])

  const onMinValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+e.target.value, maxVal - 1)
    setMinVal(value)
    e.target.value = value.toString()
  }

  const onMaxValChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+e.target.value, minVal + 1)
     setMaxVal(value)
     e.target.value = value.toString()
  }

  return (
    <div className="multi-range-slider">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onMinValChange(e)}
        className={`thumb thumb--zindex-3 ${minVal > max - 100 ? 'thumb--zindex-5' : null}`}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onMaxValChange(e)}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track"></div>
        <div ref={rangeRef} className="slider__range"></div>
        {/* <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div> */}
      </div>
    </div>
  )
}

export default MultiRangeSlider