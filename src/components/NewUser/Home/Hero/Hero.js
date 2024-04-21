import React from 'react'
import styles from './Hero.module.css'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.hero1}>
                    <div className={styles.hero1_left}>
                        <h2>
                            Enter a New World <br /> of <span className={styles.freelancing}>Freelancing </span>
                            with <span className={styles.hustle}>Freelancer Hub.</span>
                        </h2>
                        <h5>
                            Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                            Lorem Ipsum.
                        </h5>
                    </div>
                    <div className={styles.hero1_right}>
                        <img src="../../Frame.svg" alt="" />
                    </div>
                </div>
                <div className={styles.hero2}>
                    <button className={`button_dark ${styles.dark}`}
                        onClick={() => navigate('/explore-talents')}
                    >
                        <img src="../../profile.svg" alt="" />
                        <h3>
                            Explore Talents
                        </h3>
                    </button>
                    <button className={`button_light ${styles.light}`}
                        onClick={() => navigate('/explore-jobs')}
                    >
                        <img src="../../jobs.svg" alt="" />
                        <h3>
                            Explore Jobs
                        </h3>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Hero