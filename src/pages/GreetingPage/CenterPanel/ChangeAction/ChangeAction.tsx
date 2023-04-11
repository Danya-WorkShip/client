import React from 'react'
import classes from './ChangeAction.module.scss'
import Login from './Login/Login';
import Register from './Register/Register';

function ChangeAction() {
  return (
    <div className={classes.ChangeAction}>
        <Login />
        <Register />
    </div>
  )
}

export default ChangeAction