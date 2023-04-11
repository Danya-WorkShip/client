import React from 'react'
import classes from './FindTag.module.scss';

const FindTag = () => {
  return (
    <div className={classes.FindTag}>
        <input type="text" placeholder='Введите тэг'/>
    </div>
  )
}

export default FindTag