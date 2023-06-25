import React, { FC, useState } from 'react'
import classes from './Album.module.scss';
import { IPlaylist } from '../../types/types';
import { CSSTransition } from 'react-transition-group';
import ContextMenu from '../ContextMenu/ContextMenu';
import { Link } from 'react-router-dom';

interface IAlbum {
  playlist: IPlaylist
}

const Album: FC<IAlbum> = ({playlist}) => {

  const initialContextMenu = {
    show: false,
    x: 0,
    y: 0
  }

  const contextMenuOpen = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      e.preventDefault()
      const {pageX, pageY} = e
      setContextMenu({show: !contextMenu.show, x: pageX, y: pageY})
  }

  const [contextMenu, setContextMenu] = useState(initialContextMenu)

  const contextMenuClose = () => setContextMenu({
      show: false,
      x: contextMenu.x,
      y: contextMenu.y
  })

  return (
    <Link to={`/playlist/${playlist.id}`} title={playlist.name}>
      <div className={classes.Album} onContextMenu={contextMenuOpen}>
        <CSSTransition
            in={contextMenu.show}
            unmountOnExit 
            timeout={300}
            classNames="contextMenu"
        >
          <ContextMenu x={contextMenu.x} y={contextMenu.y} closeContextMenu={contextMenuClose}>
              <ul className={classes.Actions} onClick={e => e.stopPropagation()}>
                  <li className={classes.Action}>
                      <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg></div>
                      В любимые
                  </li>
                  <li className={classes.Action}>
                      <div className={classes.Icon}><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.05954 1.0108C5.08146 1.00107 5.10546 0.997053 5.12932 0.999116C5.15318 1.00118 5.17615 1.00925 5.19611 1.0226C5.21607 1.03594 5.23238 1.05413 5.24354 1.07549C5.2547 1.09685 5.26036 1.12069 5.25999 1.14483V2.29815C5.25999 2.4308 5.31227 2.55801 5.40532 2.6518C5.49837 2.7456 5.62457 2.79829 5.75616 2.79829C6.41804 2.79829 7.75372 2.80329 9.03085 3.62052C10.0073 4.24469 11.0056 5.381 11.6059 7.49759C10.5938 6.51432 9.43771 5.98117 8.42553 5.69809C7.80338 5.52488 7.164 5.42222 6.51926 5.39201C6.25535 5.38032 5.99101 5.38299 5.72738 5.40001H5.71448L5.70952 5.40101H5.70853L5.75616 5.89915L5.70654 5.40101C5.58407 5.41342 5.47055 5.47127 5.38802 5.56332C5.3055 5.65538 5.25987 5.77507 5.25999 5.89915V7.05247C5.25999 7.1605 5.15084 7.22851 5.05954 7.1865L1.1061 4.25269C1.09268 4.24266 1.07877 4.23331 1.06442 4.22468C1.04284 4.21161 1.02499 4.19314 1.01259 4.17105C1.0002 4.14897 0.993682 4.12402 0.993682 4.09865C0.993682 4.07327 1.0002 4.04833 1.01259 4.02625C1.02499 4.00416 1.04284 3.98568 1.06442 3.97261C1.07877 3.96399 1.09268 3.95465 1.1061 3.94461L5.05954 1.0108ZM6.25232 6.38528C6.3198 6.38528 6.39423 6.38828 6.47361 6.39128C6.90429 6.41129 7.49968 6.47731 8.16058 6.66236C9.47641 7.03046 11.0344 7.86469 12.0704 9.74321C12.1264 9.84461 12.2157 9.92321 12.3229 9.96555C12.4301 10.0079 12.5486 10.0113 12.658 9.97524C12.7674 9.93918 12.861 9.86587 12.9227 9.76787C12.9844 9.66988 13.0104 9.5533 12.9962 9.43812C12.5358 5.7271 11.1247 3.77456 9.56274 2.77628C8.32729 1.98607 7.05512 1.83402 6.25232 1.80502V1.14483C6.25242 0.938845 6.19735 0.736652 6.09293 0.559586C5.9885 0.382521 5.8386 0.237151 5.65904 0.138814C5.47948 0.040478 5.27691 -0.00717803 5.07272 0.000874986C4.86852 0.00892801 4.67027 0.0723913 4.49888 0.184569L0.535506 3.12538C0.371653 3.22848 0.236523 3.37191 0.142839 3.54218C0.0491557 3.71245 0 3.90395 0 4.09865C0 4.29335 0.0491557 4.48485 0.142839 4.65512C0.236523 4.82539 0.371653 4.96882 0.535506 5.07192L4.49888 8.01273C4.67027 8.12491 4.86852 8.18837 5.07272 8.19642C5.27691 8.20448 5.47948 8.15682 5.65904 8.05848C5.8386 7.96015 5.9885 7.81478 6.09293 7.63771C6.19735 7.46065 6.25242 7.25845 6.25232 7.05247V6.38528V6.38528Z" fill="white"></path></svg></div>
                      Поделиться
                  </li>
                  <li className={classes.Action}>
                      <div className={classes.Icon}><svg style={{width: 17, height: 17}} width="41" height="49" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.297 0.545468C4.30537 1.2798 2.12913 3.34094 1.10164 5.46623C0.192658 7.34688 0.179359 7.56244 0.0502869 22.2319C-0.0971686 38.9772 -0.0869996 39.0474 2.5144 39.0474C5.06299 39.0474 5.07003 39.0023 5.07003 23.0013C5.07003 7.79194 5.09663 7.55646 7.02606 5.77662C7.82827 5.03631 8.59371 4.96659 17.9198 4.78131C23.437 4.67174 28.1517 4.44941 28.3965 4.28684C29.207 3.75014 29.3924 1.96472 28.7423 0.953871L28.1286 0L17.8705 0.0302817C10.8634 0.0510007 7.19542 0.214362 6.297 0.545468ZM12.4197 7.55447C10.6006 8.13261 8.91913 9.61761 8.1619 11.3162C7.49307 12.8171 7.43401 14.1754 7.43401 28.0902C7.43401 41.9385 7.49542 43.3669 8.15251 44.8248C9.00713 46.7206 9.87935 47.5701 11.8186 48.3956C13.0013 48.8989 15.2362 49.0068 24.3206 48.9997C34.2064 48.9917 35.5507 48.9132 36.963 48.2594C38.6727 47.4685 40.5356 45.4854 40.8739 44.0968C40.9901 43.6207 41.0339 36.1344 40.9717 27.4611L40.8583 11.6911L39.7623 10.228C37.6526 7.41103 37.495 7.38035 24.822 7.29469C18.5835 7.25245 13.0025 7.36959 12.4197 7.55447ZM13.0651 12.9171C12.3376 13.4594 12.3059 14.0897 12.3059 28.044C12.3059 41.491 12.3595 42.6593 13.0045 43.3163C13.6404 43.9646 14.6476 44.0279 24.2838 44.0279H34.865L35.6125 43.0872C36.3173 42.201 36.3603 41.3372 36.3603 28.1348C36.3603 16.0979 36.2747 13.9981 35.7513 13.2375C35.1474 12.3589 35.0547 12.3517 24.4833 12.3517C15.8953 12.3517 13.6768 12.4617 13.0651 12.9171Z" fill="white"></path></svg></div>
                      Копировать ссылку
                  </li>
                  <li className={classes.Action} style={{color: '#fb3737'}}>
                      <div className={classes.Icon} style={{opacity: 1}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg></div>
                      Удалить
                  </li>
              </ul>
          </ContextMenu>
        </CSSTransition>
        <div className={classes.albomImg}><img src={playlist.cover} alt="" /></div>
        <div className={classes.albomInfo}>
          <div className={classes.name}>{playlist.name}</div>
        </div>
      </div>
    </Link>
  )
}

export default Album