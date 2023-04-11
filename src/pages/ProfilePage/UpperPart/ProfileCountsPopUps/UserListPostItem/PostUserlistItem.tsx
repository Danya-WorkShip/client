import React, { FC } from 'react';
import classes from './PostUserlistItem.module.scss';
import { IUser } from './../../../../../types/types';

interface IPostUserlistItem {
  user: IUser
}

const PostUserlistItem: FC<IPostUserlistItem> = ({user}) => {

  const getTruncatedText = (text: string, needsTextLength: number) => {
    if (text.length > needsTextLength) {
      return text.substring(0,needsTextLength) + '...';
    } else {
      return text;
    }
  } 

  return (
    <div className={classes.postUserlistItem}>
      <div className={classes.postCreatorAvatar}>
        <img src={user.avatar} alt=''/>
      </div>
      <div className={classes.postContent}>
        <div className={classes.postText}>{getTruncatedText('Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta expedita necessitatibus blanditiis dolores enim at rem rerum impedit nisi magni, consequuntur sint inventore temporibus explicabo. Magnam explicabo totam repudiandae!', 135)}</div>
      </div>
      <div className={classes.delete}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></div>
    </div>
  )
}

export default PostUserlistItem;