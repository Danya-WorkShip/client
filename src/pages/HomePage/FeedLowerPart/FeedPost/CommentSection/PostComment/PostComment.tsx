import React, { FC, useState } from 'react'
import classes from './PostComment.module.scss';
import { IComment, IUser } from '../../../../../../types/types';
import { CSSTransition } from 'react-transition-group';
import ContextMenu from './../../../../../../components/ContextMenu/ContextMenu';

interface IPostComment {
    user: IUser
    comment: IComment
}

const PostComment: FC<IPostComment> = ({user, comment}) => {

  const initialContextMenu = {
    show: false,
    x: 0,
    y: 0
  }

  const [contextMenu, setContextMenu] = useState(initialContextMenu)

  const contextMenuOpen = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      e.preventDefault()
      const {pageX, pageY} = e
      setContextMenu({show: !contextMenu.show, x: pageX, y: pageY})
  }

  const contextMenuClose = () => setContextMenu({
      show: false,
      x: contextMenu.x,
      y: contextMenu.y
  })

  return (
    <div className={classes.Comment} onContextMenu={contextMenuOpen}>
        <CSSTransition
          in={contextMenu.show}
          unmountOnExit 
          timeout={300}
          classNames="contextMenu"
        >
          <ContextMenu x={contextMenu.x} y={contextMenu.y} closeContextMenu={contextMenuClose}>
            <ul className={classes.ContextButtons}>
              <li className={classes.ContextVariant}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/></svg>
                Ответить
              </li>
              <li className={classes.ContextVariant}>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 30.9375C12.6709 30.9375 8.9987 29.4164 6.29115 26.7089C3.58359 24.0013 2.0625 20.3291 2.0625 16.5C2.0625 12.6709 3.58359 8.9987 6.29115 6.29115C8.9987 3.58359 12.6709 2.0625 16.5 2.0625C20.3291 2.0625 24.0013 3.58359 26.7089 6.29115C29.4164 8.9987 30.9375 12.6709 30.9375 16.5C30.9375 20.3291 29.4164 24.0013 26.7089 26.7089C24.0013 29.4164 20.3291 30.9375 16.5 30.9375ZM16.5 33C20.8761 33 25.0729 31.2616 28.1673 28.1673C31.2616 25.0729 33 20.8761 33 16.5C33 12.1239 31.2616 7.92709 28.1673 4.83274C25.0729 1.73839 20.8761 0 16.5 0C12.1239 0 7.92709 1.73839 4.83274 4.83274C1.73839 7.92709 0 12.1239 0 16.5C0 20.8761 1.73839 25.0729 4.83274 28.1673C7.92709 31.2616 12.1239 33 16.5 33V33Z" fill="white"/><path d="M22.7273 10.2727C22.641 10.1863 22.5386 10.1177 22.4258 10.0709C22.313 10.0241 22.1921 10 22.07 10C21.9479 10 21.8269 10.0241 21.7142 10.0709C21.6014 10.1177 21.4989 10.1863 21.4127 10.2727L10.2723 21.4132C10.1859 21.4995 10.1175 21.602 10.0708 21.7147C10.024 21.8275 10 21.9484 10 22.0705C10 22.1925 10.024 22.3134 10.0708 22.4262C10.1175 22.539 10.1859 22.6414 10.2723 22.7277C10.4466 22.9021 10.683 23 10.9295 23C11.0516 23 11.1725 22.976 11.2853 22.9292C11.398 22.8825 11.5005 22.8141 11.5868 22.7277L22.7273 11.5873C22.8137 11.5011 22.8823 11.3986 22.9291 11.2858C22.9759 11.1731 23 11.0521 23 10.93C23 10.8079 22.9759 10.687 22.9291 10.5742C22.8823 10.4614 22.8137 10.359 22.7273 10.2727V10.2727Z" fill="white"/></svg>
                Не показывать
              </li>
              <li className={classes.ContextVariantRed}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/></svg>
                Пожаловаться
              </li>
            </ul>
          </ContextMenu>
        </CSSTransition>
        <div className={classes.CommentInfo}>
            <div className={classes.Avatar}><img src={user.avatar} alt="" /></div>
            <div className={classes.CenterPart}>
                <div className={classes.CreatorName}>{user.name}</div>
                <div className={classes.CreatorId}>#{user.id_name}</div>
                <div className={classes.CommentText}><span>{comment.text}</span></div>
            </div>
        </div>
    </div>
  )
}

export default PostComment