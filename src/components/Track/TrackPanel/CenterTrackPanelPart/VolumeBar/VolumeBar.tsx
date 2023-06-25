import React, { FC } from 'react'
import classes from './VolumeBar.module.scss';

interface IVolumeBar {
    left: number,
    right: number,
    onChange: (e: React.ChangeEvent) => void
}

const VolumeBar: FC<IVolumeBar> = ({left, right, onChange}) => {
  return (
    <div className={classes.TrackProgressBar}>
        <input type="range" className={classes.input} min={left} max={right} onChange={onChange}/>
        <div>{left} / {right}</div>
    </div>
  )
}

export default VolumeBar