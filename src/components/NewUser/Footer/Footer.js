import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <div className='container'>
                <div className={`${styles.wrapper}`}>
                    <div className={styles.title}>
                        <h2 className={styles.hustle}>
                        Freelancer Hub.
                        </h2>
                        <Link to="/">
                            <h4>
                                Home
                            </h4>
                        </Link>
                        <Link to="/explore-jobs">
                            <h4>
                                Explore Jobs
                            </h4>
                        </Link>
                        <Link to="/explore-talents">
                            <h4>
                                Explore Talents
                            </h4>
                        </Link>
                        <Link to="/about-us">
                            <h4>
                                About Us
                            </h4>
                        </Link>
                    </div>
                    <div className={styles.social_icons}>
                        <Link to="/">
                            <img src="../../Facebook.svg" alt="Facebook" />
                        </Link>
                        <Link to="/">
                            <img src="../../Instagram.svg" alt="Instagram" />
                        </Link>
                        <Link to="/">
                            <img src="../../Twiiter.svg" alt="Twitter" />
                        </Link>
                    </div>
                    <div className={styles.links}>
                        <Link to="/">
                            <h5>
                                Contact Us
                            </h5>
                        </Link>
                        <Link to="/">
                            <h5>
                                Support
                            </h5>
                        </Link>
                        <Link to="/">
                            <h5>
                                FAQ'S
                            </h5>
                        </Link>
                        <Link to="/">
                            <h5>
                                Privacy Policy
                            </h5>
                        </Link>
                        <Link to="/">
                            <h5>
                                Help
                            </h5>
                        </Link>
                    </div>
                    <div className={styles.copyRight}>
                        <p>
                            Copyright © Beiersdorf 2022
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer