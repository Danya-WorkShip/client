import React, { FC } from 'react'
import classes from './MyMusic.module.scss';
import MyPlaylists from './MyPlaylists/MyPlaylists';
import { IArtist, IPlaylist, ITrack } from './../../../../types/types';
import MyTracks from './MyTracks/MyTracks';

interface IHomeMusic {
  playlists: IPlaylist[]
  tracks: ITrack[]
  artists: IArtist[]
}

const MyMusic: FC<IHomeMusic> = ({playlists, tracks, artists}) => {
  return (
    <div className={classes.MyMusic}>
      <MyPlaylists playlists={playlists}/>
      <MyTracks tracks={tracks} artists={artists} playlists={playlists}/>
    </div>
  )
}

export default MyMusic