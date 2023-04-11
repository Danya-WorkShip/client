import React from 'react'
import classes from './CenterPart.module.scss';
import Register from './Register/Register';

const CenterPart = () => {
  return (
    <div className={classes.CenterPart}>
        {/* <Login /> */}
        <Register />
    </div>
  )
}

export default CenterPart