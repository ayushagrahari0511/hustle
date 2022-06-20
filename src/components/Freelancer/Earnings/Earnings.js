import React from 'react'
import styles from './Earnings.module.css'

const Earnings = () => {
    return (
        <div className='container'>
            <div className={`wrapper ${styles.wrapper}`}>
                <div className={styles.balance}>
                    <div className={styles.totalBalance}>
                        <h3>
                            Total Balance
                        </h3>
                        <h2>
                            1552.00 USD
                        </h2>
                    </div>
                    <div className={styles.currency}>
                        <h3>
                            Currency:
                        </h3>
                        <div className={styles.currencyBtn}>
                            <h4>USD</h4>
                        </div>
                    </div>
                    <div className={styles.withdraw}>
                        <button className='button_dark'>
                            Withdraw
                        </button>
                    </div>
                </div>
                <h4>Earning History</h4>
                <div className={styles.history}>
                    <div className={styles.historyCard}>
                        <div className={styles.jobTitle}>
                            <h4>
                                Title of the job.
                            </h4>
                        </div>
                        <div className={styles.jobType}>
                            <h5>Type:</h5>
                            <h4>Remote</h4>
                        </div>
                        <div className={styles.jobType}>
                            <h5>Balance:</h5>
                            <h4>$150.00</h4>
                        </div>
                    </div>
                    <div className={styles.historyCard}>
                        <div className={styles.jobTitle}>
                            <h4>
                                Title of the job.
                            </h4>
                        </div>
                        <div className={styles.jobType}>
                            <h5>Type:</h5>
                            <h4>Remote</h4>
                        </div>
                        <div className={styles.jobType}>
                            <h5>Balance:</h5>
                            <h4>$150.00</h4>
                        </div>
                    </div>
                    <div className={styles.historyCard}>
                        <div className={styles.jobTitle}>
                            <h4>
                                Title of the job.
                            </h4>
                        </div>
                        <div className={styles.jobType}>
                            <h5>Type:</h5>
                            <h4>Remote</h4>
                        </div>
                        <div className={styles.jobType}>
                            <h5>Balance:</h5>
                            <h4>$150.00</h4>
                        </div>
                    </div>
                    <div className={styles.historyCard}>
                        <div className={styles.jobTitle}>
                            <h4>
                                Title of the job.
                            </h4>
                        </div>
                        <div className={styles.jobType}>
                            <h5>Type:</h5>
                            <h4>Remote</h4>
                        </div>
                        <div className={styles.jobType}>
                            <h5>Balance:</h5>
                            <h4>$150.00</h4>
                        </div>
                    </div>
                    <div className={styles.historyCard}>
                        <div className={styles.jobTitle}>
                            <h4>
                                Title of the job.
                            </h4>
                        </div>
                        <div className={styles.jobType}>
                            <h5>Type:</h5>
                            <h4>Remote</h4>
                        </div>
                        <div className={styles.jobType}>
                            <h5>Balance:</h5>
                            <h4>$150.00</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Earnings