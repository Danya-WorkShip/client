import React, { FC } from 'react'
import classes from './MyArtistFollows.module.scss';
import { IArtist } from './../../../../../types/types';
import ArtistFollow from './ArtistFollow/ArtistFollow';

interface IMyArtistFollows {
    artists: IArtist[]
}

const MyArtistFollows: FC<IMyArtistFollows> = ({artists}) => {
  return (
    <div className={classes.MyArtistFollows}>
      <div className={classes.title}><h1>Мои подписки</h1><span>Все</span></div>
      <div className={classes.follows}>
          {artists.map((artist, id) => {
              return <ArtistFollow key={id} artist={artist}/>
          })}
      </div>
    </div>
  )
}

export default MyArtistFollows