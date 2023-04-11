import React from 'react'
import classes from './LoginPanel.module.scss';
import LoginBlock from './LoginBlock/LoginBlock';

function LoginPanel() {
  return (
    <div className={classes.LoginPanel}>
        <LoginBlock />
    </div>
  )
}

export default LoginPanel