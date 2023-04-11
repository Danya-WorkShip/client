import React from 'react';
import classes from './ProfileName.module.scss';

function ProfileName({username,usernameLength}) {
  const getTruncatedName = (name,nameLength) => {
    if (name.length > nameLength) {
      return name.substring(0,nameLength) + '...';
    } else {
      return name;
    }
  } 
  return (
    <div className={classes.ProfileName}>{getTruncatedName(username, usernameLength)}</div>
  )
}

export default ProfileName;