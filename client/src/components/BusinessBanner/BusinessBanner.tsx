import React from 'react'
import styles from './BusinessBanner.module.css'
import image from '../../images/businessBanner.png'

const BusinessBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.wrapper}>
        <h2>Are you <span>purchasing for your business?</span></h2>
        <p>PB Tech's business customers have access to our <span>commercial web portal</span>, giving<br></br> you access to features such as custom catalogue creation, order authorisation, and<br></br> commercial pricing.</p>
        <button type='button'>Apply Now</button>
        <button type='button'>Learn More</button>
        <img src={image} alt='banner'></img>
      </div>
    </div>
  )
}

export default BusinessBanner