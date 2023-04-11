import React, { FC, useRef, useState } from 'react'
import classes from './UpperPart.module.scss';
import { CSSTransition } from 'react-transition-group';
import { IUser } from './../../../types/types';
import { useOnClickOutside } from './../../../utils/hooks/useOnClickOutside';
import FollowingUserItem from './ProfileCountsPopUps/FollowingUserItem/FollowingUserItem';
import PopUp from '../../../components/PopUp/PopUp';
import PostUserlistItem from './ProfileCountsPopUps/UserListPostItem/PostUserlistItem';

interface IUpperPart {
    user: IUser
}

const UpperPart: FC<IUpperPart> = ({user}) => {
    const [open,setOpen] = useState(false)
    const [openFollowsList,setOpenFollowsList] = useState(false)
    const [openFollowersList,setOpenFollowersList] = useState(false)
    const [openPostsList,setOpenPostsList] = useState(false)
    const [openDropdown,setOpenDropdown] = useState(false)
    const [isEdditModeOn, setIsEdditModeOn] = useState(false)
    const [isMouseDown, setIsMouseDown] = useState(false)
    const isUserOwnerProfile = false
    const menuRef = useRef<HTMLDivElement>(null)

    const closeMenu = () => {
        setOpenDropdown(false)
    }

    useOnClickOutside(menuRef, closeMenu)

    return (
        <div className={classes.UpperPart}>
            <div className={classes.UpperContent}>
                <div className={classes.ProfileAvatar}>
                    <div className={classes.Avatar} onMouseOver={() => isEdditModeOn ? setIsMouseDown(true) : {}} onMouseOut={() => isEdditModeOn ? setIsMouseDown(false) : {}}>
                        <div className={classes.UpdateAvatarHover + ` ${isMouseDown && classes.ActiveAvatarHover}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/><path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/></svg>
                        </div>
                        <img src={user.avatar} alt=""/>
                    </div>
                </div>
                <div className={classes.ProfileInformation}>
                    <div className={classes.UpperInfoPart}>
                        <div className={classes.Username}><input type="text" defaultValue={user.name} disabled={!isEdditModeOn}/></div>
                        <div className={classes.Actions}>
                            {!isUserOwnerProfile && <div className={classes.Follow}>Подписаться</div>}
                            {!isUserOwnerProfile && <div className={classes.SendMessage}><svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.8061 1.00361C11.511 1.20152 9.58355 1.73661 7.7033 2.69797C4.27313 4.45171 1.78219 7.26579 0.642143 10.6753C-0.0687143 12.8011 -0.19212 15.1116 0.2856 17.3486C0.689322 19.2391 1.59699 21.1493 2.84848 22.7422L3.19757 23.1865L2.26871 27.0416C1.75784 29.1619 1.33909 30.931 1.33815 30.9731C1.33722 31.0151 3.00404 30.1822 5.04219 29.1223C7.09966 28.0523 8.78966 27.2087 8.84177 27.2257C8.89335 27.2425 9.21286 27.3561 9.55174 27.4782C15.408 29.5879 22.123 28.0723 26.3051 23.6969C28.2655 21.6458 29.4374 19.3143 29.8945 16.5553C30.0352 15.7064 30.0352 13.6815 29.8945 12.8326C29.4374 10.0737 28.2655 7.74217 26.3051 5.69105C23.7473 3.015 20.2272 1.36886 16.3294 1.02607C15.6751 0.968518 14.3499 0.956678 13.8061 1.00361ZM17.1509 2.96893C18.9251 3.25216 20.4568 3.76478 21.8747 4.55002C27.0133 7.39572 29.381 12.7746 27.7636 17.9284C26.508 21.929 22.8419 25.1378 18.3202 26.1936C17.0855 26.4819 16.364 26.56 14.9504 26.5588C12.6773 26.5568 11.2993 26.259 8.8606 25.2428C8.67142 25.1639 8.62975 25.1826 6.34537 26.3699C5.06784 27.034 4.01135 27.5657 3.99768 27.5514C3.98395 27.5371 4.23575 26.4324 4.5572 25.0964L5.14172 22.6673L4.7279 22.2049C2.17559 19.3531 1.19286 15.6171 2.07067 12.1034C3.25824 7.34995 7.61962 3.673 12.9259 2.95166C14.0016 2.80544 14.0223 2.80434 15.2438 2.82649C15.999 2.84016 16.6474 2.88862 17.1509 2.96893Z"></path></svg></div>}
                            <div className={classes.MoreActions} onClick={() => setOpenDropdown(!openDropdown)} ref={menuRef}>
                                <svg width="13" height="8" viewBox="0 0 13 8" fill='white' xmlns="http://www.w3.org/2000/svg"><path d="M0.702456 0.0251816C0.369723 0.105885 0.0893142 0.394855 0.0196657 0.728797C-0.0219877 0.928575 0.00224912 1.11851 0.0950343 1.31915C0.146808 1.43111 0.322057 1.61039 2.99437 4.28523C4.55868 5.85102 5.87696 7.15692 5.92387 7.18723C6.18582 7.35646 6.52286 7.37527 6.81942 7.23722C6.93111 7.18523 7.11718 7.00334 9.78551 4.33753C11.3513 2.77322 12.6572 1.45494 12.6875 1.40803C12.9191 1.04957 12.866 0.579142 12.5594 0.272517C12.2748 -0.0120717 11.8864 -0.0780351 11.5128 0.0947933C11.401 0.146475 11.2388 0.304527 8.90485 2.63645L6.41609 5.123L3.92733 2.63645C1.59333 0.304527 1.43117 0.146475 1.31941 0.0947933C1.1143 -8.17466e-05 0.904288 -0.0237867 0.702456 0.0251816Z"></path></svg>
                                {openDropdown && <ul className={classes.Menu}>
                                <li className={classes.MenuAction}>Заблокировать</li>
                                <li className={classes.MenuAction}>Пожаловаться</li>
                                <li className={classes.MenuAction}>Скопировать URL профиля</li>
                                <li className={classes.MenuAction}>Поделиться профилем</li>
                            </ul>}
                            </div>
                            {isUserOwnerProfile && 
                            <div className={classes.EditProfile} 
                                onClick={() => setIsEdditModeOn(!isEdditModeOn)}
                                style={isEdditModeOn ? {background: 'rgba(255, 255, 255, 0.3)', transform: 'scale(1.1,1.1)'} : {}}
                            ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg></div>}
                        </div>
                    </div>
                    <div className={classes.Status}>
                        <input type="text" defaultValue={user.status} disabled={!isEdditModeOn}/>
                    </div>
                    <div className={classes.Counts}>
                        <div className={classes.Posts} onClick={() => {setOpenPostsList(true); console.log(openPostsList)}}><h4>1645</h4><span>Постов</span></div>
                        <div className={classes.Followers} onClick={() => {setOpenFollowersList(true); console.log(openFollowersList)}}><h4>83 535</h4><span> Подписчиков</span></div>
                        <div className={classes.Follows} onClick={() => {setOpenFollowsList(true); console.log(openFollowsList)}}><h4>935</h4><span>Подписок</span></div>
                    </div>
                </div>
            </div>
            <div className={classes.MoreInfo} onClick={() => {setOpen(!open)}}>{(open && 'Скрыть подробную информацию') || 'Подробная информация'}</div>
            <CSSTransition
                in={open} 
                unmountOnExit 
                timeout={500} 
                classNames="description"
            >
                <div className={classes.MoreInformationActive}>
                    <div className={classes.MoreInformationText}>
                        <input type="text" defaultValue={user.description} disabled={!isEdditModeOn}/>
                    </div>
                </div>
            </CSSTransition>
            <div className={classes.Showcase}>
                <img src="https://thumbs.gfycat.com/AllDevotedBurro-size_restricted.gif" alt="" />
            </div>
            <CSSTransition
                in={openPostsList} 
                unmountOnExit 
                timeout={500} 
                classNames="ListPopup"
            >
                <PopUp active={openPostsList} setOpen={setOpenPostsList}>
                    <div className={classes.PopUpList}>
                        <div className={classes.Title}><h4>Посты</h4></div>
                        <div className={classes.Search}>
                            <div className={classes.SearchIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></div>
                            <input type="text" />
                        </div>
                        <div className={classes.List}>
                            <PostUserlistItem user={user}/>
                            <PostUserlistItem user={user}/>
                            <PostUserlistItem user={user}/>
                            <PostUserlistItem user={user}/>
                            <PostUserlistItem user={user}/>
                            <PostUserlistItem user={user}/>
                            <PostUserlistItem user={user}/>
                            <PostUserlistItem user={user}/>
                            <PostUserlistItem user={user}/>
                            <PostUserlistItem user={user}/>
                        </div>
                    </div>
                </PopUp>
            </CSSTransition>
            <CSSTransition
                in={openFollowersList} 
                timeout={500} 
                unmountOnExit 
                classNames="ListPopup"
            >
                <PopUp active={openFollowersList} setOpen={setOpenFollowersList}>
                    <div className={classes.PopUpList}>
                        <div className={classes.Title}><h4>Посты</h4></div>
                        <div className={classes.Search}>
                            <div className={classes.SearchIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></div>
                            <input type="text" />
                        </div>
                        <div className={classes.List}>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                        </div>
                    </div>
                </PopUp>
            </CSSTransition>
            <CSSTransition
                in={openFollowsList} 
                unmountOnExit 
                timeout={500} 
                classNames="ListPopup"
            >
                <PopUp active={openFollowsList} setOpen={setOpenFollowsList}>
                    <div className={classes.PopUpList}>
                        <div className={classes.Title}><h4>Посты</h4></div>
                        <div className={classes.Search}>
                            <div className={classes.SearchIcon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></div>
                            <input type="text" />
                        </div>
                        <div className={classes.List}>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                            <FollowingUserItem user={user}/>
                        </div>
                    </div>
                </PopUp>
            </CSSTransition>
            
        </div>
    )
}

export default UpperPart