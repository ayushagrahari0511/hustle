import React from 'react'
import styles from './FeatureCard.module.css'

const FeatureCard = ({img, title, desc}) => {
    return (
        <>
            <div className={styles.container}>
                <img src={img} alt="" />
                <h3>
                    {title}
                </h3>
                <h5>
                    {desc}
                </h5>
            </div>
        </>
    )
}

export default FeatureCard