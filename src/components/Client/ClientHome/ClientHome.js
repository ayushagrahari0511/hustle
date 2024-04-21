import React, { useState } from 'react'
import styles from './ClientHome.module.css'
import ActiveJob from '../ActiveJob/ActiveJob'
import RunningJob from '../RunningJob/RunningJob'
import { useNavigate } from 'react-router-dom'

const ClientHome = () => {
    const navigate = useNavigate()
    const [job, setJob] = useState("active")

    return (
        <div className='container'>
            <div className={`wrapper ${styles.wrapper}`}>
                <div className={styles.title}>
                    <h2>Welcome to Freelancer Hub!</h2>
                    <h5>
                        Lorem Ipsum is simply dummy text of
                        the printing and typesetting industry.
                        Lorem Ipsum.
                    </h5>
                    <button className='button_dark' onClick={() => navigate('/post-job')}>
                        <img src="../../post_simple.svg" alt="" />
                        Post a job
                    </button>
                </div>
                <div className={styles.job}>
                    <div className={styles.name}>
                        <h3 className={job === "active" ? styles.active : ""} onClick={() => setJob("active")}>
                            Active Jobs(3)
                        </h3>
                        <h3 className={job === "running" ? styles.active : ""} onClick={() => setJob("running")}>
                            Running Jobs
                        </h3>
                    </div>
                    <div className={styles.line}>
                        <div>
                            <span className={job === "active" ? styles.line_active : ""}></span>
                        </div>
                        <div>
                            <span className={job === "running" ? styles.line_active : ""}></span>
                        </div>
                    </div>
                </div>
                {
                    job === "active" ?
                        <div className={styles.jobList}>
                            <ActiveJob />
                            <ActiveJob />
                            <ActiveJob />
                            <ActiveJob />
                            <ActiveJob />
                        </div>
                        : <>
                            <div className={styles.jobList}>
                                <RunningJob />
                                <RunningJob />
                                <RunningJob />
                                <RunningJob />
                                <RunningJob />
                            </div>

                        </>
                }
            </div>
        </div>
    )
}

export default ClientHome