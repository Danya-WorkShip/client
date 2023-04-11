import React from 'react'
import { IPlaylist, ITrack } from '../../../../types/types';
import classes from './ContentPart.module.scss';
import MyAlbums from './MyAlbums/MyAlbums';
import cover from '../../../../images/ToPimpAButterfly.png';
import artistAvatar from '../../../../images/kendrick.png';
import MyTracks from './MyTracks/MyTracks';
import { IArtist } from './../../../../types/types';
import MyArtistFollows from './MyArtistFollows/MyArtistFollows';
import MyCreativity from './MyCreativity/MyCreativity';

const ContentPart = () => {
    const playlists: IPlaylist[] = [
        {id: 1, name: 'Donda', cover: cover, artist_id: 1, listens: 5000000},
        {id: 2, name: 'To Pimp a Butterfly', cover: cover, artist_id: 1, listens: 5000000},
        {id: 3, name: 'Section.80', cover: cover, artist_id: 1, listens: 5000000},
        {id: 4, name: 'Mr. Morale & Big Steppers', cover: cover, artist_id: 1, listens: 5000000},
        {id: 5, name: 'Damn', cover: cover, artist_id: 1, listens: 5000000},
        {id: 6, name: 'Damn', cover: cover, artist_id: 1, listens: 5000000}
    ]

    const tracks: ITrack[] = [
      {id: 1, cover, name: "Wesley's Theory (Ft. George Clinton & Thundercat)", artist_id: 5, audio: cover, playlist_id: 1, listens: 1457781},
      {id: 2, cover, name: "For Free? (Interlude)", artist_id: 5, audio: cover, playlist_id: 1, listens: 1457781},
      {id: 3, cover, name: "King Kunta", artist_id: 5, audio: cover, playlist_id: 1, listens: 1457781},
      {id: 4, cover, name: "Institutionalized (Ft. Anna Wise, Bilal & Snoop Dogg)", artist_id: 5, audio: cover, playlist_id: 1, listens: 1457781},
      {id: 5, cover, name: "These Walls (Ft. Anna Wise, Bilal & Thundercat)", artist_id: 5, audio: cover, playlist_id: 1, listens: 1457781},
      {id: 6, cover, name: "u", artist_id: 5, audio: cover, playlist_id: 1, listens: 1457781},
      {id: 7, cover, name: "Alright", artist_id: 5, audio: cover, playlist_id: 1, listens: 1457781},
      {id: 8, cover, name: "How Much a Dollar Cost (Ft. James Fauntleroy & Ronald Isley)", artist_id: 5, audio: cover, playlist_id: 1, listens: 1457781},
    ]

    const artists: IArtist[] = [
      {id: 1, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
      {id: 2, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
      {id: 3, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
      {id: 4, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
      {id: 5, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
      {id: 6, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
    ]
  return (
    <div className={classes.ContentPart}>
        <MyAlbums playlists={playlists}/>
        <MyTracks tracks={tracks} artists={artists} playlists={playlists}/>
        <MyArtistFollows artists={artists}/>
        <MyCreativity artist={artists[0]}/>
    </div>
  )
}

export default ContentPart