import React from 'react'
import classes from './ProfilePage.module.scss';
import UpperPart from './UpperPart/UpperPart';
import avatar from '../../images/kendrick.png';
import { IUser } from '../../types/types';
import LowerPart from './LowerPart/LowerPart';

const ProfilePage = () => {
  const users: IUser[] = [
    {
      id: 1,
      email: 'qwerty@gmail.com',
      password: 'qwerty123',
      avatar: avatar,
      name: 'MagaNaprogibkiday',
      id_name: 'ongod',
      status: 'hiii meeen',
      description: '🥟🥟🥟🥟🥟🥟🥟🥟🥟🥟🥟 Блин блинский(( 🥟🥟🥟🥟🥟🥟🥟🥟🥟🥟🥟',
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

  return (
    <div className={classes.ProfilePage}>
      <UpperPart user={users[0]} />
      <LowerPart />
    </div>
  )
}

export default ProfilePage