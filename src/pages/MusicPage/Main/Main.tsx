import React from 'react'
import classes from './Main.module.scss';
import artistAvatar from '../../../images/kendrick.png';
import cover1 from '../../../images/2pac.jpg';
import cover2 from '../../../images/latregistration.png';
import cover3 from '../../../images/blueslidepark.png';
import cover4 from '../../../images/Good_Kid,_M.A.A.D_City.jpg';
import cover5 from '../../../images/ToPimpAButterfly.png';
import cover6 from '../../../images/Kendrick_Lamar_Damn_cover.jpg';
import { IArtist, IPlaylist, ITrack } from '../../../types/types';
import HomeMusic from './HomeMusic/HomeMusic';
import Header from './../Header/Header';
import MyMusic from './MyMusic/MyMusic';
import { Route, Routes } from 'react-router-dom';
import PopularMusic from './PopularMusic/PopularMusic';

const Main = () => {
  const playlists: IPlaylist[] = [
    {id: 1, name: "GOOD KID M.A.A.D CITY", cover: cover4, artist_id: 1, listens: 5000000},
    {id: 2, name: "Blue Slide Park", cover: cover3, artist_id: 1, listens: 5000000},
    {id: 3, name: "The Late Registration", cover: cover2, artist_id: 1, listens: 5000000},
    {id: 4, name: "DAMN.", cover: cover6, artist_id: 1, listens: 5000000},
    {id: 5, name: "To Pimp a Butterfly", cover: cover5, artist_id: 1, listens: 554},
    {id: 6, name: "All eyez on me", cover: cover1, artist_id: 1, listens: 5000000}
  ]

  const tracks: ITrack[] = [
    {id: 1, cover: cover1, name: "Wesley's Theory (Ft. George Clinton & Thundercat)", artist_id: 5, audio: cover1, playlist_id: 1, listens: 1457781},
    {id: 2, cover: cover2, name: "For Free? (Interlude)", artist_id: 5, audio: cover1, playlist_id: 1, listens: 1457781},
    {id: 3, cover: cover3, name: "King Kunta", artist_id: 5, audio: cover1, playlist_id: 1, listens: 1457781},
    {id: 4, cover: cover4, name: "Institutionalized (Ft. Anna Wise, Bilal & Snoop Dogg)", artist_id: 5, audio: cover1, playlist_id: 1, listens: 1457781},
    {id: 5, cover: cover1, name: "These Walls (Ft. Anna Wise, Bilal & Thundercat)", artist_id: 5, audio: cover1, playlist_id: 1, listens: 1457781},
    {id: 6, cover: cover2, name: "u", artist_id: 5, audio: cover1, playlist_id: 1, listens: 1457781},
    {id: 7, cover: cover3, name: "Alright", artist_id: 5, audio: cover1, playlist_id: 1, listens: 1457781},
    {id: 8, cover: cover5, name: "How Much a Dollar Cost (Ft. James Fauntleroy & Ronald Isley)", artist_id: 5, audio: cover1, playlist_id: 1, listens: 1457781},
  ]

  const artists: IArtist[] = [
    {id: 1, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover3, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
    {id: 2, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover2, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
    {id: 3, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover4, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
    {id: 4, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover5, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
    {id: 5, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover1, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
    {id: 6, user_id: 5, name: "Kendrick Lamar", avatar: artistAvatar, artist_preview_image: cover3, description: 'Top 1 in Russia and CIS Instagram: http://www.instagram.com/morgen_shtern', followers: 155145475},
  ]
    return (
        <div className={classes.Main}>
            <div className={classes.Content}>
              <Header />
              <Routes>
                <Route path='/album/1' element={<div>qwe</div>}></Route>
                <Route path='/home' element={<HomeMusic tracks={tracks} artists={artists} playlists={playlists} />}></Route>
                <Route path='/mymusic' element={<MyMusic tracks={tracks} artists={artists} playlists={playlists} />}></Route>
                <Route path='/popular' element={<PopularMusic tracks={tracks} artists={artists} playlists={playlists} />}></Route>
                <Route path='/friends' element={<HomeMusic tracks={tracks} artists={artists} playlists={playlists} />}></Route>
              </Routes>
            </div>
            <div className={classes.Blur}></div>
        </div>
    )
}

export default Main