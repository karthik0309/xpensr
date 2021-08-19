import React from 'react'
import {useDispatch,useSelector } from 'react-redux'
import { setUserLogOut } from '../../actions/authSlice'
import { selectUserName } from '../../actions/authSlice'
import { auth } from '../../Firebase'
import classes from './Header.module.css'

const Header = () => {

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName)

    const handleSignOut=()=>{
        auth.signOut().then((res)=>{
            dispatch(setUserLogOut())
        }).catch((err)=>{
            alert(err)
        })
    }
    return (
        <div className={classes.header__container}>
            <div className={classes.header__logo}>
                <p className={classes.header__title}>Xpensr</p>
                <i className="far fa-credit-card"></i>
            </div>
            <div className={classes.signout__button}>
                {userName && <p className={classes.user__name}>Hi, {userName.split(" ")[0]}</p>}
                <button className={classes.signout} onClick={handleSignOut} id="signout" name="signout-button">
                    SignOut
                </button>
            </div>
        </div>
    )
}

export default Header
