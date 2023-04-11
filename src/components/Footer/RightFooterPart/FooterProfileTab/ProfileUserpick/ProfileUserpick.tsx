import React, { FC } from 'react';
import imgSrc from '../../../../../images/kendrick.png';
import classes from './ProfileUserpick.module.scss';

interface IProfileUserpick {
  imgSrc: string
}

const ProfileUserpick: FC<IProfileUserpick> = ({imgSrc}) => {
  return (
    <div className={classes.ProfileUserpick}>
      <img className={classes.MyImg} src={imgSrc}/>
    </div>
  )
}

export default ProfileUserpick;