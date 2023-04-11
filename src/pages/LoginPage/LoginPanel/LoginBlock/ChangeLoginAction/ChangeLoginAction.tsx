import React, { useState } from 'react'
import classes from './ChangeLoginAction.module.scss';

function ChangeLoginAction() {
  const [active, setActive] = useState(true)
  return (
    <div className={classes.ChangeLoginAction}>
        <div className={(active && classes.Action + ' ' + classes.active) || classes.Action} onClick={() => setActive(true)}>Вход</div>
        <div className={(!active && classes.Action + ' ' + classes.active) || classes.Action} onClick={() => setActive(false)}>Регистрация</div>
    </div>
  )
}

export default ChangeLoginAction