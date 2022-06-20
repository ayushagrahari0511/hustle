import React from 'react'
import styles from '../../NewUser/FreelancerProfile/FreelancerProfile.module.css'
import { Link } from 'react-router-dom'
import FreelanceCard from '../../shared/FreelanceCard.js/FreelanceCard'
import ReviewCard from '../../shared/ReviewCard/ReviewCard'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Profile = () => {
    return (
        <>
            <div className={`container ${styles.container}`}>
                <div className={`wrapper ${styles.wrapper}`}>
                    <h3>Your Profile</h3>
                    <h2>Freelancer's Name</h2>
                    <div className={styles.profile_container}>
                        <div className={styles.profile_wrapper}>
                            <div className={styles.profile}>
                                <img src="../../profile10.png" alt="" />
                                <div className={styles.title}>
                                    <h3>Freelancer's Name</h3>
                                    <h3>Title</h3>
                                    <div>
                                        <img src="../../location.svg" alt="" />
                                        <h5>London, Uk</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.message}>
                                <Link to="/">
                                    <img src="../../edit_simple.svg" alt="" />
                                    <h6>Edit</h6>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.intro}>
                            <h3>Introduction</h3>
                            <h5>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </h5>
                        </div>
                        <div className={styles.work_history}>
                            <h3>Work History</h3>
                            <h5>24 jobs finished</h5>
                        </div>
                        <div className={styles.skills}>
                            <h3>Skills</h3>
                            <div>
                                <h4>Desinger</h4>
                                <h4>UI/UX</h4>
                                <h4>Developer</h4>
                                <h4>Figma</h4>
                            </div>
                        </div>
                        <div className={styles.portfolio}>
                            <h3>Portfolio</h3>
                            <div>
                                <div>
                                    <img src="../../sneaker.png" alt="" />
                                    <h5>Title of portfolio</h5>
                                </div>
                            </div>
                        </div>
                        <div className={styles.reviews}>
                            <h3>Reviews <span>(14 Reviews)</span></h3>
                            <div>
                                <Swiper
                                    centeredSlidesBounds={true}
                                    createElements={true}
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className={styles.swiper}
                                >
                                    <SwiperSlide className={styles.portImages}>
                                        <ReviewCard />
                                    </SwiperSlide>
                                    <SwiperSlide className={styles.portImages}>
                                        <ReviewCard />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile