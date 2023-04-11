import React, { FC, useState } from 'react'
import classes from './MyCreativity.module.scss';
import ArtistCard from './ArtistCard/ArtistCard';
import { IArtist } from '../../../../../types/types';
import MyUploadedTracks from './MyUploadedTracks/MyUploadedTracks';
import MyUploadedAlbums from './MyUploadedAlbums/MyUploadedAlbums';

interface IMyCreativity {
  artist: IArtist
}

const MyCreativity: FC<IMyCreativity> = ({artist}) => {
  const [isUserArtist, setisUserArtist] = useState(true)

  return (
    <div className={classes.MyCreativity} style={!isUserArtist ? {padding: 0, paddingBottom: '55px'} : {}}>
      {isUserArtist ? <div className={classes.creativity}>
        <div className={classes.title}><h1>Моё творчество</h1></div>
        <ArtistCard artist={artist}/>
        <MyUploadedTracks />
        <MyUploadedAlbums />
      </div> : <div className={classes.createArtistCard}>Создайте карточку исполнителя</div>}
    </div>
  )
}

export default MyCreativity