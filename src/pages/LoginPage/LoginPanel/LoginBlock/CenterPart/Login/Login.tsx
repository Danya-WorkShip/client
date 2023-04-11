import React from 'react'
import classes from './Login.module.scss';
import Fields from '../Fields/Fields'
import ForgotPassword from '../ForgotPassword/ForgotPassword'
import HaveAccount from '../HaveAccount/HaveAccount'
import LoginButton from '../LoginButton/LoginButton'

const Login = () => {
  return (
    <div className={classes.Login}>
        <Fields />
        <ForgotPassword />
        <LoginButton />
        <HaveAccount />
    </div>
  )
}

export default Login