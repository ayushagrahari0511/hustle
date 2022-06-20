import React from 'react'
import styles from "./WorkDetail.module.css"
import WorkCard from '../../shared/WorkCard/WorkCard'
import {Link} from 'react-router-dom'

const WorkDetail = () => {
    return (
        <>
            <div className="container">
                <div className={`wrapper ${styles.wrapper}`}>
                    <div className={styles.top_navigation}>
                        <Link to={`/`}>
                            Explore works
                            <img src="../../rightArrow.svg" alt="" />
                        </Link>
                        Job Details
                    </div>
                    <WorkCard URL={"/job/dkjfk38493/submit-application"}/>
                </div>
            </div>
        </>
    )
}

export default WorkDetail