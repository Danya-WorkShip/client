import React, { FC } from 'react'
import { IComment } from '../../../../../types/types';
import classes from './CommentSection.module.scss';
import PostComment from './PostComment/PostComment';
import { IUser } from './../../../../../types/types';
import avatar from '../../../../../images/kendrick.png';
import CreateComment from './CreateComment/CreateComment';
interface ICommentSection {
    comments: IComment[]
}

const users: IUser[] = [
  {
    id: 1,
    email: 'qwerty@gmail.com',
    password: 'qwerty123',
    avatar: avatar,
    name: 'MagaNaprogibkiday',
    id_name: 'ongod',
    status: 'hiii meeen',
    description: 'string',
    showcase_id: 1,
    is_photo_profile: true,
    is_activated: true,
    activation_link: 'aAIJSFHloaISgguasPASaGFaspgj',
    role_id: 0,
    is_banned: false,
    ban_reason: '',
    is_closed_profile: false,
    is_disabled_commenting_my_posts: false,
    who_can_tag_me: 0,    // 0 - все , 1 - только подписчики, 2 -только я
    who_can_send_me_messages: 0,
    is_notifications_enabled: true,
    show_notification_message_text: true,
  },
  {
    id: 1,
    email: 'qwerty@gmail.com',
    password: 'qwerty123',
    avatar: avatar,
    name: 'MagaNaprogibkiday',
    id_name: 'ongod',
    status: 'hiii meeen',
    description: 'string',
    showcase_id: 1,
    is_photo_profile: true,
    is_activated: true,
    activation_link: 'aAIJSFHloaISgguasPASaGFaspgj',
    role_id: 0,
    is_banned: false,
    ban_reason: '',
    is_closed_profile: false,
    is_disabled_commenting_my_posts: false,
    who_can_tag_me: 0,    // 0 - все , 1 - только подписчики, 2 -только я
    who_can_send_me_messages: 0,
    is_notifications_enabled: true,
    show_notification_message_text: true,
  },
  {
    id: 1,
    email: 'qwerty@gmail.com',
    password: 'qwerty123',
    avatar: avatar,
    name: 'MagaNaprogibkiday',
    id_name: 'ongod',
    status: 'hiii meeen',
    description: 'string',
    showcase_id: 1,
    is_photo_profile: true,
    is_activated: true,
    activation_link: 'aAIJSFHloaISgguasPASaGFaspgj',
    role_id: 0,
    is_banned: false,
    ban_reason: '',
    is_closed_profile: false,
    is_disabled_commenting_my_posts: false,
    who_can_tag_me: 0,    // 0 - все , 1 - только подписчики, 2 -только я
    who_can_send_me_messages: 0,
    is_notifications_enabled: true,
    show_notification_message_text: true,
  },
]

const CommentSection: FC<ICommentSection> = ({comments}) => {
  return (
    <div className={classes.CommentSection}>
        <div className={classes.Title}>
          <div className={classes.BackgroundBlur}></div>
          <span className={classes.TitleSpan}>Комментарии</span>
        </div>
        <div className={classes.Comments}>
          {comments.map((comment, id) => {
              return <PostComment key={`Gett${id}Comment`} comment={comment} user={users[comment.user_id]}/>
          })}
        </div>
        <CreateComment user={users[0]}/>
    </div>
  )
}

export default CommentSection