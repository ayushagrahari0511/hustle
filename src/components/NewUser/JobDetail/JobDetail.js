import React from 'react'
import styles from "./JobDetail.module.css"
import SignUpCard from '../../shared/SignUpCard/SignUpCard'
import WorkCard from '../../shared/WorkCard.js/WorkCard'

const ExploreJobs = () => {


    return (
        <>
            <div className="container">
                <div className={`wrapper ${styles.explore}`}>
                    <div className={styles.wrapper}>
                        <div className={styles.title}>
                            <h2>
                                Become a <span className={styles.hustle}>Hustler </span> and
                                work from your home or physically.
                            </h2>
                            <h5>
                                Lorem Ipsum is simply dummy text of the printing and ty pesetting industry.Lorem Ipsum.
                            </h5>
                        </div>
                        <WorkCard/>
                    </div>
                    <SignUpCard />
                </div>
            </div>
        </>
    )
}

export default ExploreJobs