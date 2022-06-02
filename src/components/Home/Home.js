import React from 'react'
import styles from './Home.module.css'
import Hero from './Hero/Hero'

const Home = () => {
    return (
        <>
            <div className={`container ${styles.home}`}>
                <div className='wrapper'>
                    <Hero />
                </div>
            </div>
        </>
    )
}

export default Home