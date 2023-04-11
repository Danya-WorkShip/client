import React from 'react'
import classes from './FollowsProfilesBar.module.scss';
import avatar from '../../../images/girl.jpg';
import Profile from './Profile/Profile';
import { IUser } from '../../../types/types';

const FollowsProfilesBar = () => {
    const users: IUser[] = [
        {
          id: 1,
          email: 'qwerty@gmail.com',
          password: 'qwerty123',
          avatar: avatar,
          name: 'DuffGirl',
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
          id: 2,
          email: 'qwerty@gmail.com',
          password: 'qwerty123',
          avatar: avatar,
          name: 'lupuwellness',
          id_name: 'lupuwellness',
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
          id: 3,
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
        <div className={classes.FollowsProfilesBar}>
            {users.map((user, id) => {
                return <Profile key={'Gett'+id+'Profile'} user={user}/>
            })}
        </div>
    )
}

export default FollowsProfilesBar