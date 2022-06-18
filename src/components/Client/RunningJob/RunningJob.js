import React from 'react'
import styles from '../ActiveJob/ActiveJob.module.css'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Link } from 'react-router-dom'

const RunningJob = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h2>Title of work</h2>
                <div>
                    <img src="../../delete.svg" alt="" />
                    <h4>Remote</h4>
                </div>
            </div>
            <div className={styles.location}>
                <img src="../../location_dark.svg" alt="" />
                <h5>London, Uk</h5>
                <h5>Posted 5 minute ago</h5>
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
            <div className={styles.info}>
                <div className={styles.time_left}>
                    <h2>Time Left: </h2>
                    <h4>05 Hours 30 Minutes</h4>
                </div>
                <button className='button_dark'>
                    Download File
                </button>
            </div>
        </div>
    )
}

export default RunningJob