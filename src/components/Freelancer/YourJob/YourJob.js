import React, { useState } from 'react'
import styles from './YourJob.module.css'
import ActiveJob from '../ActiveJob/ActiveJob'
import SubmittedJob from '../SubmittedJob/SubmittedJob'
import { useNavigate } from 'react-router-dom'

const YourJob = () => {
    const navigate = useNavigate()
    const [job, setJob] = useState("active")

    return (
        <div className='container'>
            <div className={`wrapper ${styles.wrapper}`}>
                <div className={styles.title}>
                    <h2>Your Jobs</h2>
                </div>
                <div className={styles.job}>
                    <div className={styles.name}>
                        <h3 className={job === "active" ? styles.active : ""} onClick={() => setJob("active")}>
                            Active Jobs(3)
                        </h3>
                        <h3 className={job === "interviewing" ? styles.active : ""} onClick={() => setJob("interviewing")}>
                            Interviewing
                        </h3>
                        <h3 className={job === "submitted" ? styles.active : ""} onClick={() => setJob("submitted")}>
                            Submitted
                        </h3>
                    </div>
                    <div className={styles.line}>
                        <div>
                            <span className={job === "active" ? styles.line_active : ""}></span>
                        </div>
                        <div>
                            <span className={job === "interviewing" ? styles.line_active : ""}></span>
                        </div>
                        <div>
                            <span className={job === "submitted" ? styles.line_active : ""}></span>
                        </div>
                    </div>
                </div>
                {
                    job === "active" ?
                        <>
                            <div className={styles.jobList}>
                                <ActiveJob />
                                <ActiveJob />
                                <ActiveJob />
                                <ActiveJob />
                                <ActiveJob />
                            </div>
                            <button className='button_light'>
                                Brows Jobs
                            </button>
                        </>
                        : job === "interviewing" ? <>
                            <div className={styles.jobList}>
                                <SubmittedJob />
                                <SubmittedJob />
                                <SubmittedJob />
                                <SubmittedJob />
                                <SubmittedJob />
                            </div>
                            <button className='button_light'>
                                Brows Jobs
                            </button>
                        </>

                            : <>
                                <div className={styles.jobList}>
                                    <SubmittedJob />
                                    <SubmittedJob />
                                    <SubmittedJob />
                                    <SubmittedJob />
                                    <SubmittedJob />
                                </div>
                                <button className='button_light'>
                                    Find More Jobs
                                </button>
                            </>
                }

            </div>
        </div>
    )
}

export default YourJob