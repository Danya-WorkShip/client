import React, { FC } from 'react';
import classes from './ProfileId.module.scss';

interface IProfileID {
  userid: string
}

const ProfileId: FC<IProfileID> = ({userid}) => {
  const getTruncatedName = (name: string, nameLength: number) => {
    if (name.length > nameLength) {
      return name.substring(0,nameLength) + '...';
    } else {
      return name;
    }
  } 

  return (
    <div className={classes.ProfileId}>#{getTruncatedName(userid, 14)}</div>
  )
}

export default ProfileId;