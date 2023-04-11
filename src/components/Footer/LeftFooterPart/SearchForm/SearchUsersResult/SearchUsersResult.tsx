import React, { FC } from 'react';
import classes from './SearchUsersResult.module.scss';
import UsersResultItem from './UsersResultItem/UsersResultItem';
import avatar from '../../../../../images/10.png'
import PostsResultItem from './PostsResultItem/PostsResultItem';

interface ISearchUsersResult {
  value: string
}

const SearchUsersResult: FC<ISearchUsersResult> = ({value}) =>{
  const user = {name: 'myTwink', id: 'twinkhy', imgSrc: avatar}

  return (
    <div className={classes.searchPopup}>
      <div className={classes.usersResult}>
          <PostsResultItem value={value}/>
          <UsersResultItem user={user}/>
          <UsersResultItem user={user}/>
          <UsersResultItem user={user}/>
          <UsersResultItem user={user}/>
          <UsersResultItem user={user}/>
          <UsersResultItem user={user}/>
      </div>
    </div>
  )
}

export default SearchUsersResult;