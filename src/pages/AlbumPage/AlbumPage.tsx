import React from 'react'
import classes from './AlbumPage.module.scss' 
import cover from '../../images/Good_Kid,_M.A.A.D_City.jpg'
import { IPlaylist, ITrack } from '../../types/types'
import Header from '../MusicPage/Header/Header'
import Track from '../../components/Track/Track';

const AlbumPage = () => {
  const playlists: IPlaylist[] = [
    {id: 1, name: "GOOD KID M.A.A.D CITY", cover, artist_id: 1, listens: 5000000},
    {id: 2, name: "Blue Slide Park", cover, artist_id: 1, listens: 5000000},
    {id: 3, name: "The Late Registration", cover, artist_id: 1, listens: 5000000},
    {id: 4, name: "DAMN.", cover, artist_id: 1, listens: 5000000},
    {id: 5, name: "To Pimp a Butterfly", cover, artist_id: 1, listens: 554},
    {id: 6, name: "All eyez on me", cover, artist_id: 1, listens: 5000000}
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


  return (
    <div className={classes.AlbumPage} style={{background: `url(${cover})`}}>
      <div className={classes.Content}>
        <Header />
        <div className={classes.LeftPart}>
          <div className={classes.Cover}><img src={playlists[0].cover} alt="" /></div>
          <div className={classes.Name}>{playlists[0].name}</div>
          <div className={classes.Artist}>Kendrick Lamar</div>
          <div className={classes.AdditInfo}>
            <div className={classes.PubDate}>2013</div>
            <div className={classes.TrackCount}>• 13 треков</div>
          </div>
        </div>
        <div className={classes.RightPart}>
          <div className={classes.Navigation}>
            <div className={classes.Variant + ' ' + classes.Active}>Треки</div>
            <div className={classes.Variant}>Текст</div>
            <div className={classes.Variant}>Похожие</div>
          </div>
          <div className={classes.TrackList}>
            {tracks.map((item, id) => {
              return <Track track={item} artist='Kendrick Lamar' playlist='GOOD KID M.A.A.D CITY' />
            })}
          </div>
        </div>
      </div>
      <div className={classes.Blur} style={{background: `linear-gradient(180deg, rgba(122, 206, 82, 0.4) 0px, rgba(0, 0, 0, 0.5) 650px, rgba(0, 0, 0, 0.7) 100%)`}}></div>
    </div>
  )
}

export default AlbumPage