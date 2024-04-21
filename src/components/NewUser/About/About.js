import React from 'react'
import FeatureCard from '../../shared/FeatureCard/FeatureCard'
import Title from '../../shared/Title/Title'
import styles from './About.module.css'

const About = () => {
    return (
        <>
            <div className='container'>
                <div className={`${styles.home} wrapper`}>
                    <div className={styles.about}>
                        <div className={styles.about_left}>
                            <Title
                                title="What is"
                                subTitle="Freelancer Hub?"
                                titleColor="var(--primary_blue)"
                                subTitleColor="var(--primary_blue)"
                            />
                            <h5>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            </h5>
                        </div>

                        <div className={styles.about_right}>
                            <img src="../../about.webp" alt="" />
                        </div>
                    </div>
                    <div className={styles.our_goal}
                        style={{
                            background: "url('./line2.svg')",
                        }}
                    >
                        <Title
                            title="What is our"
                            subTitle="Goal"
                            titleColor="var(--primary_blue)"
                            subTitleColor="var(--primary_blue)"
                        />
                        <div className={styles.our_goal_desc}>
                            <h5>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            </h5>
                            <img src="../../goal_image.webp" alt="" />
                            <h5>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                            </h5>
                        </div>
                    </div>
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
                </div>
                <div className={styles.contact_container}>
                    <div className={styles.contact_wrapper}>
                        <div className={styles.input}>
                            <h2>Contact Us</h2>
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Your Email' />
                            <input type="text" placeholder='Message' />
                            <button className='button_dark'>
                                <h5>Send</h5>
                            </button>
                        </div>
                        <div className={styles.contact_image}>
                            <img src="../../contact.webp" className={styles.image_new} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About