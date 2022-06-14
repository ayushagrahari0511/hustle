import React, { useState } from 'react'
import styles from "./FindJob.module.css"
import SignUpCard from '../../shared/SignUpCard/SignUpCard'
import SkillCard from '../../shared/SkillCard/SkillCard'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addJobDetail } from '../../../store/searchJobSlice'
import JobCard from '../../shared/JobCard/JobCard'
import { Link } from 'react-router-dom'
import Mapbox from '../../shared/Mapbox/Mapbox'

const FindJob = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { jobType, jobLocation, jobTitle } = useSelector(state => state.search_job)
    const [location, setLocation] = useState("remote")
    const [place, setPlace] = useState(null)
    const [title, setTitle] = useState(null)
    const [type, setType] = useState(null)
    const [typeToggle, setTypeToggle] = useState(false)


    // Search for Job
    const handleSearch = () => {
        dispatch(addJobDetail({ type, place, title }))
        navigate(`/explore-jobs${title && `/${title}?location=${place}&type=${type}`}`)
    }

    return (
        <>
            <div className="container">
                <div className={`wrapper ${styles.explore}`}>
                    <div className={styles.wrapper}>
                        <div className={styles.title}>
                            <h2>
                                Become a <span className={styles.hustle}>Hustler </span> and
                                work from your home or physically.
                            </h2>
                            <h5>
                                Lorem Ipsum is simply dummy text of the printing and ty pesetting industry.Lorem Ipsum.
                            </h5>
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
                        <Mapbox/>
                        <div className={styles.job_container}>
                            <h3>
                                What type of job you are looking for?
                            </h3>
                            <button className='button_light'>
                                <h3>
                                    UI Designer
                                </h3>
                            </button>
                            <h3>Available Jobs</h3>
                            <div className={styles.available_job}>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                                <Link to='/explore-jobs/job-detail/dk43922839fjf9'>
                                    <JobCard />
                                </Link>
                            </div>
                            <button className={`button_light ${styles.loadMore}`}>
                                Load More
                            </button>
                        </div>
                    </div>
                    <SignUpCard />
                </div>
            </div>
        </>
    )
}

export default FindJob