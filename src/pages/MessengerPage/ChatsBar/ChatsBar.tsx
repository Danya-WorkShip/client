import React from 'react'
import classes from './ChatsBar.module.scss';
import Chat from './Chat/Chat';

const ChatsBar = () => {
  return (
    <div className={classes.ChatsBar}>
        <Chat />
        <Chat />
        <Chat />
        <Chat />
    </div>
  )
}

export default ChatsBar