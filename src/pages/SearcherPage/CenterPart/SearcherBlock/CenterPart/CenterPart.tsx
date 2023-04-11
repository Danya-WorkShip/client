import React, { FC, useState } from 'react'
import { IGettPost, IGettPostImage, IUser } from '../../../../../types/types';
import classes from './CenterPart.module.scss';
import FindTag from './FindTag/FindTag';
import PhotoLoad from '../../../../../images/PhotoLoad.png';

interface ICenterPart {
  gettPosts: IGettPost[]
  gettPostsImages: IGettPostImage[]
  user: IUser
}

const CenterPart: FC<ICenterPart> = ({gettPosts, gettPostsImages, user}) => {
  const [isGoodImgCond, setIsGoodImgCond] = useState(false)

  const uploadAvatar = (e: React.ChangeEvent<HTMLInputElement>, elementId: string) => {
    const imgElement= document.getElementById(elementId)

    if (!e.target.files?.length) {
      return
    } else {
      const files = Array.from(e.target.files)
      files.forEach(file => {
        if (!file.type.match('image')) {
            return
        } else {
            const reader = new FileReader();
            const img = new Image();
            reader.onload = e => {
                img.onload = function() {
                    if (img.width <= 400 && img.height <= 400) {
                        setIsGoodImgCond(false)
                        console.log(isGoodImgCond)
                    }
                    imgElement?.setAttribute('src', `${e.target?.result}`);
                }
                img.src = `${e.target?.result}`;
            }
    
            reader.readAsDataURL(file)
        }
      })
    }
  }

  return (
    <div className={classes.CenterPart}>
      <FindTag />
      <div className={classes.Avatar}><img src={user.avatar} alt="" /></div>
      <div className={classes.Name}>{user.name}</div>
      <div className={classes.Description}><input type="text" placeholder='Напишите что/кого вы ищите'/></div>
      <div className={classes.Images}>
        <div className={classes.Image}>
          <input type="file" onChange={e => uploadAvatar(e, 'img1')}/>
          <img src={PhotoLoad} alt="" id='img1'/>
        </div>
        <div className={classes.Image}>
          <input type="file" onChange={e => uploadAvatar(e, 'img2')}/>
          <img src={PhotoLoad} alt="" id='img2'/>
        </div>
        <div className={classes.Image}>
          <input type="file" onChange={e => uploadAvatar(e, 'img3')}/>
          <img src={PhotoLoad} alt="" id='img3'/>
        </div>
      </div>
      <div className={classes.Tags}><input type="text" placeholder='Напишите пару тегов'/></div>
      <div className={classes.Buttons}>
        <div className={classes.FindPeople}>Искать людей</div>
        <div className={classes.CreateGett}>Опубликовать Gett</div>
      </div>
    </div>
  )
}

export default CenterPart