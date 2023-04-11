import React from 'react';
import classes from './UsersResultItem.module.scss';

function UsersResultItem(user) {
  return (
    <div className={classes.usersResultItem}>
      <div className={classes.avatar}>
        <img src={user.user.imgSrc} alt='qwe'/>
      </div>
      <div className={classes.names}>
        <div className={classes.username}>{user.user.name}</div>
        <div className={classes.userId}>#{user.user.id}</div>
      </div>
    </div>
  )
}

export default UsersResultItem;