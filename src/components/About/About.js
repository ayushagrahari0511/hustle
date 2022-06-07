import React from 'react'
import FeatureCard from '../shared/FeatureCard/FeatureCard'
import Title from '../shared/Title/Title'
import styles from './About.module.css'

const About = () => {
    return (
        <>
            <div className='container'>
                <div className={`${styles.home} wrapper`}>
                    <div className={styles.feature_title}>
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
                            img="../searchJob.svg"
                            title="Search From Both Local or Remote Jobs"
                            desc="Lorem Ipsum is simply dummy text of the p."
                        />
                        <FeatureCard
                            img="../remoteJob.svg"
                            title="Work From Your
                    Own Comfortable
                    Place."
                            desc="Lorem Ipsum is simply dummy text of the p."

                        />
                        <FeatureCard
                            img="../localJob.svg"
                            title="Or Work Directly
                    At People’s
                    Place."
                            desc="Lorem Ipsum is simply dummy text of the p."

                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About