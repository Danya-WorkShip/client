import React from 'react'
import classes from './LowerPart.module.scss';
import { IUser, IPost } from './../../../types/types';
import FeedPosts from '../../HomePage/FeedLowerPart/FeedPosts/FeedPosts';
import avatar from '../../../images/collegedropout.jpg';
import StoriesBar from '../../HomePage/FeedUpperPart/StoriesBar/StoriesBar';

interface ILowerPart {
    users: IUser[]
    posts: IPost[]
}

const LowerPart = () => {

    
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
    
    const posts: IPost[] = [
        {id: 1, user_id: 1, image_id: 0, is_pinned_post: false, text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть', album_id: 0, mentioned_user_id: 1, likes_count: 573, shares_count: 83, shared_post_id: 5, views: 4862, pub_date: '24.05.22 12:04'},
        {id: 1, user_id: 1, image_id: 1, is_pinned_post: false, text: 'Привет!', album_id: 0, mentioned_user_id: 1, likes_count: 573, shares_count: 83, shared_post_id: 5, views: 4862, pub_date: '24.05.22 12:04'},
        {id: 1, user_id: 1, image_id: 0, is_pinned_post: false, text: 'Привет!', album_id: 0, mentioned_user_id: 1, likes_count: 573, shares_count: 83, shared_post_id: 5, views: 4862, pub_date: '24.05.22 12:04'},
        {id: 1, user_id: 1, image_id: 0, is_pinned_post: false, text: 'Привет!', album_id: 0, mentioned_user_id: 1, likes_count: 573, shares_count: 83, shared_post_id: 5, views: 4862, pub_date: '24.05.22 12:04'},
        {id: 1, user_id: 1, image_id: 2, is_pinned_post: false, text: 'Привет!', album_id: 0, mentioned_user_id: 1, likes_count: 573, shares_count: 83, shared_post_id: 5, views: 4862, pub_date: '24.05.22 12:04'},
        {id: 1, user_id: 1, image_id: 0, is_pinned_post: false, text: 'Привет!', album_id: 0, mentioned_user_id: 1, likes_count: 573, shares_count: 83, shared_post_id: 5, views: 4862, pub_date: '24.05.22 12:04'},
    ]

    const stories = [
        {id: 1, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 2, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 3, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 4, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
        {id: 5, user_id: 145, text: 'Привет!', preview: avatar, video: 'asjfqahgf.mp4'},
    ]
    
    return (
        <div className={classes.LowerPart}>
            <div className={classes.Stories}>
                <StoriesBar stories={stories} />
            </div>
            <FeedPosts posts={posts} users={users} />
        </div>
    )
}

export default LowerPart