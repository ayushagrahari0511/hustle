import React from 'react'
import styles from './Home.module.css'
import Hero from './Hero/Hero'
import Feature from './Feature/Feature'
import Jobs from './Jobs/Jobs'
import SignUpCard from '../../shared/SignUpCard/SignUpCard'

const Home = () => {
    return (
        <>
            <div className={`container ${styles.home}`}>
                <div className='wrapper'>
                    <Hero />
                    <Feature/>
                    <Jobs/>
                    <SignUpCard/>
                </div>
            </div>
        </>
    )
}

export default Home