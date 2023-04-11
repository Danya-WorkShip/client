import React from 'react'
import classes from './CenterPart.module.scss';
import { IMessage } from './../../../types/types';
import Message from './Message/Message';
import DateGroup from './DateGroup/DateGroup';

const CenterPart = () => {
  
  const Messages: IMessage[] = [
    {id: 1, chat_id: 1, user_id: 1, text: 'asfasf', reply_message_id: 1, shared_post_id: 0},
    {id: 1, chat_id: 1, user_id: 1, text: 'asfasf', reply_message_id: 1, shared_post_id: 0},
    {id: 1, chat_id: 1, user_id: 1, text: 'asfasf', reply_message_id: 1, shared_post_id: 0},
    {id: 1, chat_id: 1, user_id: 1, text: 'asfasf', reply_message_id: 1, shared_post_id: 0},
    {id: 1, chat_id: 1, user_id: 1, text: 'asfasf', reply_message_id: 1, shared_post_id: 0},
  ]

  return (
    <div className={classes.CenterPart}>
      <div className={classes.Messages}>
        <DateGroup date='29/10/22'>
          {Messages.map((message, id) => {
            return <Message key={'Gett'+id+'Message'} message={message}/>
          })}
        </DateGroup>
      </div>
    </div>
  )
}

export default CenterPart