import React from 'react'
import classes from './MessengerPage.module.scss';
import LeftPart from './LeftPart/LeftPart';
import CenterPart from './CenterPart/CenterPart';
import RightPart from './RightPart/RightPart';
import ChatsBar from './ChatsBar/ChatsBar';

const MessengerPage = () => {
  return (
    <div className={classes.MessengerPage}>
        <LeftPart />
        <CenterPart />
        <RightPart />
        <ChatsBar />
    </div>
  )
}

export default MessengerPage