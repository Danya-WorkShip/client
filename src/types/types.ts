// Пользователь

export interface IUser {
    id: number,
    email: string
    password: string
    avatar: string
    name: string
    id_name: string
    status: string
    description: string
    showcase_id: number
    is_photo_profile: boolean
    is_activated: boolean
    activation_link: string
    role_id: number
    is_banned: boolean
    ban_reason: string
    is_closed_profile: boolean
    is_disabled_commenting_my_posts: boolean
    who_can_tag_me: number
    who_can_send_me_messages: number
    is_notifications_enabled: boolean
    show_notification_message_text: boolean
}

// Плейлист

export interface IPlaylist {
    id: number
    name: string
    cover: string
    artist_id: number
    listens: number
}

// Трек

export interface ITrack {
    id: number
    cover: string
    name: string
    artist_id: number
    audio: string
    playlist_id: number
    listens: number
}

// Исполнитель

export interface IArtist {
    id: number
    user_id: number
    name: string
    avatar: string
    artist_preview_image: string
    description: string
    followers: number
}

// Пост

export interface IPost {
    id: number
    user_id: number
    is_pinned_post: boolean
    text: string
    album_id: number
    mentioned_user_id: number
    likes_count: number
    shares_count: number
    shared_post_id: number
    views: number
    pub_date: string
    image_id: number
} 

// Комментарий

export interface IComment {
    id: number
    post_id: number
    user_id: number
    text: string
    album_id: number
}

// Гетт Пост

export interface IGettPost {
    id: number
    user_id: number
    description: string
    tags: string
    school: string
}

// Пост Лайк

export interface IPostLike {
    id: number
    post_id: number
    user_id: number
}

// Изображение Гетт Поста

export interface IGettPostImage {
    id: number
    post_id: number
    path: string
    resolution: string
    height: number
    width: number
}

// История

export interface IStory {
    id: number
    user_id: number
    text: string
    preview: string
    video: string
}

//Сообщение

export interface IMessage {
    id: number
    chat_id: number
    user_id: number
    text: string
    reply_message_id: number
    shared_post_id: number
}

// Уведомление

export interface INotification {
    id: number
    user_id: number
    text: string
    timeStamp: string
    action: number
}