import React, {useState} from 'react'
import styles from './ChangeUser.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { changeUser } from '../../../store/userSlice'

const ChangeUser = () => {
    // const {user, setUser} = useState("")
    const dispatch = useDispatch()

    const change_User = (user) => {
        if(user) {
            dispatch(changeUser({user}))
        }
    }

    return (
        <>
            <div className='container'>
                <div className={` wrapper ${styles.wrapper}`}>
                    <button className='button_dark' onClick={() => change_User("new")}>
                        <h3>Guest User</h3>
                    </button>
                    <button className='button_dark' onClick={() => change_User("client")}>
                        <h3>Client</h3>
                    </button>
                    <button className='button_dark' onClick={() => change_User("freelancer")}>
                        <h3>Freelancer</h3>
                    </button>
                </div>
            </div>

        </>
    )
}

export default ChangeUser