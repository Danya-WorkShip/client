import React from 'react';
import AdditNav from './AditionalNav/AdditNav';
import classes from './RightFooterPart.module.scss';

const RightFooterPart = () => {
  
  return (
    <div className={classes.RightFooterPart}>
      <AdditNav />
    </div>
  )
}

export default RightFooterPart;