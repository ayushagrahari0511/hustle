import React from 'react'
import styles from './FreelanceCard.module.css'

const FreelanceCard = ({img}) => {
  return (
    <div className={styles.wrapper}>
        <img src={img} alt="" />
        <h5>Freelancer's name</h5>
        <h6>Job Title</h6>
        <div className={styles.location}>
            <img src="../../location.svg" alt="" />
            <p>Location</p>
        </div>
    </div>
  )
}

export default FreelanceCard