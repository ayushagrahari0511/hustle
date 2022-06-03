import React from 'react'
import styles from './Home.module.css'
import Hero from './Hero/Hero'
import Feature from './Feature/Feature'

const Home = () => {
    return (
        <>
            <div className={`container ${styles.home}`}>
                <div className='wrapper'>
                    <Hero />
                    <Feature/>
                </div>
            </div>
        </>
    )
}

export default Home