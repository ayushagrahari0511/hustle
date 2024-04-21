import React, { useState } from 'react'
import styling from './FreelancerHome.module.css'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addJobDetail } from '../../../store/searchJobSlice'
import JobCard from '../../shared/JobCard/JobCard'
import { Link } from 'react-router-dom'
import Mapbox from '../../shared/Mapbox/Mapbox'
import styles from "../../NewUser/FindJob/FindJob.module.css"

const FreelancerHome = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { jobType, jobLocation, jobTitle } = useSelector(state => state.search_job)
    const [location, setLocation] = useState("remote")
    const [place, setPlace] = useState(null)
    const [title, setTitle] = useState(null)
    const [type, setType] = useState(null)
    const [typeToggle, setTypeToggle] = useState(false)
    const [filterToggle, setFilterToggle] = useState(false);


    // Search for Job
    const handleSearch = () => {
        dispatch(addJobDetail({ type, place, title }))
        navigate(`/explore-jobs${title && `/${title}?location=${place}&type=${type}`}`)
    }

    return (
        <>
            <div className="container">
            <span className={filterToggle ? styling.backdrop : styling.backdropInactive}></span>
                <div className={`wrapper ${styles.explore}`}>
                    <div className={styles.wrapper}>
                        <div className={styles.welcome}>
                            <h2>Welcome to Freelancer Hub!</h2>
                            <button className='button_dark'>
                                <img src="../../location_filled.svg" alt="" />
                                Find Nearby Jobs
                            </button>
                        </div>
                        <div className={styles.input_box}>
                            <div className={styles.type}>
                                <div className={styles.dropDown} onClick={() => setTypeToggle(true)}>
                                    <p>
                                        {type ? type : jobType || "Type"}
                                    </p>
                                    <img src={type ? "../../circle_fill.svg" : "../../rightArrow.svg"} alt="" />
                                </div>
                                <div className={typeToggle ? `${styles.dropDown_menu} ${styles.active}` : styles.dropDown_menu}>
                                    <div className={styles.dropDown_list}
                                        onClick={() => {
                                            setType("Domicial")
                                            setTypeToggle(false)
                                        }}>
                                        <p>
                                            Domicial
                                        </p>
                                        <img src={type === "Domicial" ? "../../circle_fill.svg" : "../../circle_blank.svg"} alt="" />
                                    </div>
                                    <div className={styles.dropDown_list}
                                        onClick={() => {
                                            setType("Local")
                                            setTypeToggle(false)
                                        }}>
                                        <p>
                                            Local
                                        </p>
                                        <img src={type === "Local" ? "../../circle_fill.svg" : "../../circle_blank.svg"} alt="" />
                                    </div>

                                </div>
                            </div>
                            <div className={styles.input_line}></div>
                            <div className={styles.location}>
                                <img src="../../location.svg" alt="" />
                                <input type="text" placeholder='Location' onChange={(e) => setPlace(e.target.value)} value={place} />
                            </div>
                            <div className={styles.input_line}></div>
                            <div className={styles.category}>
                                <input type="text" placeholder='Software Engineer' onChange={(e) => setTitle(e.target.value)} value={title} />
                            </div>
                            <button className={`button_dark`} onClick={handleSearch}>
                                <img src="../../search.svg" alt="" />
                                <h5>Search</h5>
                            </button>
                        </div>
                        {
                            location === "local" ? <Mapbox />
                                :
                                <></>
                        }
                        <div className={styles.job_location}>
                            <div className={styles.name}>
                                <h3 className={location === "remote" ? styles.active : ""} onClick={() => setLocation("remote")}>
                                    Remote Jobs
                                </h3>
                                <h3 className={location === "local" ? styles.active : ""} onClick={() => setLocation("local")}>
                                    Local Jobs
                                </h3>
                            </div>
                            <div className={styles.line}>
                                <div>
                                    <span className={location === "remote" ? styles.line_active : ""}></span>
                                </div>
                                <div>
                                    <span className={location === "local" ? styles.line_active : ""}></span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.job_container}>
                            <div className={styling.available}>
                                <h3>Available Jobs</h3>
                                <button className='button_light' onClick={() => setFilterToggle(true)}>
                                    <img src="../../filter.svg" alt="" />
                                    Filter
                                </button>
                                <form className={filterToggle ? styling.form : styling.inactive}>
                                    <img src="../../icon_cancel.svg" onClick={() => setFilterToggle(false)} alt="" />
                                    <div className={styling.formList}>
                                        <h5>Type</h5>
                                        <div>
                                            <label htmlFor="both">Both</label>
                                            <input id="both" type="radio" name="type" value="both" />
                                        </div>
                                        <div>
                                            <label htmlFor="remote">Remote</label>
                                            <input id="remote" type="radio" name="type" value="remote" />
                                        </div>
                                        <div>
                                            <label htmlFor='local'>Local</label>
                                            <input id="local" type="radio" name="type" value="local" />
                                        </div>
                                    </div>
                                    <div className={styling.formList}>
                                        <h5>Duration</h5>
                                        <div>
                                            <label htmlFor="hour1">0-1 hour</label>
                                            <input id="hour1" type="radio" name="duration" value="0-1 hour" />
                                        </div>
                                        <div>
                                            <label htmlFor="hour2">1-2 hour</label>
                                            <input id="hour2" type="radio" name="duration" value="1-2 hour" />
                                        </div>
                                        <div>
                                            <label htmlFor='hour3'>3+ hour</label>
                                            <input id="hour3" type="radio" name="duration" value="3+ hour" />
                                        </div>
                                    </div>
                                    <div className={styling.formList}>
                                        <h5>Experience</h5>
                                        <div>
                                            <label htmlFor="01">Level 1</label>
                                            <input id="01" type="radio" name="experience" value="1"  />
                                        </div>
                                        <div>
                                            <label htmlFor="02">Level 2</label>
                                            <input id="02" type="radio" name="experience" value="2" />
                                        </div>
                                        <div>
                                            <label htmlFor='03'>Level 3</label>
                                            <input id="03" type="radio" name="experience" value="3" />
                                        </div>
                                    </div>
                                    <div className={styling.formList}>
                                        <h5>Budget</h5>
                                        <div>
                                            <label htmlFor="zero">$0-$50</label>
                                            <input id="zeor" type="radio" name="budget" value="0" />
                                        </div>
                                        <div>
                                            <label htmlFor="fifty">$50-$500</label>
                                            <input id="fifty" type="radio" name="budget" value="50" />
                                        </div>
                                        <div>
                                            <label htmlFor='fivehundred'>$500</label>
                                            <input id="fivehundred" type="radio" name="budget" value="500" />
                                        </div>
                                    </div>
                                    <button className='button_dark'>
                                        Apply
                                    </button>
                                </form>
                            </div>
                            <div className={styles.available_job}>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard
                                        detail="/explore-jobs/job-detail/dk43922839fjf9"
                                        apply="/job/kjdf8348/submit-application" />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard
                                        detail="/explore-jobs/job-detail/dk43922839fjf9"
                                        apply="/job/kjdf8348/submit-application" />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard
                                        detail="/explore-jobs/job-detail/dk43922839fjf9"
                                        apply="/job/kjdf8348/submit-application" />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard
                                        detail="/explore-jobs/job-detail/dk43922839fjf9"
                                        apply="/job/kjdf8348/submit-application" />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard
                                        detail="/explore-jobs/job-detail/dk43922839fjf9"
                                        apply="/job/kjdf8348/submit-application" />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard
                                        detail="/explore-jobs/job-detail/dk43922839fjf9"
                                        apply="/job/kjdf8348/submit-application" />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard
                                        detail="/explore-jobs/job-detail/dk43922839fjf9"
                                        apply="/job/kjdf8348/submit-application" />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard
                                        detail="/explore-jobs/job-detail/dk43922839fjf9"
                                        apply="/job/kjdf8348/submit-application" />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard
                                        detail="/explore-jobs/job-detail/dk43922839fjf9"
                                        apply="/job/kjdf8348/submit-application" />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard
                                        detail="/explore-jobs/job-detail/dk43922839fjf9"
                                        apply="/job/kjdf8348/submit-application" />
                                </Link>

                            </div>
                            <button className={`button_light ${styles.loadMore}`}>
                                Load More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreelancerHome