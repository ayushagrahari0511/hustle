import React from 'react'
import styles from './ActiveJob.module.css'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Link } from 'react-router-dom'

const ActiveJob = () => {
    return (
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
                <div className={styles.total_application}>
                    <h5>Applications: 15+</h5>
                    <AvatarGroup max={3}>
                        <Avatar src="../../profile1.png" sx={
                            {
                                width: 25,
                                height: 25
                            }
                        } />
                        <Avatar src="../../profile2.png" sx={
                            {
                                width: 25,
                                height: 25
                            }
                        } />
                        <Avatar src="../../profile3.png" sx={
                            {
                                width: 25,
                                height: 25
                            }
                        } />
                    </AvatarGroup>
                </div>
                <div className={styles.links}>
                    <Link to={`/`}>View Applications</Link>
                    <Link to={`/`}>View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default ActiveJob