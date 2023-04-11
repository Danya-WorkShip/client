import React from 'react'
import classes from './TrackPanel.module.scss';
import LeftTrackPanelPart from './LeftTrackPanelPart/LeftTrackPanelPart';
import CenterTrackPanelPart from './CenterTrackPanelPart/CenterTrackPanelPart';
import RightTrackPanelPart from './RightTrackPanelPart/RightTrackPanelPart';

const TrackPanel = () => {
  return (
    <div className={classes.TrackPanel}>
        <LeftTrackPanelPart />
        <CenterTrackPanelPart />
        <RightTrackPanelPart />
    </div> 
  )
}

export default TrackPanel