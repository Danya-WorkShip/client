import React, { FC } from 'react'
import classes from './PopularMusic.module.scss';
import RecentPlayedPlaylists from './PopularPlaylists/PopularPlaylists';
import { IArtist, IPlaylist, ITrack } from './../../../../types/types';
import PopularTracks from './PopularTracks/PopularTracks';

interface IPopularMusic {
  tracks: ITrack[]
  artists: IArtist[]
  playlists: IPlaylist[]
}

const PopularMusic: FC<IPopularMusic> = ({playlists, artists, tracks}) => {
  
  return (
    <div className={classes.HomeMusic}>
      <RecentPlayedPlaylists playlists={playlists}/>
      <PopularTracks tracks={tracks} artists={artists} playlists={playlists}/>
    </div>
  )
}

export default PopularMusic