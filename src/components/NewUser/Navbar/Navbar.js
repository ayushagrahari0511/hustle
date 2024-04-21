import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [link_add, setLink_add] = useState("home")

  // State for button styling
  const [lightPressed, setLightPressed] = useState(false)
  const [darkPressed, setDarkPressed] = useState(false)

  useEffect(() => {
    const nav = location.pathname.split('/')[1]
    console.log(nav)
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
                  setToggleMenu(false)}}
              >
                <Link to="/" >
                  <h6>
                    Home
                  </h6>
                </Link>
              </li>
              <li 
              className={link_add === "explore-jobs" ? styles.active : ``}
              onClick={() => {
                setToggleMenu(false)}}>
                <Link to="/explore-jobs">
                  <h6>
                    Explore Jobs
                  </h6>
                </Link>
              </li>
              <li 
              className={link_add === "explore-talents" ? styles.active : ``}
              onClick={() => {
                setToggleMenu(false)}}>
                <Link to="/explore-talents">
                  <h6>
                    Explore Talents
                  </h6>
                </Link>
              </li>
              <li 
              className={link_add === "about-us" ? styles.active : ``}
              onClick={() => {
                setToggleMenu(false)}}>
                <Link to="/about-us">
                  <h6>
                    About us
                  </h6>
                </Link>
              </li>
            </div>
            <div className={styles.buttons}>
              <button
                className={lightPressed ? `button_light pressed` : `button_light`}
                onClick={() => setLightPressed(!lightPressed)}
              >
                <h5>
                  Log In
                </h5>
              </button>
              <button
                className={darkPressed ? `button_dark pressed` : `button_dark`}
                onClick={() => setDarkPressed(!darkPressed)}
              >
                <h5>
                  Sign Up
                </h5>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar