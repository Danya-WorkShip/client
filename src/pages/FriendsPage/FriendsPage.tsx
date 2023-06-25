import React from 'react'
import classes from './FriendsPage.module.scss';
import LeftPanel from './LeftPanel/LeftPanel';
import CentralPanel from './CentralPanel/CentralPanel';
import RightPanel from './RightPanel/RightPanel';
import avatar from '../../images/blueslidepark.png';

const FriendsPage = () => {
  return (
    <div className={classes.FriendsPage} style={{background: `url(${avatar})`}}>
          <div className={classes.Content}>
            <LeftPanel />
            <CentralPanel />
            <RightPanel />
          </div>
          <div className={classes.Blur}></div>
    </div>
  )
}

export default FriendsPage