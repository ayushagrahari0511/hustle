import React, { useState, useEffect } from 'react'
import styles from '../../Client/Navbar/Navbar.module.css'
import { Link, useLocation } from "react-router-dom"

const FreelancerNavbar = () => {
  const location = useLocation()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [link_add, setLink_add] = useState("explore-work")
  const [profile, setProfile] = useState(false)

  useEffect(() => {
    const nav = location.pathname.split('/')[1]
    if(nav) {
      setLink_add(nav)
    }
    else {
      setLink_add("explore-work")
    }
  }, [location.pathname]);


  return (
    <>
      <div className={`container ${styles.container}`}>
        <div className={`wrapper ${styles.navbar}`}>
          <div className={styles.logo}>
            <h3>
            Freelancer Hub <span></span>
            </h3>
          </div>
          <img src="../../menu.svg"
            className={styles.menu}
            alt=""
            onClick={() => setToggleMenu(true)} />
          <div className={toggleMenu ? `${styles.nav_right} ${styles.toggle}` : styles.nav_right}>
            <img
              src="../../icon_cancel.svg"
              alt="cancel"
              onClick={() => setToggleMenu(false)} />
            <div className={styles.links}>
              <li
                className={link_add === "explore-work" ? styles.active : ``}
                onClick={() => {
                  setToggleMenu(false)
                }}
              >
                <Link to="/" >
                  <h6>
                    Explore work
                  </h6>
                </Link>
              </li>
              <li
                className={link_add === "your-jobs" ? styles.active : ``}
                onClick={() => {
                  setToggleMenu(false)
                }}>
                <Link to="/your-jobs">
                  <h6>
                    Your Jobs
                  </h6>
                </Link>
              </li>
              <li
                className={link_add === "earnings" ? styles.active : ``}
                onClick={() => {
                  setToggleMenu(false)
                }}>
                <Link to="/earnings">
                  <h6>
                    Your Earnings
                  </h6>
                </Link>
              </li>
              <li
                className={link_add === "inbox" ? styles.active : ``}
                onClick={() => {
                  setToggleMenu(false)
                }}>
                <Link to="/inbox">
                  <h6>
                    Inbox
                  </h6>
                </Link>
              </li>
            </div>
            <div className={styles.buttons}>
              <div className={styles.buttons}>
                <img src="../../notification.svg" alt="notificatioin" />
                <img src="../../profile.png" alt="profile"
                  onClick={() => setProfile(true)}
                />
              </div>
              <div
                className={profile ? `${styles.profile} ${styles.active}` : styles.profile}>
                <Link to={`/me`} onClick={() => {
                  setProfile(false)
                  setToggleMenu(false)
                  }}>
                  <div className={styles.profile_info}>
                    <img src="../../profile.png" alt="" />
                    <div>
                      <h5>
                        Frelancer Name
                      </h5>
                      <h6>
                        Title
                      </h6>
                    </div>
                  </div>
                </Link>
                <div className={styles.profile_list}>
                  <img src="../../setting.svg" alt="" />
                  <p>
                    Settings
                  </p>
                </div>
                <div className={styles.profile_list}>
                  <img src="../../help.svg" alt="" />
                  <p>
                    Help
                  </p>
                </div>
                <div className={styles.profile_list}>
                  <img src="../../logout.svg" alt="" />
                  <p>
                    Log out
                  </p>
                </div>
                <button>
                  <h5>Switch Mode</h5>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={profile ? `${styles.profile_hidd} ${styles.active}` : styles.profile_hidd}
          onClick={() => setProfile(false)}
        >

        </div>
      </div>
    </>
  )
}

export default FreelancerNavbar