import React from 'react'
import classes from './LoginPage.module.scss';
import LoginPanel from './LoginPanel/LoginPanel';
import Design from './Design/Design';

function LoginPage() {
  return (
    <div className={classes.LoginPage}>
      <LoginPanel />
      {/* <Design /> */}
    </div>
  )
}

export default LoginPage