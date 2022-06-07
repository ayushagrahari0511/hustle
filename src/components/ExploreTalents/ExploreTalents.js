import React, { useState } from 'react'
import styles from './ExploreTalents.module.css'

const ExploreTalents = () => {
  const [location, setLocation] = useState("remote")
  const [type, setType] = useState(null)
  const [typeToggle, setTypeToggle] = useState(false)

  return (
    <>
      <div className='container'>
        <div className={`${styles.wrapper} wrapper`}>
          <div className={styles.title}>
            <h2>Find freelancers for your <br />
              <span className={styles.title_yellow}>professional or domicial works.</span>
            </h2>
            <h5>
              Lorem Ipusm is simply dummy text of the printing and ty pesetting industry. Lorem Ipsum.
            </h5>
            <div className={styles.title_button}>
              <button className='button_dark'>
                <h5>Post a job</h5>
              </button>
              <button className='button_dark'>
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
                <img src={type ? "../circle_fill.svg" : "../rightArrow.svg"} alt="" />
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
                  <img src={type === "Domicial" ? "../circle_fill.svg" : "../circle_blank.svg"} alt="" />
                </div>
                <div className={styles.dropDown_list}
                  onClick={() => {
                    setType("Local")
                    setTypeToggle(false)
                  }}>
                  <p>
                    Local
                  </p>
                  <img src={type === "Local" ? "../circle_fill.svg" : "../circle_blank.svg"} alt="" />
                </div>

              </div>
            </div>
            <div className={styles.input_line}></div>
            <div className={styles.location}>
              <img src="../location.svg" alt="" />
              <input type="text" placeholder='Location' />
            </div>
            <div className={styles.input_line}></div>
            <div className={styles.category}>
              <input type="text" placeholder='Software Engineer' />
            </div>
            <button className={`button_dark`}>
              <img src="../search.svg" alt="" />
              <h5>Search</h5>
            </button>
          </div>
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
                <img src="../circle_fill.svg" alt="" />
                <h3>Post your job.</h3>
              </div>
              <div className={styles.client_feature}>
                <img src="../circle_fill.svg" alt="" />
                <h3>Browse and hire talents.</h3>
              </div>
              <div className={styles.client_feature}>
                <img src="../circle_fill.svg" alt="" />
                <h3>Pay them safely.</h3>
              </div>

              <button className='button_dark'>
                <h5>
                  Sign Up
                </h5>
              </button>
            </div>
            <div className={styles.img}>
              <img src="../shakeHand.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExploreTalents