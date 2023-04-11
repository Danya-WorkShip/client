import React, { FC } from 'react'
import classes from './ArtistFollow.module.scss';
import { IArtist } from './../../../../../../types/types';

interface IArtistFollow {
  artist: IArtist
}

const ArtistFollow: FC<IArtistFollow> = ({artist}) => {
  return (
    <div className={classes.ArtistFollow}>
      <div className={classes.image}><img src={artist.avatar} alt="" /></div>
      <div className={classes.name}>{artist.name}</div>
    </div>
  )
}

export default ArtistFollow