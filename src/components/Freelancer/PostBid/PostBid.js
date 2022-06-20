import React from 'react'
import styles from '../../shared/WorkCard/WorkCard.module.css'
import styling from './PostBid.module.css'
import { Link } from 'react-router-dom'

const PostBid = () => {
    return (
        <>
            <div className='container'>
                <div className={`wrapper ${styling.bidwrapper}`}>
                    <div className={styles.top_navigation}>
                        <Link to={`/`}>
                            Explore Job
                            <img src="../../rightArrow.svg" alt="" />
                        </Link>
                        Enter Application
                    </div>
                    <h2>Enter Your Application</h2>
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
                        </div>
                        <div className={styling.coverLetter}>
                            <h3>
                                Cover Letter
                            </h3>
                            <textarea name="coverLetter"></textarea>
                        </div>
                        <div className={styling.yourBid}>
                            <h3>
                                Your Bid
                            </h3>
                            <h4>
                                Project budget: $250 USD
                            </h4>
                            <div className={styling.bidList}>
                                <div className={styling.budget}>
                                    <label htmlFor="your-bid">
                                        Your bid: $
                                    </label>
                                    <input type="number" id='your-bid' />
                                    <label htmlFor="your-bid">
                                        USD
                                    </label>
                                </div>
                                <div className={styling.budget}>
                                    <label htmlFor="service-fee">
                                        Service fee: $
                                    </label>
                                    <input type="number" id='service-fee' />
                                    <label htmlFor="service-fee">
                                        USD
                                    </label>
                                </div>
                                <div className={styling.budget}>
                                    <label htmlFor="youGet">
                                        You get: $
                                    </label>
                                    <input type="number" id='youGet' />
                                    <label htmlFor="youGet">
                                        USD
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={styling.list}>
                            <h3>
                                Duration
                            </h3>
                            <div className={styling.box}>
                                <select name="duration">
                                    <option value="Less than a day">Less than a day</option>
                                    <option value="Less than 1 month">Less than 1 month</option>
                                    <option value="Less than 6 month">Less than 6 month</option>
                                </select>
                            </div>
                        </div>
                        <Link to="/" className={styles.apply}>
                            <h4>Apply</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostBid