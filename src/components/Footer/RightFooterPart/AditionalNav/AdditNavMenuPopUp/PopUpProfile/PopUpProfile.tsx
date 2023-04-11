import React, { FC, useState } from 'react';
import classes from './PopUpProfile.module.scss';
import { CSSTransition } from 'react-transition-group';
import avatar from '../../../../../../images/kendrick.png';
import ProfileNames from '../../../FooterProfileTab/ProfileNames/ProfileNames';
import { IUser } from './../../../../../../types/types';
import { Link } from 'react-router-dom';

const users: IUser[] = [
  {
    id: 1,
    email: 'qwerty@gmail.com',
    password: 'qwerty123',
    avatar: avatar,
    name: 'DuffGirl',
    id_name: 'ongod',
    status: 'hiii meeen',
    description: 'string',
    showcase_id: 1,
    is_photo_profile: true,
    is_activated: true,
    activation_link: 'aAIJSFHloaISgguasPASaGFaspgj',
    role_id: 0,
    is_banned: false,
    ban_reason: '',
    is_closed_profile: false,
    is_disabled_commenting_my_posts: false,
    who_can_tag_me: 0,    // 0 - все , 1 - только подписчики, 2 -только я
    who_can_send_me_messages: 0,
    is_notifications_enabled: true,
    show_notification_message_text: true,
  },
  {
    id: 2,
    email: 'qwerty@gmail.com',
    password: 'qwerty123',
    avatar: avatar,
    name: 'lupuwellness',
    id_name: 'lupuwellness',
    status: 'hiii meeen',
    description: 'string',
    showcase_id: 1,
    is_photo_profile: true,
    is_activated: true,
    activation_link: 'aAIJSFHloaISgguasPASaGFaspgj',
    role_id: 0,
    is_banned: false,
    ban_reason: '',
    is_closed_profile: false,
    is_disabled_commenting_my_posts: false,
    who_can_tag_me: 0,    // 0 - все , 1 - только подписчики, 2 -только я
    who_can_send_me_messages: 0,
    is_notifications_enabled: true,
    show_notification_message_text: true,
  },
  {
    id: 3,
    email: 'qwerty@gmail.com',
    password: 'qwerty123',
    avatar: avatar,
    name: 'MagaNaprogibkiday',
    id_name: 'ongod',
    status: 'hiii meeen',
    description: 'string',
    showcase_id: 1,
    is_photo_profile: true,
    is_activated: true,
    activation_link: 'aAIJSFHloaISgguasPASaGFaspgj',
    role_id: 0,
    is_banned: false,
    ban_reason: '',
    is_closed_profile: false,
    is_disabled_commenting_my_posts: false,
    who_can_tag_me: 0,    // 0 - все , 1 - только подписчики, 2 -только я
    who_can_send_me_messages: 0,
    is_notifications_enabled: true,
    show_notification_message_text: true,
  },
]

interface IAccount {
  user: IUser
}

interface IAccounts {
  users: IUser[]
}

const PopUpProfile = () => {
  const [open, setOpen] = useState(false)

  const getTruncatedString = (name: string, nameLength: number) => {
    if (name.length > nameLength) {
      return name.substring(0,nameLength) + '...';
    } else {
      return name;
    }
  }

  const AccountItem: FC<IAccount>  = ({user}) => {
    return(
      <div className={classes.accountItem}>
        <div className={classes.avatar}><img src={user.avatar} alt="" /></div>
        <div className={classes.names}>
          <div className={classes.accountName}>{getTruncatedString(user.name, 14)}</div>
          <div className={classes.accountId}>#{getTruncatedString(user.id_name, 14)}</div>
        </div>
      </div>
    )
  }

  const Accounts: FC<IAccounts>  = ({users}) => {
    return (
      <div className={classes.dropdownAccounts}>
        <div className={classes.title}><span>Аккаунты</span></div>
        <div className={classes.accounts}>
          {users.map((account, id) => {
            return <AccountItem key={'Gett'+id+'AccountItem'} user={account}/>
          })}
        </div>
      </div>
    )
  }

  const ProfileTab: FC<IAccount>  = ({user}) => {
        
    return (
      <Link to="/profile/megabebrick">
        <div className={classes.FooterProfileTab} >
          <img className={classes.MyImg} src={user.avatar} alt=''/>
          <ProfileNames user={user} usernameLength={user.name?.length}/>
        </div>
      </Link>
    )
  }

  return (
    <div className={classes.PopUpProfile}>
        <ProfileTab user={users[0]}/>
          <div className={classes.more_accounts_button} onClick={() => {setOpen(!open)}}>
            <svg className={ (open && classes.rotateSvg) || classes.svg} width="13" height="8" viewBox="0 0 13 8" xmlns="http://www.w3.org/2000/svg"><path d="M0.702456 0.0251816C0.369723 0.105885 0.0893142 0.394855 0.0196657 0.728797C-0.0219877 0.928575 0.00224912 1.11851 0.0950343 1.31915C0.146808 1.43111 0.322057 1.61039 2.99437 4.28523C4.55868 5.85102 5.87696 7.15692 5.92387 7.18723C6.18582 7.35646 6.52286 7.37527 6.81942 7.23722C6.93111 7.18523 7.11718 7.00334 9.78551 4.33753C11.3513 2.77322 12.6572 1.45494 12.6875 1.40803C12.9191 1.04957 12.866 0.579142 12.5594 0.272517C12.2748 -0.0120717 11.8864 -0.0780351 11.5128 0.0947933C11.401 0.146475 11.2388 0.304527 8.90485 2.63645L6.41609 5.123L3.92733 2.63645C1.59333 0.304527 1.43117 0.146475 1.31941 0.0947933C1.1143 -8.17466e-05 0.904288 -0.0237867 0.702456 0.0251816Z"/></svg>
          </div>
        <CSSTransition
          in={open}
          unmountOnExit
          timeout={500}
          classNames='accounts'
        >
          <Accounts users={users}/>
        </CSSTransition>
    </div>
  )
}

export default PopUpProfile;