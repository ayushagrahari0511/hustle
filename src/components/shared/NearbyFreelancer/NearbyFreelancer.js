import React from 'react'
import styles from '../ExploreTalents/ExploreTalents.module.css'
import FreelanceCard from '../FreelanceCard.js/FreelanceCard'
import Mapbox from '../Mapbox/Mapbox'
import { Link } from 'react-router-dom'

const NearbyFreelancer = () => {
    return (
        <div className={`${styles.container} container`}>
            <div className={`${styles.wrapper} wrapper`}>
                <div className={styles.top_navigation}>
                    <Link to={`/explore-talents`}>
                        Explore Talents
                        <img src="../../rightArrow.svg" alt="" />
                    </Link>
                    <Link to={`/explore-talents/nearby-freelancer`}>
                        Find Nearby Freelancers
                        <img src="../../rightArrow.svg" alt="" />
                    </Link>
                    Maps
                </div>
                <Mapbox />
                <h3 className={styles.looking_for}>
                    What type of job you are looking for?
                </h3>
                <button className={`button_light ${styles.looking_button}`}>
                    <h3>
                        UI Designer
                    </h3>
                </button>
                <div className={styles.freelancer}>
                    <div className={styles.arrow}>
                        <h5>Available Freelancers</h5>
                        <img src="../../rightArrow.svg" alt="" />
                    </div>
                    <div>
                        <Link to={`/explore-talents/profile/dkf393dlfk`}>
                            <FreelanceCard img={`../../profile1.png`} />
                        </Link>
                        <Link to={`/explore-talents/profile/dkf393dlfk`}>
                            <FreelanceCard img={`../../profile2.png`} />
                        </Link>
                        <Link to={`/explore-talents/profile/dkf393dlfk`}>
                            <FreelanceCard img={`../../profile3.png`} />
                        </Link>
                        <Link to={`/explore-talents/profile/dkf393dlfk`}>
                            <FreelanceCard img={`../../profile4.png`} />
                        </Link>

                    </div>
                </div>
                <div className={styles.freelancer}>
                    <div>
                        <h5>UI Designer</h5>
                    </div>
                    <div>
                        <Link to={`/explore-talents/profile/dkf393dlfk`}>
                            <FreelanceCard img={`../../profile5.png`} />
                        </Link>
                        <Link to={`/explore-talents/profile/dkf393dlfk`}>
                            <FreelanceCard img={`../../profile6.png`} />
                        </Link>
                        <Link to={`/explore-talents/profile/dkf393dlfk`}>
                            <FreelanceCard img={`../../profile7.png`} />
                        </Link>
                        <Link to={`/explore-talents/profile/dkf393dlfk`}>
                            <FreelanceCard img={`../../profile8.png`} />
                        </Link>
                    </div>
                </div>
                <button className={styles.load_more}>
                    Load More
                </button>
            </div>
        </div>
    )
}

export default NearbyFreelancer