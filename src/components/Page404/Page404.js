import React from 'react'
import styles from './Page404.module.css'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}
        style={{
          background: "url(../../../Path2.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "60rem",
          backgroundPosition: "bottom 0 right 0"
        }}
      >
        <img src="../../404.svg" alt="" />
        <h2>Oops, This Page Could Not Be Found</h2>
        <h5>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</h5>
        <Link to={`/`}>
          <img src="../../../leftArrow.svg" alt="" />
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default Page404