import React, { FC, useState } from 'react'
import { IPlaylist, ITrack } from '../../types/types';
import classes from './Track.module.scss';
import { CSSTransition } from 'react-transition-group';
import ContextMenu from '../ContextMenu/ContextMenu';
import cover from '../../images/collegedropout.jpg'
import { getTruncatedName } from '../../utils/functions/getTruncatedName';
import TrackPanel from './TrackPanel/TrackPanel';
import { Link } from 'react-router-dom';

interface IMyTrack {
  track: ITrack
  artist: string
  playlist: string
}

const Track: FC<IMyTrack> = ({track, artist, playlist}) => {
  //static
  const playlists: IPlaylist[] = [
    {id: 1, name: "Donda", cover: cover, artist_id: 1, listens: 5000000},
    {id: 2, name: "To Pimp a Butterfly", cover: cover, artist_id: 1, listens: 5000000},
    {id: 3, name: "Section.80", cover: cover, artist_id: 1, listens: 5000000},
    {id: 4, name: "Mr. Morale & Big Steppers", cover: cover, artist_id: 1, listens: 5000000},
    {id: 5, name: "I'M A GOD", cover: cover, artist_id: 1, listens: 554},
    {id: 6, name: "Damn", cover: cover, artist_id: 1, listens: 5000000}
  ]


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
  const [openAddPlaylists, setOpenAddPlaylists] = useState(false)


  const contextMenuClose = () => {
    setContextMenu({
      show: false,
      x: contextMenu.x,
      y: contextMenu.y
    })
    setOpenAddPlaylists(false)
  }

  return (
    <div className={classes.Track} onContextMenu={contextMenuOpen}>
      <CSSTransition
          in={contextMenu.show}
          unmountOnExit 
          timeout={300}
          classNames="contextMenu"
      >
          <ContextMenu x={contextMenu.x} y={contextMenu.y} closeContextMenu={contextMenuClose}>
              <ul className={classes.Actions} onClick={e => e.stopPropagation()} style={openAddPlaylists ? {height: 500} : {}}>
                  <li className={classes.Action}>
                      <div className={classes.Icon}><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.05954 1.0108C5.08146 1.00107 5.10546 0.997053 5.12932 0.999116C5.15318 1.00118 5.17615 1.00925 5.19611 1.0226C5.21607 1.03594 5.23238 1.05413 5.24354 1.07549C5.2547 1.09685 5.26036 1.12069 5.25999 1.14483V2.29815C5.25999 2.4308 5.31227 2.55801 5.40532 2.6518C5.49837 2.7456 5.62457 2.79829 5.75616 2.79829C6.41804 2.79829 7.75372 2.80329 9.03085 3.62052C10.0073 4.24469 11.0056 5.381 11.6059 7.49759C10.5938 6.51432 9.43771 5.98117 8.42553 5.69809C7.80338 5.52488 7.164 5.42222 6.51926 5.39201C6.25535 5.38032 5.99101 5.38299 5.72738 5.40001H5.71448L5.70952 5.40101H5.70853L5.75616 5.89915L5.70654 5.40101C5.58407 5.41342 5.47055 5.47127 5.38802 5.56332C5.3055 5.65538 5.25987 5.77507 5.25999 5.89915V7.05247C5.25999 7.1605 5.15084 7.22851 5.05954 7.1865L1.1061 4.25269C1.09268 4.24266 1.07877 4.23331 1.06442 4.22468C1.04284 4.21161 1.02499 4.19314 1.01259 4.17105C1.0002 4.14897 0.993682 4.12402 0.993682 4.09865C0.993682 4.07327 1.0002 4.04833 1.01259 4.02625C1.02499 4.00416 1.04284 3.98568 1.06442 3.97261C1.07877 3.96399 1.09268 3.95465 1.1061 3.94461L5.05954 1.0108ZM6.25232 6.38528C6.3198 6.38528 6.39423 6.38828 6.47361 6.39128C6.90429 6.41129 7.49968 6.47731 8.16058 6.66236C9.47641 7.03046 11.0344 7.86469 12.0704 9.74321C12.1264 9.84461 12.2157 9.92321 12.3229 9.96555C12.4301 10.0079 12.5486 10.0113 12.658 9.97524C12.7674 9.93918 12.861 9.86587 12.9227 9.76787C12.9844 9.66988 13.0104 9.5533 12.9962 9.43812C12.5358 5.7271 11.1247 3.77456 9.56274 2.77628C8.32729 1.98607 7.05512 1.83402 6.25232 1.80502V1.14483C6.25242 0.938845 6.19735 0.736652 6.09293 0.559586C5.9885 0.382521 5.8386 0.237151 5.65904 0.138814C5.47948 0.040478 5.27691 -0.00717803 5.07272 0.000874986C4.86852 0.00892801 4.67027 0.0723913 4.49888 0.184569L0.535506 3.12538C0.371653 3.22848 0.236523 3.37191 0.142839 3.54218C0.0491557 3.71245 0 3.90395 0 4.09865C0 4.29335 0.0491557 4.48485 0.142839 4.65512C0.236523 4.82539 0.371653 4.96882 0.535506 5.07192L4.49888 8.01273C4.67027 8.12491 4.86852 8.18837 5.07272 8.19642C5.27691 8.20448 5.47948 8.15682 5.65904 8.05848C5.8386 7.96015 5.9885 7.81478 6.09293 7.63771C6.19735 7.46065 6.25242 7.25845 6.25232 7.05247V6.38528V6.38528Z" fill="white"></path></svg></div>
                      Поделиться
                  </li>
                  {/* <li className={classes.Action}>
                      <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/><path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/><path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/></svg></div>
                      Не показывать
                  </li> */}
                  <li className={classes.Action}>
                      <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/></svg></div>
                      В очередь
                  </li>
                  <li className={classes.Action} style={{color: '#fb3737'}}>
                    <div className={classes.Icon} style={{opacity: 1}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 7l16 0"></path><path d="M10 11l0 6"></path><path d="M14 11l0 6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path></svg></div>
                    Удалить
                  </li>
                  <li className={classes.Action} onClick={() => setOpenAddPlaylists(!openAddPlaylists)}>
                      <div className={classes.IconRight}><svg width="13" height="8" viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg"><path d="M0.702456 0.0251816C0.369723 0.105885 0.0893142 0.394855 0.0196657 0.728797C-0.0219877 0.928575 0.00224912 1.11851 0.0950343 1.31915C0.146808 1.43111 0.322057 1.61039 2.99437 4.28523C4.55868 5.85102 5.87696 7.15692 5.92387 7.18723C6.18582 7.35646 6.52286 7.37527 6.81942 7.23722C6.93111 7.18523 7.11718 7.00334 9.78551 4.33753C11.3513 2.77322 12.6572 1.45494 12.6875 1.40803C12.9191 1.04957 12.866 0.579142 12.5594 0.272517C12.2748 -0.0120717 11.8864 -0.0780351 11.5128 0.0947933C11.401 0.146475 11.2388 0.304527 8.90485 2.63645L6.41609 5.123L3.92733 2.63645C1.59333 0.304527 1.43117 0.146475 1.31941 0.0947933C1.1143 -8.17466e-05 0.904288 -0.0237867 0.702456 0.0251816Z"></path></svg></div>
                      Добавить в плейлист

                      <CSSTransition
                        in={openAddPlaylists}
                        unmountOnExit 
                        timeout={300}
                        classNames="addPlaylists"
                      >
                        <div className={classes.addPlaylistsPanel}>
                          <div className={classes.Playlists}>
                            {playlists.map((item, id) => {
                              return (
                                <div className={classes.Playlist} key={id+'gettPlaylist'}>
                                  <div className={classes.Cover}><img src={item.cover} alt="" /></div>
                                  <div className={classes.Name}>{getTruncatedName(item.name, 20)}</div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </CSSTransition>
                  </li>
              </ul>
          </ContextMenu>
      </CSSTransition>
      <div className={classes.Content}>
        <div className={classes.cover}><img src={track.cover} alt="" /></div>
        <div className={classes.info}>
            <div className={classes.name}>
              <span>{track.name}</span>
            </div>
            <div className={classes.artist}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/></svg>
              <span>{artist}</span>
            </div>
        </div>
        <div className={classes.album}><Link to={`/playlist/${playlists[0].id}`}>{playlist}</Link></div>
        <div className={classes.duration}><span>4:05</span></div>
        <div className={classes.actions}>
            <div className={classes.add}><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.22266 4.11133V8.22266H4.11133H0V10V11.7773H4.11133H8.22266V15.8887V20H10H11.7773V15.8887V11.7773H15.8887H20V10V8.22266H15.8887H11.7773V4.11133V0H10H8.22266V4.11133Z"/></svg></div>
            <div className={classes.more} onClick={contextMenuOpen}><svg width="15" height="4" viewBox="0 0 15 4" xmlns="http://www.w3.org/2000/svg"><path d="M1.51248 0.0094781C0.852455 0.0857467 0.300402 0.544435 0.0881191 1.19296C-0.0601529 1.6459 -0.0198989 2.15073 0.19822 2.57398C0.398755 2.96311 0.753673 3.27408 1.15396 3.41138C1.49917 3.52979 1.92142 3.52669 2.25393 3.40329C2.49279 3.31465 2.70624 3.1744 2.88059 2.99157C3.04094 2.82344 3.1095 2.72447 3.20797 2.51911C3.5972 1.70736 3.31694 0.722549 2.56258 0.251207C2.25592 0.0596006 1.86248 -0.0309683 1.51248 0.0094781ZM7.31919 0.00996903C6.87187 0.0566709 6.42913 0.31696 6.15239 0.695975C5.83948 1.12456 5.73198 1.70937 5.87204 2.22119C6.13623 3.18652 7.13467 3.72938 8.05239 3.40666C8.73419 3.16691 9.19212 2.5017 9.19212 1.75103C9.19212 1.19654 8.9478 0.685396 8.52547 0.356377C8.18234 0.0890724 7.75025 -0.0350225 7.31919 0.00996903ZM13.1342 0.00985818C12.4895 0.0838147 11.938 0.531639 11.7219 1.15674C11.6425 1.38637 11.6184 1.55762 11.6279 1.8223C11.6395 2.14299 11.7146 2.40689 11.8668 2.66178C12.3144 3.41113 13.212 3.70235 13.9964 3.35271C14.3379 3.20052 14.6376 2.90992 14.8138 2.56019C14.9483 2.29321 15 2.06851 15 1.75103C15 1.50958 14.9861 1.41324 14.9211 1.20468C14.7605 0.688848 14.3495 0.260598 13.852 0.0905769C13.6352 0.016462 13.3531 -0.0152585 13.1342 0.00985818Z"/></svg></div>
        </div>
      </div>
      <TrackPanel />
    </div>
  )
}

export default Track