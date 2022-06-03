import React from 'react'
import styles from './Title.module.css'

const Title = ({title, subTitle, titleColor, subTitleColor}) => {
    return (
        <>
            <div className={styles.title}>
                <h2 style={{
                    color: titleColor
                }}>
                    {title}
                </h2>
                <div className={styles.sub_title}>
                    <h2
                    style={{
                        color: subTitleColor
                    }}
                    >
                        {subTitle}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Title