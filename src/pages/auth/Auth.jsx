import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {auth, authProvider} from '../../Firebase'
import {setActiveUser} from '../../actions/authSlice'
import { selectUserName } from '../../actions/authSlice'
import Google from '../../assets/google.png'
import classes from './Auth.module.css'

const Auth = () => {

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)

    const handleUserSignIn=()=>{
        auth.signInWithPopup(authProvider).then((res)=>{
            dispatch(setActiveUser({
                userName : res.user.displayName,
                userEmail : res.user.email
            }))
        }).catch((err)=>{
            alert(err)
        })
    }
    return (
        <>
        { userName === null ? 
        <div className={classes.auth__container}>
            <div className={classes.auth__card}>
                <p>SignIn to continue</p>
                <button className={classes.auth__signin} onClick={handleUserSignIn}>
                    <img src={Google} alt="google-png" className={classes.auth__logo} />
                    sign in
                </button>
            </div>
        </div> : null}
        </>
    )
}

export default Auth
