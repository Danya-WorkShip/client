import React, { FC } from 'react'
import Album from '../../../../../components/Album/Album';
import { IPlaylist } from '../../../../../types/types';
import classes from './PopularPlaylists.module.scss';

interface IAlbums {
  playlists: IPlaylist[]
}

const PopularPlaylists: FC<IAlbums> = ({playlists}) => {
  return (
    <div className={classes.MyAlbums}>
      <div className={classes.title}><h1>Недавно прослушанные плейлисты</h1><span>Все</span></div>
      <div className={classes.Albums}>
        {playlists.map((playlist, key) => {
          return <Album key={key} playlist={playlist}/>
        })}
      </div>
    </div>
  )
}

export default PopularPlaylists