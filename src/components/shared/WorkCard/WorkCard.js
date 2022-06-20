import React from 'react'
import styles from './WorkCard.module.css'
import { Link } from 'react-router-dom'

const WorkCard = ({URL}) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.title_wrapper}>
                    <h3>Title of work</h3>
                    <div className={styles.save}>
                        <h5>Local</h5>
                        <img src="../../save.svg" alt="" />
                    </div>
                </div>
                <div className={styles.location}>
                    <img src="../../location_dark.svg" alt="" />
                    <h4>
                        London, Uk Posted 5 minute ago
                    </h4>
                </div>
                <h4 className={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                </h4>
                <div className={styles.details}>
                    <div>
                        <h4>Category</h4>
                        <h5>Design & Creative</h5>
                    </div>
                    <div>
                        <h4>Budget</h4>
                        <h5>$ price</h5>
                    </div>
                    <div>
                        <h4>Experience</h4>
                        <h5>Experience Level</h5>
                    </div>
                    <div>
                        <h4>Period</h4>
                        <h5>4-5 hours</h5>
                    </div>
                </div>
                <div className={styles.application}>
                    <h4>Application- 20+</h4>
                    <div className={styles.payment_verify}>
                        <img src="../../correct.svg" alt="payment verified" />
                        <h4>Payment verified</h4>
                    </div>
                </div>
                <div className={styles.skills}>
                    <h4>Skills</h4>
                    <div>
                        <h5>
                            skill tag
                        </h5>
                        <h5>
                            skill tag
                        </h5>
                        <h5>
                            skill tag
                        </h5>
                        <h5>
                            skill tag
                        </h5>
                        <h5>
                            skill tag
                        </h5>
                        
                    </div>
                </div>
                <div className={styles.application_detail}>
                    <div className={styles.requirements}>
                        <h4>
                            Requirements
                        </h4>
                        <div>
                            <div className={styles.requirements_left}>
                                <p>English Level:</p>
                                <p>Location:</p>
                                <p>Language:</p>
                                <p>Requirement:</p>
                            </div>
                            <div className={styles.requirements_right}>
                                <p>Answer</p>
                                <p>Answer</p>
                                <p>Answer</p>
                                <p>Answer</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.activity}>
                        <h4>
                            Activity on the job
                        </h4>
                        <div>
                            <div className={styles.requirements_left}>
                                <p>Applications:</p>
                                <p>Hired:</p>
                                <p>Interviewing:</p>
                                <p>Invites:</p>
                            </div>
                            <div className={styles.requirements_right}>
                                <p>Answer</p>
                                <p>Answer</p>
                                <p>Answer</p>
                                <p>Answer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.about_client}>
                    <h4>About the client</h4>
                    <div className={styles.client_profile}>
                        <img src="../../about_client.png" alt="" />
                        <div className={styles.client_info}>
                            <h4>Client's Name</h4>
                            <h6>Location</h6>
                            <div className={styles.ratings}>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={URL} className={styles.apply}>
                    <h4>Apply</h4>
                </Link>
            </div>
        </>
    )
}

export default WorkCard