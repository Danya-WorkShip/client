import React, { useState } from 'react'
import { IUser } from '../../../types/types';
import classes from './LeftPanel.module.scss';
import FriendsProfile from './FriendsProfile/FriendsProfile';
import avatar from '../../../images/kendrick.png';

const LeftPanel = () => {
    const [activeSection, setActiveSection] = useState('all')

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
        <section className={classes.LeftPanel}>
            <div className={classes.UpperPart}>
                <div className={classes.Title}>Подписчики</div>
                <div className={classes.Sections}>
                    <div className={classes.Section} onClick={() => setActiveSection('all')} style={activeSection==='all' ? {background: 'rgba(234, 41, 76, 0.9)'} : {}}>Все</div>
                    <div className={classes.Section} onClick={() => setActiveSection('online')} style={activeSection==='online' ? {background: 'rgba(234, 41, 76, 0.9)'} : {}}>Онлайн</div>
                    <div className={classes.Section} onClick={() => setActiveSection('requests')} style={activeSection==='requests' ? {background: 'rgba(234, 41, 76, 0.9)'} : {}}>Запросы</div>
                    <div className={classes.Section} onClick={() => setActiveSection('blocked')} style={activeSection==='blocked' ? {background: 'rgba(234, 41, 76, 0.9)'} : {}}>Заблокированные</div>
                </div>
                <div className={classes.Search}>
                    <input type="search" name="search" placeholder="Поиск" />
                </div>
            </div>
            <section className={classes.LowerPart}>
                <div className={classes.FriendsList}>
                    {users.map((user, id) => {
                        return <FriendsProfile key={'Gett'+id+'FriendProfile'} user={user}/>
                    })}
                </div>
            </section>
        </section>
    )
}

export default LeftPanel