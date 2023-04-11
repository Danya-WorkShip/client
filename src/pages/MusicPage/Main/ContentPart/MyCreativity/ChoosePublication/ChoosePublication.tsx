import React from 'react'
import classes from './ChoosePublication.module.scss';

const ChoosePublication = () => {
  return (
    <div className={classes.ChoosePublication}>
        <div className={classes.publishPlaylist}>Создать плейлист</div>
        <div className={classes.publishRelease}>Создать релиз</div>
    </div>
  )
}

export default ChoosePublication