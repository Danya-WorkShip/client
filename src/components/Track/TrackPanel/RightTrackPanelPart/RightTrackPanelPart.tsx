import React from 'react'
import classes from './RightTrackPanelPart.module.scss';
import cover from '../../../../images/ToPimpAButterfly.png';
const RightTrackPanelPart = () => {
  return (
    <div className={classes.RightTrackPanelPart}>
        <div className={classes.LeftPart}>
          <div className={classes.Names}>
            <div className={classes.TrackName}>Wesley's Theory</div>
            <div className={classes.TrackArtist}>Kendrick Lamar</div>
          </div>
        </div>
        <div className={classes.RightPart}>
          <img src={cover} alt="" />
        </div>
    </div>
  )
}

export default RightTrackPanelPart