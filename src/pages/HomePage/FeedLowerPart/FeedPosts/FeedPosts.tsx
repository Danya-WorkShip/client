import React, { FC, useState } from 'react'
import classes from './FeedPosts.module.scss';
import { IPost, IUser } from './../../../../types/types';
import FeedPost from './../FeedPost/FeedPost';

interface IFeedPosts {
    posts: IPost[]
    users: IUser[]
}

interface ILikedPost {
  post_id: number
  likes_count: number
  isLiked: boolean
}

const FeedPosts: FC<IFeedPosts> = ({posts,users}) => {

  const [likedPostsArr, setLikedPostsArr] = useState<ILikedPost[]>([])

  return (
    <div className={classes.FeedPosts}>
        {posts.map((post, id) => {
            return <FeedPost key={'post' + id + 'Gett'} post={post} user={users[post.user_id]} likedPostsArr={likedPostsArr} setLikedPostsArr={setLikedPostsArr}/>
        })}
    </div>
  )
}

export default FeedPosts