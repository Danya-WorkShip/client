import React, { FC } from 'react'
import SearcherBlock from './SearcherBlock/SearcherBlock';
import classes from './CenterPart.module.scss';
import { IGettPost, IGettPostImage, IUser } from '../../../types/types';
import PostImage from '../../../images/goodPlaylist.jpg';

interface ICenterPart {
  user: IUser
}

const CenterPart: FC<ICenterPart> = ({user}) => {
  const gettPosts: IGettPost[] = [
    {id: 1, user_id: 1, description: 'Ищу крутую компанию', tags: '#компания #москва', school: 'ГБОУ Лицей Вторая школа имени В. Ф. Овчинникова, Москва'},
    {id: 2, user_id: 1, description: 'Ищу крутую компанию', tags: '#компания #москва', school: 'ГБОУ Лицей Вторая школа имени В. Ф. Овчинникова, Москва'},
    {id: 3, user_id: 1, description: 'Ищу крутую компанию', tags: '#компания #москва', school: 'ГБОУ Лицей Вторая школа имени В. Ф. Овчинникова, Москва'},
    {id: 4, user_id: 1, description: 'Ищу крутую компанию', tags: '#компания #москва', school: 'ГБОУ Лицей Вторая школа имени В. Ф. Овчинникова, Москва'},
    {id: 5, user_id: 1, description: 'Ищу крутую компанию', tags: '#компания #москва', school: 'ГБОУ Лицей Вторая школа имени В. Ф. Овчинникова, Москва'},
    {id: 6, user_id: 1, description: 'Ищу крутую компанию', tags: '#компания #москва', school: 'ГБОУ Лицей Вторая школа имени В. Ф. Овчинникова, Москва'},
    {id: 7, user_id: 1, description: 'Ищу крутую компанию', tags: '#компания #москва', school: 'ГБОУ Лицей Вторая школа имени В. Ф. Овчинникова, Москва'},
  ]
  
  const gettPostsImages: IGettPostImage[] = [
    {id: 1, post_id: 1, path: PostImage, resolution: '1900/1200', height: 1200, width: 1900},
    {id: 2, post_id: 2, path: PostImage, resolution: '1900/1200', height: 1200, width: 1900},
    {id: 3, post_id: 3, path: PostImage, resolution: '1900/1200', height: 1200, width: 1900},
    {id: 4, post_id: 4, path: PostImage, resolution: '1900/1200', height: 1200, width: 1900},
    {id: 5, post_id: 5, path: PostImage, resolution: '1900/1200', height: 1200, width: 1900},
    {id: 6, post_id: 6, path: PostImage, resolution: '1900/1200', height: 1200, width: 1900},
    {id: 7, post_id: 7, path: PostImage, resolution: '1900/1200', height: 1200, width: 1900},
  ]
  
  return (
    <div className={classes.CenterPart}>
        <SearcherBlock gettPosts={gettPosts} gettPostsImages={gettPostsImages} user={user}/>
    </div>
  )
}

export default CenterPart