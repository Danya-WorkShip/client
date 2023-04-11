import React, { FC } from 'react'
import classes from './HomeMusic.module.scss';
import RecentPlayedPlaylists from './RecentPlayedPlaylists/RecentPlayedPlaylists';
import RecentPlayedTracks from './RecentPlayedTracks/RecentPlayedTracks';
import { IArtist, IPlaylist, ITrack } from './../../../../types/types';
import MyCreativity from './../ContentPart/MyCreativity/MyCreativity';
import MyArtistFollows from '../ContentPart/MyArtistFollows/MyArtistFollows';

interface IHomeMusic {
  tracks: ITrack[]
  artists: IArtist[]
  playlists: IPlaylist[]
}

const HomeMusic: FC<IHomeMusic> = ({playlists, artists, tracks}) => {

  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div className={classes.HomeMusic} style={{background: `linear-gradient(180deg, rgba(${randomInt(1,255)}, ${randomInt(200,255)}, ${randomInt(1,255)}, 0.4) 0px, rgba(0, 0, 0, 0.5) 650px, rgba(0, 0, 0, 0.7) 100%)`}}>
      <RecentPlayedPlaylists playlists={playlists}/>
      <RecentPlayedTracks playlists={playlists} artists={artists} tracks={tracks}/>
      <MyArtistFollows artists={artists}/>
      <MyCreativity artist={artists[0]}/>
    </div>
  )
}

export default HomeMusic