import React, { useState } from 'react'
import styles from './ExploreTalents.module.css'
import FreelanceCard from '../FreelanceCard.js/FreelanceCard'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const ExploreTalents = () => {
  const navigate = useNavigate()
  const [location, setLocation] = useState("remote")
  const [type, setType] = useState(null)
  const [typeToggle, setTypeToggle] = useState(false)

  return (
    <>
      <div className={`${styles.container} container`}>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={styles.title}>
            <h2>Find freelancers for your <br />
              <span className={styles.title_yellow}>professional or domicial works.</span>
            </h2>
            <h5>
              Lorem Ipusm is simply dummy text of the printing and ty pesetting industry. Lorem Ipsum.
            </h5>
            <div className={styles.title_button}>
              <button className='button_dark' onClick={() => navigate('/post-job')}>
                <h5>Post a job</h5>
                <img src="../../edit.svg" alt="" />
              </button>
              <button className='button_dark' onClick={() => navigate('/explore-talents/nearby-freelancer')}>
                <img src="../../location_filled.svg" alt="" />
                <h5>Find Nearby Freelancers</h5>
              </button>
            </div>
          </div>
          <div className={styles.input_box}>
            <div className={styles.type}>
              <div className={styles.dropDown} onClick={() => setTypeToggle(true)}>
                <p>
                  {type ? type : "Type"}
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
              <input type="text" placeholder='Location' />
            </div>
            <div className={styles.input_line}></div>
            <div className={styles.category}>
              <input type="text" placeholder='Software Engineer' />
            </div>
            <button className={`button_dark`}>
              <img src="../../search.svg" alt="" />
              <h5>Search</h5>
            </button>
          </div>
          <div className={styles.freelancer}>
            <div className={styles.arrow}>
              <h5>Category of freelancer</h5>
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
            <div className={styles.arrow}>
              <h5>IT & Development</h5>
              <img src="../../rightArrow.svg" alt="" />
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
          <div className={styles.freelancer}>
            <div className={styles.arrow}>
              <h5>Nearby Freelacers</h5>
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

          <button className={styles.load_more}>
            Load More
          </button>

          <div className={styles.bottomContainer}>
            <div className={styles.desc}>
              <h2>
                Sign Up to hire <span className={styles.hustle}>Talents.</span>
              </h2>
              <h5>
                Work with freelancers who are independent and ready to work for
                your local or remote job.
              </h5>
              <div className={styles.client_feature}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.fontIcon} />
                <h3>Post your job.</h3>
              </div>
              <div className={styles.client_feature}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.fontIcon} />
                <h3>Browse and hire talents.</h3>
              </div>
              <div className={styles.client_feature}>
                <FontAwesomeIcon icon={faCircleCheck} className={styles.fontIcon} />
                <h3>Pay them safely.</h3>
              </div>

              <button className='button_dark'>
                <h5>
                  Sign Up
                </h5>
              </button>
            </div>
            <div className={styles.img}>
              <img src="../../shakeHand.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExploreTalents