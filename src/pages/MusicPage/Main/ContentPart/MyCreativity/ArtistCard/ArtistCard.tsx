import React, { FC } from 'react'
import { IArtist } from '../../../../../../types/types';
import classes from './ArtistCard.module.scss';
import CardLeftPart from './CardLeftPart/CardLeftPart';
import CardRightPart from './CardRightPart/CardRightPart';
import ChoosePublication from './../ChoosePublication/ChoosePublication';

interface IArtistCard {
    artist: IArtist
}

const ArtistCard: FC<IArtistCard> = ({artist}) => {
  return (
    <div className={classes.ArtistCard}>
        <CardLeftPart artist={artist}/>
        <CardRightPart artist={artist}/>
        <ChoosePublication />
    </div>
  )
}

export default ArtistCard