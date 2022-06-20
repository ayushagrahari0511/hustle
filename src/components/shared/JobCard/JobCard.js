import React from 'react'
import styles from './JobCard.module.css'
import { Link } from 'react-router-dom'

const JobCard = ({detail, apply}) => {
  return (
    <>
      <div className={styles.wrapper}>
        <h5 className={styles.job_title}>
          UI/UX Designer
        </h5>
        <h4 className={styles.title}>
          Dashboard designer needed
          for a SAAS Project
        </h4>
        <div className={styles.location}>
          <img src="../../location_dark.svg" alt="" />
          <h6>
            London, UK
          </h6>
        </div>
        <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
        </p>
        <div className={styles.info}>
          <div className={styles.budget}>
            <h4>
              Budget
            </h4>
            <h6>
              $ price
            </h6>
          </div>
          <div className={styles.budget}>
            <h4>
              Experience
            </h4>
            <h6>
              Experience Level
            </h6>
          </div>
        </div>
        <div className={styles.details}>
          <Link to={detail}>
            <h4>
              View Details
            </h4>
          </Link>
          <Link to={apply} className={styles.apply}>
            <h4>
              Apply
            </h4>
          </Link>
        </div>
      </div>
    </>
  )
}

export default JobCard