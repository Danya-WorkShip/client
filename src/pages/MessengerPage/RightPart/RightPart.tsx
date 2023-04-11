import React from 'react'
import classes from './RightPart.module.scss';
import avatar from '../../../images/kendrick.png';
const RightPart = () => {
  return (
    <div className={classes.RightPart}>
      <div className={classes.ImagesSection}>
        <div className={classes.Title}>Изображения</div>
        <div className={classes.Images}>
          <div className={classes.Image}><img src={avatar} alt="" /></div>
          <div className={classes.Image}><img src={avatar} alt="" /></div>
          <div className={classes.Image}><img src={avatar} alt="" /></div>
          <div className={classes.Image}><img src={avatar} alt="" /></div>
          <div className={classes.Image}><img src={avatar} alt="" /></div>
          <div className={classes.Image}><img src={avatar} alt="" /></div>
        </div>
      </div>
      <div className={classes.VideosSection}>
        <div className={classes.Title}>Видео</div>
        <div className={classes.Videos}>
          <div className={classes.Video}><img src={avatar} alt="" /></div>
          <div className={classes.Video}><img src={avatar} alt="" /></div>
          <div className={classes.Video}><img src={avatar} alt="" /></div>
          <div className={classes.Video}><img src={avatar} alt="" /></div>
          <div className={classes.Video}><img src={avatar} alt="" /></div>
          <div className={classes.Video}><img src={avatar} alt="" /></div>
        </div>
      </div>
      <div className={classes.MusicSection}>
        <div className={classes.Title}>Музыка</div>
        <div className={classes.Music}>
          <div className={classes.Track}><img src={avatar} alt="" /></div>
          <div className={classes.Track}><img src={avatar} alt="" /></div>
          <div className={classes.Track}><img src={avatar} alt="" /></div>
          <div className={classes.Track}><img src={avatar} alt="" /></div>
          <div className={classes.Track}><img src={avatar} alt="" /></div>
          <div className={classes.Track}><img src={avatar} alt="" /></div>
          <div className={classes.Track}><img src={avatar} alt="" /></div>
          <div className={classes.Track}><img src={avatar} alt="" /></div>
          <div className={classes.Track}><img src={avatar} alt="" /></div>
          <div className={classes.Track}><img src={avatar} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default RightPart