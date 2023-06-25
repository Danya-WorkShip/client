import React, { FC } from 'react';
import classes from './ProfileName.module.scss';
import { getTruncatedName } from '../../../../../../utils/functions/getTruncatedName';

interface IProfileName {
  username: string
  nameLength: number
}

const ProfileName: FC<IProfileName> = ({username, nameLength}) => { 
  return (
    <div className={classes.ProfileName}>{getTruncatedName(username, nameLength)}</div>
  )
}

export default ProfileName;