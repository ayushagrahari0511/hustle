import React from 'react'
import styles from '../ActiveJob/ActiveJob.module.css'
import { Link } from 'react-router-dom'

const SubmittedJob = () => {
  return (
    <>
            <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>Title of work</h2>
                <div>
                    <h4>Remote</h4>
                </div>
            </div>
            <div className={styles.location}>
                <img src="../../location_dark.svg" alt="" />
                <h5>London, Uk <span>(Posted 5 minute ago)</span>
                </h5>
            </div>
            <div className={styles.category}>
                <div className={styles.list}>
                    <h6>Category</h6>
                    <h4>Cooking</h4>
                </div>
                <div className={styles.list}>
                    <h6>Budget</h6>
                    <h4>$ price</h4>
                </div>
                <div className={styles.list}>
                    <h6>Experience</h6>
                    <h4>Experience Level</h4>
                </div>
                <div className={styles.list}>
                    <h6>Period</h6>
                    <h4>4-5 hours</h4>
                </div>
            </div>
            <div className={styles.application}>
                <div className={styles.links}>
                    <Link to={`/`}>View Details</Link>
                </div>
            </div>
        </div>

    </>
  )
}

export default SubmittedJob