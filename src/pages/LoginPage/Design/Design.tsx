import React from 'react'
import classes from './Design.module.scss';
import DesignText from './DesignText/DesignText';

const Design = () => {
  return (
    <div className={classes.Design}>
        <DesignText />
        <DesignText />
        <DesignText />
        <DesignText />
        <DesignText />
    </div>
  )
}

export default Design