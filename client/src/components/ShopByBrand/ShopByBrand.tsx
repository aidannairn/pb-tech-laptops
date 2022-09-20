import React from 'react'
import styles from './ShopByBrand.module.css'
import img1 from '../../images/apple.png'
import img2 from '../../images/hp.png'
import img3 from '../../images/ms.png'
import img4 from '../../images/lenovo.png'
import img5 from '../../images/acer.png'
import img6 from '../../images/dell.png'

const ShopByBrand = () => {

    const imageArr: string[] = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`, `${img6}`]

  return (
    <div className={styles.BrandContainer}>
        <h3>Shop by Popular Brand</h3>
        <div className={styles.logos}>
            {imageArr.map((value, i) => 
            <img key={i} src={value} alt='logo'/>
        )}
        </div>
        
    </div>
  )
}

export default ShopByBrand