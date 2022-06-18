import React from 'react'
import styles from '../../shared/WorkCard/WorkCard.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ReviewJob = () => {
    const {
        title,
        category,
        description,
        experience,
        duration,
        budget,
        enlish_level,
        job_type,
        location,
        skills,
    } = useSelector(state => state.job_detail)
    return (
        <>
            <div className='container'>
                <div className={`wrapper ${styles.JobReview}`}>
                    <div className={styles.top_navigation}>
                        <Link to={`/`}>
                            Home
                            <img src="../../rightArrow.svg" alt="" />
                        </Link>
                        <Link to={`/post-job`}>
                            Post a job
                            <img src="../../rightArrow.svg" alt="" />
                        </Link>
                        Review Job
                    </div>
                    <h2>Your Job Details</h2>
                    <div className={styles.wrapper}>
                        <div className={styles.title_wrapper}>
                            <h3>{title}</h3>
                            <div className={styles.save}>
                                <h5>{job_type}</h5>
                                <img src="../../save.svg" alt="" />
                            </div>
                        </div>
                        <div className={styles.location}>
                            <img src="../../location_dark.svg" alt="" />
                            <h4>
                                {location}
                            </h4>
                        </div>
                        <h4 className={styles.description}>
                            {description}
                        </h4>
                        <div className={styles.details}>
                            <div>
                                <h4>Category</h4>
                                <h5>{category}</h5>
                            </div>
                            <div>
                                <h4>Budget</h4>
                                <h5>$ {budget}</h5>
                            </div>
                            <div>
                                <h4>Experience</h4>
                                <h5>{experience}</h5>
                            </div>
                            <div>
                                <h4>Period</h4>
                                <h5>{duration}</h5>
                            </div>
                        </div>
                        <div className={styles.skills}>
                            <h4>Skills</h4>
                            <div>
                                {skills.map((skill, index) => (
                                    <h5 key={index}>
                                        {skill}
                                    </h5>
                                ))}
                            </div>
                        </div>
                        <div className={styles.application_detail}>
                            <div className={styles.requirements}>
                                <h4>
                                    Requirements
                                </h4>
                                <div>
                                    <div className={styles.requirements_left}>
                                        <p>English Level:</p>
                                        <p>Location:</p>
                                        <p>Requirement:</p>
                                    </div>
                                    <div className={styles.requirements_right}>
                                        <p>{enlish_level}</p>
                                        <p>{location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/" className={styles.apply}>
                            <h4>Confirm</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewJob