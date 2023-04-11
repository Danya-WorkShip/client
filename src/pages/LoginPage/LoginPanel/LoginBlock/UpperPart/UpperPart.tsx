import React from 'react'
import classes from './UpperPart.module.scss';
import GreetingsBlock from './GreetingsBlock/GreetingsBlock';
import UpperPartLogo from './UpperPartLogo/UpperPartLogo';

function UpperPart() {
  return (
    <div className={classes.UpperPart}>
        <GreetingsBlock />
        <UpperPartLogo />
    </div>
  )
}

export default UpperPart