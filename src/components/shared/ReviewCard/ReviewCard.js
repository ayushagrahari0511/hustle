import React from 'react'
import styles from './ReviewCard.module.css'
import Rating  from '@mui/material/Rating'

const ReviewCard = () => {
    return (
        <div className={styles.wrapper}>
            <img src="../../profile10.png" alt="" />
            <h6>
                “ <br />
                um is simply dummy text of the printing and typesetting industry.
            </h6>
            <h5>
                Name
            </h5>
            <Rating 
            value={3}
            readOnly
            />
        </div>
    )
}

export default ReviewCard