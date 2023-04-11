import React, { FC } from 'react';
import ProfileUserpick from './ProfileUserpick/ProfileUserpick';
import ProfileNames from './ProfileNames/ProfileNames';
import classes from './FooterProfileTab.module.scss';
import avatar from '../../../../images/10.png'
import { IUser } from './../../../../types/types';

interface IFooterProfileTab {
  user: IUser
  usernameLength: number
}

const FooterProfileTab: FC<IFooterProfileTab> = ({user, usernameLength}) => {

  return (
    <div className={classes.FooterProfileTab}>
      <ProfileUserpick imgSrc={user.avatar}/>
      <ProfileNames user={user} usernameLength={usernameLength}/>
    </div>
  )
}

export default FooterProfileTab;