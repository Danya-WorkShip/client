import React, { FC, useState } from 'react'
import classes from './CreateContent.module.scss';
import { CSSTransition } from 'react-transition-group';
import PopUp from './../../../../components/PopUp/PopUp';
import avatar from '../../../../images/kendrick.png';
import { IUser } from './../../../../types/types';
import { uploadImage } from '../../../../utils/functions/uploadImage';

interface ICreateContent {
    user: IUser
}

// const users: IUser[] = [
//     {
//       id: 1,
//       email: 'qwerty@gmail.com',
//       password: 'qwerty123',
//       avatar: avatar,
//       name: 'MagaNaprogibkiday',
//       id_name: 'ongod',
//       status: 'hiii meeen',
//       description: '🥟🥟🥟🥟🥟🥟🥟🥟🥟🥟🥟 Блин блинский(( 🥟🥟🥟🥟🥟🥟🥟🥟🥟🥟🥟',
//       showcase_id: 1,
//       is_photo_profile: true,
//       is_activated: true,
//       activation_link: 'aAIJSFHloaISgguasPASaGFaspgj',
//       role_id: 0,
//       is_banned: false,
//       ban_reason: '',
//       is_closed_profile: false,
//       is_disabled_commenting_my_posts: false,
//       who_can_tag_me: 0,    // 0 - все , 1 - только подписчики, 2 -только я
//       who_can_send_me_messages: 0,
//       is_notifications_enabled: true,
//       show_notification_message_text: true,
//     },
//     {
//       id: 2,
//       email: 'qwerty@gmail.com',
//       password: 'qwerty123',
//       avatar: avatar,
//       name: 'MagaNaprogibkiday',
//       id_name: 'ongod',
//       status: 'hiii meeen',
//       description: 'string',
//       showcase_id: 1,
//       is_photo_profile: true,
//       is_activated: true,
//       activation_link: 'aAIJSFHloaISgguasPASaGFaspgj',
//       role_id: 0,
//       is_banned: false,
//       ban_reason: '',
//       is_closed_profile: false,
//       is_disabled_commenting_my_posts: false,
//       who_can_tag_me: 0,    // 0 - все , 1 - только подписчики, 2 -только я
//       who_can_send_me_messages: 0,
//       is_notifications_enabled: true,
//       show_notification_message_text: true,
//     },
//     {
//       id: 3,
//       email: 'qwerty@gmail.com',
//       password: 'qwerty123',
//       avatar: avatar,
//       name: 'MagaNaprogibkiday',
//       id_name: 'ongod',
//       status: 'hiii meeen',
//       description: 'string',
//       showcase_id: 1,
//       is_photo_profile: true,
//       is_activated: true,
//       activation_link: 'aAIJSFHloaISgguasPASaGFaspgj',
//       role_id: 0,
//       is_banned: false,
//       ban_reason: '',
//       is_closed_profile: false,
//       is_disabled_commenting_my_posts: false,
//       who_can_tag_me: 0,    // 0 - все , 1 - только подписчики, 2 -только я
//       who_can_send_me_messages: 0,
//       is_notifications_enabled: true,
//       show_notification_message_text: true,
//     },
// ]

// const FetchPosts: IPost[] = [
//     {
//         id: 1,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 2,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 3,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 4,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 5,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 6,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 7,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 8,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 9,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 10,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 11,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 12,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 13,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 14,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
//     {
//         id: 15,
//         user_id: 1,
//         image_id: 0,
//         is_pinned_post: false,
//         text: '❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть ❗Stand-Up комик Сергей Детков рассказал в своем Instagram* аккаунте, что в скоре он будет посещать секцию Рукопашного боя.Пожелаем успехов Сереже в спорте, надеемся там у него все сложится🙏*запрещённая в России соцсеть',
//         album_id: 0,
//         mentioned_user_id: 1,
//         likes_count: 573,
//         shares_count: 83,
//         shared_post_id: 5,
//         views: 4862,
//         pub_date: '24.05.22 12:04'
//     },
// ]

const CreateContent: FC<ICreateContent> = ({user}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [openCreateStoryPanel, setOpenCreateStoryPanel] = useState<boolean>(false)
    const [openCreatePostPanel, setOpenCreatePostPanel] = useState<boolean>(false)
    const [openCreateGettPanel, setOpenCreateGettPanel] = useState<boolean>(false)

    // const EdditedPosts = FetchPosts.map((post, id) => {
    //     return [
    //         {
    //             Order: id,
                
    //         }
    //     ]
    // })

    const closeAll = () => {
        setOpen(false)
        setOpenCreateStoryPanel(false)
        setOpenCreatePostPanel(false)
        setOpenCreateGettPanel(false)
    } 

    return (
        <div className={classes.CreateContent}>
            <CSSTransition
                in={openCreateStoryPanel}
                unmountOnExit
                timeout={300}
                classNames="createPanel"
            >
                <div className={classes.CreatePanel}>
                    <div className={classes.CreateStoryCentralPanel}>
                        <div className={classes.StoryBackground} style={{background: `url(${avatar})`}}>
                            <div className={classes.UpperBar}>
                                <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg></div>
                                <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg></div>
                                <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/></svg></div>
                                <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg></div>
                                <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"/></svg></div>
                            </div>
                            <div className={classes.CentralPartElements}>
                                <div className={classes.Elements}>

                                </div>
                                <div className={classes.HoverButton}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></div>
                            </div>
                            <div className={classes.LowerBar}>
                                <div className={classes.Publish}>Опубликовать</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <CSSTransition
                    in={openCreatePostPanel}
                    unmountOnExit
                    timeout={300}
                    classNames="createPanel"
                >
                <div className={classes.CreatePanel}>
                    <div className={classes.CreatePostPanel}>
                        <form method="post">
                            <div className={classes.UpperPart}>
                                <div className={classes.Avatar}><img src={user.avatar} alt=""/></div>
                                <input type="text" name="post" placeholder="Что нового?" autoComplete="off"/>
                            </div>
                            <div className={classes.AddedFiles} id='addedFiles'></div>
                            <div className={classes.LowerPart}>
                                <div className={classes.LowerBar}>
                                    <div className={classes.AddFile}>
                                        <input type="file" multiple={true} onChange={(e) => uploadImage(e, {addedFile: classes.AddedFile, deleteFile: classes.DeleteFile, FilesError: classes.FilesError}, 'addedFiles')}/>

                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.22266 4.11133V8.22266H4.11133H0V10V11.7773H4.11133H8.22266V15.8887V20H10H11.7773V15.8887V11.7773H15.8887H20V10V8.22266H15.8887H11.7773V4.11133V0H10H8.22266V4.11133Z"/></svg>
                                    </div>

                                    <div onClick={() => console.log()} className={classes.AddSmile}><svg width="20" height="20" viewBox="0 0 20 20"xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.99576 0.032075C8.45151 0.0893875 7.37345 0.32395 6.85313 0.498262C1.61058 2.2547 -1.21373 7.86732 0.501327 13.1212C0.765327 13.93 1.35383 15.0928 1.85639 15.7984C2.39458 16.5541 3.4307 17.5902 4.18639 18.1284C6.76126 19.9621 10.1384 20.4715 13.1468 19.4801C13.9413 19.2182 15.1074 18.6252 15.8051 18.1284C16.5608 17.5902 17.5969 16.5541 18.1351 15.7984C18.8722 14.7634 19.53 13.2739 19.7729 12.0899C20.2451 9.78813 19.9656 7.61663 18.9272 5.52026C18.4387 4.53413 17.8634 3.73782 17.0551 2.92964C15.4339 1.30839 13.4416 0.34295 11.1224 0.054825C10.6246 -0.00704993 9.48301 -0.0192374 8.99576 0.032075ZM11.7458 1.58345C15.3506 2.38782 17.9862 5.22607 18.5011 8.85832C18.5947 9.51963 18.5396 11.0947 18.4001 11.739C17.6727 15.0994 15.0721 17.6808 11.6833 18.4064C10.9418 18.5652 9.05745 18.5672 8.32957 18.4101C4.90989 17.6718 2.32664 15.1145 1.59064 11.739C1.44908 11.0897 1.39864 9.64132 1.49189 8.90082C1.87383 5.86645 3.8517 3.27364 6.70188 2.07114C7.24526 1.84182 8.15526 1.58789 8.77701 1.49201C9.35038 1.40364 11.1943 1.46039 11.7458 1.58345ZM6.27388 5.76107C6.02157 5.87545 5.75982 6.19407 5.71295 6.44401C5.6922 6.55476 5.68407 7.1707 5.69489 7.81282C5.71632 9.08969 5.73164 9.14538 6.14482 9.45388C6.38395 9.63244 6.92007 9.63244 7.1592 9.45388C7.58401 9.13676 7.58951 9.11351 7.58951 7.64526C7.58951 6.39482 7.58138 6.29982 7.46063 6.13807C7.38976 6.04313 7.2632 5.9147 7.17938 5.85263C6.9722 5.69913 6.51295 5.6527 6.27388 5.76107ZM12.8698 5.81713C12.3776 6.06663 12.3395 6.19788 12.3395 7.64526C12.3395 8.73063 12.3543 8.92238 12.4519 9.10113C12.7833 9.70819 13.7044 9.75663 14.0912 9.18744C14.2434 8.96344 14.2458 8.94026 14.2458 7.65376C14.2458 6.42538 14.2378 6.33451 14.1111 6.12963C13.9686 5.89907 13.5786 5.68026 13.3059 5.67788C13.2186 5.67713 13.0224 5.73982 12.8698 5.81713ZM4.90201 11.9368C4.46339 12.1788 4.24257 12.6319 4.37214 13.0244C4.46195 13.2966 4.79401 13.7859 5.22557 14.282C6.53188 15.7836 8.72082 16.614 10.7241 16.3678C11.8018 16.2354 12.937 15.7889 13.8083 15.1548C14.5444 14.6189 15.4085 13.5971 15.6032 13.0322C15.7092 12.7244 15.6253 12.3874 15.3874 12.1656C14.8554 11.6693 14.3128 11.786 13.8395 12.4984C13.4646 13.0627 12.7178 13.7371 12.128 14.0439C11.4314 14.4063 10.8216 14.5515 9.99576 14.5515C9.16994 14.5515 8.56007 14.4063 7.86351 14.0439C7.27376 13.7371 6.52688 13.0627 6.15201 12.4984C5.78639 11.9481 5.2877 11.724 4.90201 11.9368Z"/></svg>                                
                                    </div>

                                    <div className={classes.AddSticker}><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.28096 0.138259C8.03684 0.258072 7.11865 1.14451 4.08534 4.18882C0.743531 7.54276 0.187031 8.1272 0.0930939 8.38133C-0.0659059 8.81151 -0.0117185 10.9176 0.183406 11.8904C1.10103 16.4661 4.92653 19.763 9.56221 19.9728C12.3819 20.1005 15.0577 19.0588 17.0613 17.0533C18.4912 15.6222 19.4206 13.8694 19.8261 11.8396C20.0236 10.8506 20.0236 9.13389 19.8261 8.14495C19.01 4.0592 15.9843 1.01445 11.906 0.175072C11.4334 0.0778219 10.9532 0.0389469 9.93721 0.0156344C8.60721 -0.0148032 8.59027 -0.0135531 8.28096 0.138259ZM11.7497 1.33732C15.2008 2.0842 17.797 4.63482 18.6125 8.07995C18.7605 8.70483 18.7767 8.89426 18.7767 9.99226C18.7767 11.0903 18.7605 11.2797 18.6125 11.9046C17.8085 15.3015 15.3086 17.8035 11.92 18.6028C11.2935 18.7506 11.0916 18.7686 10.031 18.771C8.7274 18.7738 8.26027 18.7055 7.21846 18.36C4.31265 17.3962 2.10278 14.9606 1.39897 11.9461C1.28322 11.4502 1.23259 11.019 1.20634 10.3048L1.17078 9.33601L1.7884 9.22339C4.3614 8.75426 6.78396 7.03795 8.13265 4.72864C8.6699 3.80876 9.17321 2.40739 9.28359 1.52426L9.32877 1.16257L10.3048 1.1992C10.8417 1.21939 11.4919 1.28151 11.7497 1.33732ZM7.89609 2.32039C7.10996 4.98251 4.9704 7.11795 2.31222 7.89376L1.96847 7.99408L4.96821 4.9932C6.61809 3.3427 7.97359 1.99226 7.98046 1.99226C7.98734 1.99226 7.9494 2.13989 7.89609 2.32039ZM7.50909 7.55083C7.12709 7.69251 7.07921 7.72451 6.66646 8.1137C5.96328 8.77676 5.77721 9.78464 6.19428 10.6713C6.36084 11.0255 9.4824 14.2076 9.79658 14.3436C9.97052 14.4188 10.0289 14.419 10.2028 14.3443C10.317 14.2953 11.1341 13.5217 12.0688 12.5778C13.5964 11.035 13.743 10.868 13.872 10.5235C14.0741 9.98401 14.0661 9.30489 13.8523 8.83783C13.642 8.37839 13.131 7.84764 12.6942 7.63476C12.3972 7.49008 12.262 7.4637 11.8122 7.46245C11.1644 7.4607 10.8117 7.58233 10.3323 7.97283L9.99208 8.24989L9.73777 8.02014C9.1479 7.48726 8.21177 7.29014 7.50909 7.55083ZM8.60502 8.68414C8.70177 8.72095 8.99571 8.96001 9.25815 9.21539C9.69383 9.63933 9.75758 9.67976 9.99083 9.67976C10.2241 9.67976 10.2921 9.63664 10.7729 9.18376C11.1623 8.81695 11.359 8.67664 11.5281 8.64495C12.1639 8.52564 12.7011 8.8897 12.8398 9.53389C12.9368 9.98483 12.8353 10.128 11.382 11.5906L10.0111 12.9703L8.63052 11.5978C7.48484 10.4589 7.23846 10.1826 7.18227 9.97383C6.9609 9.15176 7.81015 8.38195 8.60502 8.68414Z"/>
                                        </svg>
                                    </div>
                                    <div className={classes.AddGif} onClick={() => {}}><svg width="25" height="11" viewBox="0 0 25 11" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.877046 0.207639C0.684586 0.319345 0.416729 0.571627 0.281808 0.768353L0.0366694 1.12599L0.00700633 4.90327C-0.00936272 6.98075 0.00393129 8.82659 0.0366694 9.00506C0.104824 9.37778 0.582007 9.96329 0.988951 10.1737C1.21425 10.2902 1.8459 10.3172 4.32238 10.3159C7.30056 10.3143 7.38776 10.3086 7.76732 10.0927C8.01008 9.95446 8.24361 9.70635 8.38736 9.43383C8.60572 9.01984 8.61802 8.89444 8.61802 7.07768V5.15873H7.32834H6.03865V6.44841V7.73809H4.30254H2.56643V5.15873V2.57936H5.59223H8.61802V1.96587C8.61802 1.14216 8.34213 0.575298 7.78131 0.246627L7.36048 0L4.29381 0.00228201C1.38598 0.00446455 1.20899 0.0150796 0.877046 0.207639ZM11.1974 5.15873V10.3175H12.4871H13.7767V5.15873V0H12.4871H11.1974V5.15873ZM16.4553 5.15873V10.3175H17.745H19.0347V8.58135V6.84524H20.7738H22.5129L22.4851 5.58036L22.4573 4.31548L20.746 4.28829L19.0347 4.26121V3.42024V2.57936H21.614H24.1934V1.28968V0H20.3244H16.4553V5.15873Z"/>
                                        </svg>
                                    </div>
                                </div>
                                <CSSTransition
                                    in={open} 
                                    unmountOnExit 
                                    timeout={500} 
                                    classNames="gifPanel"
                                >
                                    <div></div>
                                </CSSTransition>
                            </div>
                        </form>
                    </div>
                </div>
            </CSSTransition>
            <div className={classes.Button} onClick={() => setOpen(true)}>
                +
            </div>
            <CSSTransition
                in={open}
                unmountOnExit
                timeout={300}
                classNames="createContent"
            >
                <PopUp active={open} setOpen={closeAll} >
                    <div className={classes.ActionPanel}>
                        <div className={classes.ContentType} onClick={() => setOpenCreateStoryPanel(true)}>
                            <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/><path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/><path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/></svg></div>
                            Создать историю
                        </div>
                        <div className={classes.ContentType} onClick={() => setOpenCreatePostPanel(true)}>
                        <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/></svg></div>
                            Создать пост
                        </div>
                        <div className={classes.ContentType} onClick={() => setOpenCreateGettPanel(true)}>
                            <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/><path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/><path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/></svg></div>
                            Создать Gett (?)
                        </div>
                        <CSSTransition
                                in={openCreateGettPanel}
                                unmountOnExit
                                timeout={300}
                                classNames="createPanel"
                            >
                            <div className={classes.CreatePanel}>
                                asff
                            </div>
                        </CSSTransition>
                    </div>
                </PopUp>
            </CSSTransition>
        </div>
    )
}

export default CreateContent