import React, { FC, useState } from 'react'
import { ITrack } from '../../../../../types/types';
import classes from './PopularTracks.module.scss';
import { IArtist, IPlaylist } from './../../../../../types/types';
import Track from '../../../../../components/Track/Track';

interface IMyTracks {
  tracks: ITrack[]
  artists: IArtist[]
  playlists: IPlaylist[]
}

interface TrackPanel {
  isOpen: boolean
  track: ITrack | null
}

const PopularTracks: FC<IMyTracks> = ({tracks, artists, playlists}) => {

  return (
    <section className={classes.MyTracks}>
        <div className={classes.title}><h1>Треки</h1></div>
        <div className={classes.Tracks}>
          {tracks.map((track, id) => {
            return <Track key={id} track={track} artist={artists[track.artist_id].name} playlist={playlists[track.playlist_id].name}/>
          })}
        </div>
    </section>
  )
}

export default PopularTracks