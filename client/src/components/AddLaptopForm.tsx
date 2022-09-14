import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_LAPTOP } from '../mutations/laptopMutations'

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
  const [types, setTypes] = useState<string[]>(["Test Type"])
  const [quantity, setQuantity] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  const [image, setImage] = useState<string>('')
  const [images, setImages] = useState<string[]>(["Test Images"])

  const [addLaptop] = useMutation<{addLaptop: FormElements}>(ADD_LAPTOP, {
    variables: {
      name,
      types,
      quantity,
      price,
      images
    }
  })

  /* const handleFormSubmit = (e: React.ChangeEvent<FormElements>) => {
    e.preventDefault()


    addLaptop()

    setName('')
    setTypes([])
    setQuantity(0)
    setPrice(0)
    setImages([])
  } */


  return (
    <div className='AddLaptopForm'>
      <div className="alfModal" >
        <h1 id='addLaptopModalLabel'>Add Laptop</h1>
        <form 
        // onSubmit={handleFormSubmit}
        >
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
            <label className='form-label'>types</label>
            <input type="text" className="form-control" id="type" value={type} onChange={ e => setType(e.target.value)} />
          </div>
          <div>
            <label className='form-label'>Images</label>
            <input type="number" className="form-control" id="image" value={image} onChange={ e => setImage(e.target.value)} />
          </div>
          <button onClick={() => name && types && quantity && price && images && addLaptop()}></button>
        </form>
      </div>
    </div>
  )
}

export default AddLaptopForm