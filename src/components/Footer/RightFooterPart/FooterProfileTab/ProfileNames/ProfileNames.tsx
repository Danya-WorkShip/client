import React, { FC } from 'react';
import classes from './ProfileNames.module.scss';
import ProfileName from './ProfileName/ProfileName';
import ProfileId from './ProfileId/ProfileId';
import { IUser } from './../../../../../types/types';

interface IProfileNames {
  user: IUser
  usernameLength: number
}

const ProfileNames: FC<IProfileNames> = ({user,usernameLength}) => {

  return (
    <div className={classes.ProfileNames}>
      <ProfileName username={user.name} usernameLength={usernameLength}/>
      <ProfileId userid={user.id_name}/>
    </div>
  )
}

export default ProfileNames;