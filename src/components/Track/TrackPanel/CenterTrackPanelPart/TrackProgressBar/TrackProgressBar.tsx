import React, { FC } from 'react'
import classes from './TrackProgressBar.module.scss';

interface ITrackProgressBar {
    left: number,
    right: number,
    onChange: (e: React.ChangeEvent) => void
}

const TrackProgressBar: FC<ITrackProgressBar> = ({left, right, onChange}) => {
  return (
    <div className={classes.TrackProgressBar}>
        <input type="range" className={classes.input} min={left} max={right} onChange={onChange}/>
        <div>{left} / {right}</div>
    </div>
  )
}

export default TrackProgressBar