import React from 'react'
import styles from './SkillCard.module.css'

const SkillCard = ({ title, totalJobs }) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <h3>{title}</h3>
                    <img src="../../rightArrow.svg" alt="" />
                </div>
                <h5>{totalJobs}</h5>
            </div>
        </>
    )
}

export default SkillCard