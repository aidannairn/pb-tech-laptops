import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_LAPTOP } from '../../mutations/laptopMutations'

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
  const [quantity, setQuantity] = useState<number | string>('')
  const [price, setPrice] = useState<number | string>('')
  const [image, setImage] = useState<string>('')
  const [images, setImages] = useState<string[]>([])

  const [addLaptop] = useMutation<{addLaptop: FormElements}>(ADD_LAPTOP, {
    variables: {
      name,
      types,
      quantity,
      price,
      images
    }
  })

  const handleFormSubmit = (e: React.ChangeEvent<FormElements>) => {
    e.preventDefault()

    
    addLaptop()

    setName('')
    setTypes([])
    setQuantity('')
    setPrice('')
    setImages([])
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
    <div className='add-laptop-form'>
      <div className="alf-modal" >
        <h1 id='addLaptopModalLabel'>Add Laptop</h1>
        <form onSubmit={handleFormSubmit}>
          <button type='submit'>Add Laptop</button>
          <div>
            <label className='form-label'>Name</label>
            <input type="text" className="form-control" id="name" value={name} onChange={ e => setName(e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Quantity</label>
            <input type="number" className="form-control" id="quantity" value={quantity} onChange={ e => setQuantity(+e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Price</label>
            <input type="number" className="form-control" id="price" value={price} onChange={ e => setPrice(+e.target.value)} />
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
      </div>
    </div>
  )
}

export default AddLaptopForm