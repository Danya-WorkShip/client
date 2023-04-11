import React from 'react'
import classes from './LoginBlock.module.scss';
import UpperPart from './UpperPart/UpperPart';
import ChangeLoginAction from './ChangeLoginAction/ChangeLoginAction';
import CenterPart from './CenterPart/CenterPart';
import DesignText from './DesignText/DesignText';

function LoginBlock() {
  return (
    <div className={classes.LoginBlock}>
        <UpperPart />
        <ChangeLoginAction />
        <CenterPart />
    </div>
  )
}

export default LoginBlock
