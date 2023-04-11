import React, { FC, useState } from 'react'
import { ITrack } from '../../../../../types/types';
import classes from './RecentPlayedTracks.module.scss';
import { IArtist, IPlaylist } from './../../../../../types/types';
import Track from '../../../../../components/Track/Track';
import TrackPanel from '../../../../../components/Track/TrackPanel/TrackPanel';

interface IMyTracks {
  tracks: ITrack[]
  artists: IArtist[]
  playlists: IPlaylist[]
}

interface TrackPanel {
  isOpen: boolean
  track: ITrack | null
}

const RecentPlayedTracks: FC<IMyTracks> = ({tracks, artists, playlists}) => {

  return (
    <section className={classes.MyTracks}>
        <div className={classes.title}><h1>Недавно прослушанные треки</h1></div>
        <div className={classes.Tracks}>
          {tracks.map((track, id) => {
            return <Track key={id} track={track} artist={artists[track.artist_id].name} playlist={playlists[track.playlist_id].name} />
          })}
        </div>
    </section>
  )
}

export default RecentPlayedTracks