import React from 'react'
import classes from './UpperLogo.module.scss'
import Logo from './../../../components/Logo/Logo';

function UpperLogo() {
  return (
    <div className={classes.UpperLogo}>
        <Logo />
    </div>
  )
}

export default UpperLogo