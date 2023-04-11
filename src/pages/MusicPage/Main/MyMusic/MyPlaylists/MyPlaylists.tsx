import React, { FC } from 'react'
import { IPlaylist } from '../../../../../types/types';
import Album from '../../../../../components/Album/Album';
import classes from './MyPlaylists.module.scss';

interface IAlbums {
  playlists: IPlaylist[]
}

const MyPlaylists: FC<IAlbums> = ({playlists}) => {
  return (
    <div className={classes.MyAlbums}>
      <div className={classes.title}>Мои плейлисты<span>Все</span></div>
      <div className={classes.Albums}>
        {playlists.map((playlist, key) => {
          return <Album key={key} playlist={playlist}/>
        })}
      </div>
    </div>
  )
}

export default MyPlaylists