import React, { FC, useState } from 'react'
import { IStory } from '../../../../../types/types';
import classes from './Story.module.scss';
import PopUp from './../../../../../components/PopUp/PopUp';
import { CSSTransition } from 'react-transition-group';

interface Story {
  story: IStory
}

const Story: FC<Story> = ({story}) => {
  const [open, setOpen] = useState(false)
  
  const closePopup = () => {
    setOpen(false)
  }

  return (
    <div className={classes.StoryWrapper}>
      <div className={classes.Story} onClick={() => setOpen(true)}>
        <div className={classes.Content}>
          <div className={classes.PreviewBackground} style={{backgroundImage: `url(${story.preview})`}}>
            <div className={classes.Preview}><img src={story.preview} alt=''/></div>
          </div>
          <div className={classes.Creator}>Gaaga</div>
        </div>
      </div>
      <CSSTransition
          in={open}
          unmountOnExit
          timeout={300}
          classNames="createContent"
      >
        <PopUp active={open} setOpen={closePopup}>
          <div className={classes.qwe}>saaaaaaaaaa</div>
        </PopUp>
      </CSSTransition>
    </div>
  )
}

export default Story