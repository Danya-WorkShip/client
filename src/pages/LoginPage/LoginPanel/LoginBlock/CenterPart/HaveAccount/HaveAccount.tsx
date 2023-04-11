import React from 'react'
import classes from './HaveAccount.module.scss';

const HaveAccount = () => {
  return (
    <div className={classes.HaveAccount}>
        <span className={classes.Account}>Нет аккаунта?</span><span className={classes.Register}>Зарегистрироваться</span>
    </div>
  )
}

export default HaveAccount