import React from 'react'
import classes from './SearcherPage.module.scss';
import CenterPart from './CenterPart/CenterPart';
import { IUser } from '../../types/types';
import avatar from '../../images/wolf.jpg';
import LeftPart from './LeftPart/LeftPart';
import RightPart from './RightPart/RightPart';

function SearcherPage() {

  const visitedUsers: IUser[] = [
    {
      id: 1,
      email: 'qwerty@gmail.com',
      password: 'qwerty123',
      avatar: avatar,
      name: 'goodPerson',
      id_name: 'qet',
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
      name: 'GTtatti',
      id_name: 'gttatti',
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
      name: 'Nikes on my feet',
      id_name: 'rtp',
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
      name: '下線付きのテキスト',
      id_name: 'tilacam',
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
    }
  ]

  return (
    <div className={classes.SearcherPage} style={{background: `url(${visitedUsers[0].avatar})`}}>
        <div className={classes.Content}>
          <LeftPart VisitedProfileHistory={visitedUsers}/>
          <CenterPart user={visitedUsers[0]}/>
          <RightPart />
      </div>
      <div className={classes.Blur}></div>
    </div>
  )
}

export default SearcherPage