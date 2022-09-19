import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_LAPTOP } from '../../mutations/laptopMutations'
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch'

import './add-laptop-form.scss'

interface FormElements {
  name?: string
  types?: string[]
  quantity?: number
  price?: number
  images?: string[]
}

const AddLaptopForm: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [type, setType] = useState<string>('')
  const [types, setTypes] = useState<string[]>([])
  const [quantity, setQuantity] = useState<number>(100)
  const [price, setPrice] = useState<number | string>('')
  const [ram, setRam] = useState<string>('8')
  const [storage, setStorage] = useState<string>('256')
  const [sizeInInches, setSizeInInches] = useState<string>('13')
  const [isTrending, setIsTrending] = useState<boolean>(false)
  const [isOnSpecial, setIsOnSpecial] = useState<boolean>(false)
  const [amountSold, setAmountSold] = useState<number>(10)
  const [userRating, setUserRating] = useState<number>(3)
  const [userRatings, setUserRatings] = useState<number[]>([1])
  const [image, setImage] = useState<string>('')
  const [images, setImages] = useState<string[]>([])
  const [bundleIDs, setBundleIDs] = useState([
    "6328f932d5b1d9cb47f385c9",
    "6328fe32d5b1d9cb47f385e3",
    "6328fbf5d5b1d9cb47f385d6"
  ])

  const createUserRatings = async () => {
    const totalRatings = Math.floor(Math.random() * 20) + 1
    const ratings = []
    for (let rating = 1; rating < totalRatings; rating++) {
      ratings.push(userRating)
    }
    setUserRatings(ratings)
  }

  const [addLaptop] = useMutation<{addLaptop: FormElements}>(ADD_LAPTOP, {
    variables: {
      name,
      types,
      quantity,
      price,
      ram,
      storage,
      sizeInInches,
      isTrending,
      isOnSpecial,
      amountSold,
      userRatings,
      images,
      bundleIDs
    }
  })

  const resetInputs = () => {
    setName('')
    setTypes([])
    setQuantity(100)
    setPrice('')
    setRam('8')
    setStorage('256')
    setSizeInInches('13')
    setIsTrending(false)
    setIsOnSpecial(false)
    setAmountSold(10)
    setUserRating(3)
    setImages([])
  }

  const handleFormSubmit = async (e: React.ChangeEvent<FormElements>) => {
    e.preventDefault()

    await createUserRatings()
    
    addLaptop()

    resetInputs()
  }

  const handleAddTypeClick = () => {
    setTypes([...types, type])
    setType('')
  }

  const handleAddImageClick = () => {
    setImages([...images, image])
    setImage('')
  }

  return (
    <div className='modal'>
      <div className="add-laptop-form" >
        <form className='scrollable'>
          <h1 id='addLaptopModalLabel'>Add Laptop</h1>
          <div>
            <label className='form-label'>Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={ e => setName(e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Quantity</label>
            <input type="number" className="form-control" min="0" id="quantity" value={quantity} onChange={ e => setQuantity(+e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Price</label>
            <input type="number" className="form-control" min="0" id="price" value={price} onChange={ e => setPrice(+e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Amount Sold</label>
            <input type="number" className="form-control" min="0" id="amountSold" value={amountSold} onChange={ e => setAmountSold(+e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Ram <i>(GB)</i></label>
            <input type="number" className="form-control" min="0" id="ram" value={ram} onChange={ e => setRam(e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Storage <i>(GB)</i></label>
            <input type="number" className="form-control" min="0" id="storage" value={storage} onChange={ e => setStorage(e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Screen Size <i>(in inches)</i></label>
            <input type="number" className="form-control" min="0" id="sizeInInches" value={sizeInInches} onChange={ e => setSizeInInches(e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Is This Product Trending?</label>
            <ToggleSwitch id="toggleIsTrending" checked={isTrending} action={setIsTrending} />
          </div>
          <div>
            <label className='form-label'>Is This Product On Special?</label>
            <ToggleSwitch id="toggleOnSpecial" checked={isOnSpecial} action={setIsOnSpecial} />
          </div>
          <div>
            <label className='form-label'>Rating <i>(between 1 and 5)</i></label>
            <input type="number" className="form-control" id="userRating" value={userRating} onChange={ e => setUserRating(+e.target.value)} min="1" max="5" />
          </div>
          <div>
            <label className='form-label'>Types</label>
            <input type="text" className="form-control" id="type" value={type} onChange={ e => setType(e.target.value)} /><button type='button' onClick={handleAddTypeClick}>Add Type</button>
            {
              types.length > 0 &&
              <div className="afl-types">
                {
                  types.map((type, i) => (
                    <p key={i}>{type}</p>
                  ))
                }
              </div>
            }
          </div>
          <div>
            <label className='form-label'>Images</label>
            <input type="text" className="form-control" id="image" value={image} onChange={ e => setImage(e.target.value)} /><button type='button' onClick={handleAddImageClick}>Add Image</button>
            {
              images.length > 0 &&
              <div className="afl-images">
                {
                  images.map((image, i) => (
                    <img key={i} src={image} alt="Laptop" />
                  ))
                }
              </div>
            }
          </div>
        </form>
        <div className="form-actions">
          <button type='button' onClick={handleFormSubmit}>Add Laptop</button>
        </div>
      </div>
    </div>
  )
}

export default AddLaptopForm