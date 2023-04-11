import React from 'react'
import classes from './Chat.module.scss';
import avatar from '../../../../images/404notFound6.png';
const Chat = () => {
  return (
    <div className={classes.Chat}>
        <div className={classes.UnreadMessages}>1</div>
        <div className={classes.Avatar}><img src={avatar} alt="" /></div>
        <div className={classes.Name}>Mrqqr</div>
    </div>
  )
}

export default Chat