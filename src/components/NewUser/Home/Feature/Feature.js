import React from 'react'
import Title from '../../../shared/Title/Title'
import { useNavigate } from 'react-router-dom'
import FeatureCard from '../../../shared/FeatureCard/FeatureCard'
import styles from './Feature.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Feature = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <Title
                    title="Why We are"
                    subTitle="Different"
                    titleColor="var(--primary_yellow)"
                    subTitleColor="var(--primary_blue)"
                />
                <h5>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum.
                </h5>
            </div>
            <div className={styles.feature}>
                <FeatureCard
                    img="../../searchJob.svg"
                    title="Search From Both Local or Remote Jobs"
                    desc="Lorem Ipsum is simply dummy text of the p."
                />
                <FeatureCard
                    img="../../remoteJob.svg"
                    title="Work From Your
                    Own Comfortable
                    Place."
                    desc="Lorem Ipsum is simply dummy text of the p."

                />
                <FeatureCard
                    img="../../localJob.svg"
                    title="Or Work Directly
                    At People’s
                    Place."
                    desc="Lorem Ipsum is simply dummy text of the p."

                />
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.desc}>
                    <h2>
                        Explore Talents for <span className={styles.hustle}>Your job.</span>
                    </h2>
                    <h5>
                        Work with freelancers who are independent and ready to work for
                        your local or remote job.
                    </h5>
                    <div className={styles.client_feature}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.fontIcon} />
                        <h3>Post your job.</h3>
                    </div>
                    <div className={styles.client_feature}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.fontIcon} />
                        <h3>Browse and hire talents.</h3>
                    </div>
                    <div className={styles.client_feature}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles.fontIcon} />
                        <h3>Pay them safely.</h3>
                    </div>

                    <button className='button_dark' onClick={() => navigate('/explore-talents')}>
                        <h5>
                            Explore Talents
                        </h5>
                    </button>
                </div>
                <div className={styles.img}>
                    <img src="../../shakeHand.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Feature