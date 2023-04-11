import React, { FC } from 'react'
import CenterPart from './CenterPart/CenterPart';
import classes from './SearcherBlock.module.scss';
import { IGettPost, IGettPostImage, IUser } from '../../../../types/types';

interface ISearcherBlock {
  gettPosts: IGettPost[]
  gettPostsImages: IGettPostImage[]
  user: IUser
}

const SearcherBlock: FC<ISearcherBlock> = ({gettPosts, gettPostsImages, user}) => {
  return (
    <div className={classes.SearcherBlock}>
        <CenterPart gettPosts={gettPosts} gettPostsImages={gettPostsImages} user={user}/>
    </div>
  )
}

export default SearcherBlock