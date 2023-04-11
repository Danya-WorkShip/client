import React from 'react'
import classes from './FeedUpperPart.module.scss';
import StoriesBar from './StoriesBar/StoriesBar';
import UpperBar from './UpperBar/UpperBar';
import storyPreview from '../../../images/girl.jpg';
import CreateContent from './CreateContent/CreateContent';
import avatar from '../../../images/kendrick.png';

const FeedUpperPart = () => {
  
  const Stories = [
    {id: 1, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 2, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 3, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 4, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
    {id: 5, user_id: 145, text: 'Привет!', preview: storyPreview, video: 'asjfqahgf.mp4'},
  ]

  const user = {
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
  }

  return (
    <div className={classes.FeedUpperPart}>
        <UpperBar />
        <StoriesBar stories={Stories}/>
        <CreateContent user={user} />
    </div>
  )
}

export default FeedUpperPart