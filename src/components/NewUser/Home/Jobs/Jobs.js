import React, { useState } from 'react'
import styles from './Jobs.module.css'
import Title from '../../../shared/Title/Title'
import SkillCard from '../../../shared/SkillCard/SkillCard'
import {Link} from "react-router-dom"

const Jobs = () => {
    const [location, setLocation] = useState("remote")
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <Title
                        title="Explore jobs by our popular"
                        titleColor="var(--primary_yellow)"
                        subTitleColor="var(--primary_blue)"
                        subTitle="category"
                    />
                    <h5>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum.
                    </h5>
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
                <div className={styles.skill}>
                    <Link to={`/explore-jobs/${`Design-&-Creative`} ${location && `?location=${location}`}`}>
                        <SkillCard title="Design & Creative" totalJobs="120+ jobs available" />
                    </Link>
                    <Link to={`/explore-jobs/${`Design-&-Creative`} ${location && `?location=${location}`}`}>
                        <SkillCard title="Design & Creative" totalJobs="120+ jobs available" />
                    </Link>
                    <Link to={`/explore-jobs/${`Design-&-Creative`} ${location && `?location=${location}`}`}>
                        <SkillCard title="Design & Creative" totalJobs="120+ jobs available" />
                    </Link>
                    <Link to={`/explore-jobs/${`Design-&-Creative`} ${location && `?location=${location}`}`}>
                        <SkillCard title="Design & Creative" totalJobs="120+ jobs available" />
                    </Link>
                    <Link to={`/explore-jobs/${`Design-&-Creative`} ${location && `?location=${location}`}`}>
                        <SkillCard title="Design & Creative" totalJobs="120+ jobs available" />
                    </Link>
                    <Link to={`/explore-jobs/${`Design-&-Creative`} ${location && `?location=${location}`}`}>
                        <SkillCard title="Design & Creative" totalJobs="120+ jobs available" />
                    </Link>
                    <Link to={`/explore-jobs/${`Design-&-Creative`} ${location && `?location=${location}`}`}>
                        <SkillCard title="Design & Creative" totalJobs="120+ jobs available" />
                    </Link>
                    <Link to={`/explore-jobs/${`Design-&-Creative`} ${location && `?location=${location}`}`}>
                        <SkillCard title="Design & Creative" totalJobs="120+ jobs available" />
                    </Link>
                    <Link to={`/explore-jobs/${`Design-&-Creative`} ${location && `?location=${location}`}`}>
                        <SkillCard title="Design & Creative" totalJobs="120+ jobs available" />
                    </Link>

                </div>
            </div>
        </>
    )
}

export default Jobs