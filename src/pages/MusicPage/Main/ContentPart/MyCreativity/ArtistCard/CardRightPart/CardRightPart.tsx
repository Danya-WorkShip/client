import React, { FC } from 'react'
import classes from './CardRightPart.module.scss';
import { IArtist } from '../../../../../../../types/types';

interface ICardRightPart {
    artist: IArtist
}

const CardRightPart: FC<ICardRightPart> = ({artist}) => {
  return (
    <div className={classes.CardRightPart}>
      <div className={classes.followers}>
        <div className={classes.followersCount}><span>{artist.followers}</span></div>
        <div className={classes.followersTitle}><span>Подписчиков</span></div>
      </div>
      <div className={classes.listeners}>
          <div className={classes.listenersCount}><span>145789145</span></div>
          <div className={classes.listenersTitle}><span>Прослушиваний за месяц</span></div>
      </div>
    </div>
  )
}

export default CardRightPart