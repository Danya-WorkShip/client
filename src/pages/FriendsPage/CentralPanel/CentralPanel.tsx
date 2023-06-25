import React from 'react'
import classes from './CentralPanel.module.scss';
import avatar from '../../../images/blueslidepark.png';
import { IUser } from '../../../types/types';
import CentralFriendsProfile from './CentralFriendsProfile/CentralFriendsProfile';
import RecomendedFriendsProfile from './RecomendedFriendsProfile/RecomendedFriendsProfile';

const CentralPanel = () => {
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
        <section className={classes.CentralPanel}>
            <div className={classes.CentralPanelUpperPart}>
                <div className={classes.Avatar}><img src={avatar} alt="" /></div>
                <div className={classes.Name}>Mr.Bebr</div>
                <div className={classes.Status}>GOOD KID M.A.A.D CITY</div>
                <div className={classes.Counts}>
                    <div className={classes.Count}><h4>999</h4><span> Постов</span></div>
                    <div className={classes.Count}><h4>918,8K</h4><span> Подписчиков</span></div>
                    <div className={classes.Count}><h4>27</h4><span> Подписок</span></div>
                </div>
            </div>
            <div className={classes.LowerPart}>
                <div className={classes.Title}>Лучшие Друзья</div>
                <div className={classes.FriendsList}>
                    {users.map((user, id) => {
                        return <CentralFriendsProfile key={'Gett'+id+'FriendProfile'} id={id} user={user}/>
                    })}
                </div>
            </div>
            <div className={classes.RecomendedFriends}>
                <div className={classes.Title}>Рекомендованные друзья</div>
                <div className={classes.FriendsList}>
                    {users.map((user, id) => {
                        return <RecomendedFriendsProfile key={'Gett'+id+'FriendProfile'} id={id} user={user}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default CentralPanel