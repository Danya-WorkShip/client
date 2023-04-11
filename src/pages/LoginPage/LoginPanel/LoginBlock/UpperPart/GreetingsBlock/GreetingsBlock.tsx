import React from 'react'
import classes from './GreetingsBlock.module.scss';

function GreetingsBlock() {
  return (
    <div className={classes.GreetingsBlock}>
        <h1>Добро пожаловать!</h1>
        <h3>Мы так рады вас видеть!</h3>
    </div>
  )
}

export default GreetingsBlock