import React from 'react'
import Logo from './../../../../components/Logo/Logo';
import classes from './BrandName.module.scss';

function BrandName() {
  return (
    <div className={classes.BrandName}>
      {/* <Logo /> */}
      <h1>Gett</h1>
    </div>
  )
}

export default BrandName