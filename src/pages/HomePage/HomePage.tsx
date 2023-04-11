import React from 'react'
import classes from './HomePage.module.scss';
import FeedUpperPart from './FeedUpperPart/FeedUpperPart';
import FeedLowerPart from './FeedLowerPart/FeedLowerPart';
import FollowsProfilesBar from './FollowsProfilesBar/FollowsProfilesBar';

const HomePage = () => {
  return (
    //style={{background: `linear-gradient(180deg, ${localStorage.getItem('Theme')} 0%, rgba(0, 0, 0, 0) 100%)`}}
    <div className={classes.HomePage}>
        <FollowsProfilesBar />
        <div className={classes.Content}>
            <FeedUpperPart />
            <FeedLowerPart />
        </div>
    </div>
  )
}

export default HomePage