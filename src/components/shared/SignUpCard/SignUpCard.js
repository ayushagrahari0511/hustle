import React from 'react'
import styles from './SignUpCard.module.css'

const SignUpCard = () => {
    return (
        <>
            <div className='container'>
                <div className={`wrapper ${styles.signup} `}>
                    <div className={styles.desc}>
                        <h2>
                            Sign Up to apply
                            for any job.
                        </h2>
                        <h5>
                            Lorem Ipsum is simply dummy text of
                            the printing and typesetting industry.
                            Lorem Ipsum.
                        </h5>
                        <button className='button_dark'>
                            <h5>
                                Sign Up
                            </h5>
                        </button>
                    </div>
                    <div className={styles.img}>
                        <img src="../../SignCardImage.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpCard