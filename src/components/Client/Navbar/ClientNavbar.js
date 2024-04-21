import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { Link, useLocation } from "react-router-dom"

const ClientNavbar = () => {
  const location = useLocation()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [link_add, setLink_add] = useState("home")
  const [profile, setProfile] = useState(false)

  useEffect(() => {
    const nav = location.pathname.split('/')[1]
    if(nav) {
      setLink_add(nav)
    }
    else {
      setLink_add("home")
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
                className={link_add === "home" ? styles.active : ``}
                onClick={() => {
                  setToggleMenu(false)
                }}
              >
                <Link to="/" >
                  <h6>
                    Home
                  </h6>
                </Link>
              </li>
              <li
                className={link_add === "explore-talents" ? styles.active : ``}
                onClick={() => {
                  setToggleMenu(false)
                }}>
                <Link to="/explore-talents">
                  <h6>
                    Explore Talents
                  </h6>
                </Link>
              </li>
              <li
                className={link_add === "payments" ? styles.active : ``}
                onClick={() => {
                  setToggleMenu(false)
                }}>
                <Link to="/payments">
                  <h6>
                    Your Payments
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
                        Client's Name
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

export default ClientNavbar