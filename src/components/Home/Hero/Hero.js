import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <>
            <div className={styles.hero}>
                <div className={styles.hero1}>
                    <div className={styles.hero1_left}>
                        <h2>
                            Enter a New World <br /> of <span className={styles.freelancing}>Freelancing </span>
                            with <span className={styles.hustle}>Hustle.</span>
                        </h2>
                        <h5>
                            Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                            Lorem Ipsum.
                        </h5>
                    </div>
                    <div className={styles.hero1_right}>
                        <img src="../Frame.svg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero