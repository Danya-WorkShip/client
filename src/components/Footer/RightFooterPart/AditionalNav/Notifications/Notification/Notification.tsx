import React, { FC } from 'react'
import { INotification } from '../../../../../../types/types';
import classes from './Notification.module.scss';
import { IUser } from './../../../../../../types/types';
import { Link } from 'react-router-dom';

interface INotificationComp {
    notification: INotification
    user: IUser 
}

const Notification: FC<INotificationComp> = ({notification, user}) => {

    return (
        <div className={classes.Notification}>
            <div className={classes.Content}>
                <Link to='profile/megabebrick'><div className={classes.Avatar}><img src={user.avatar} alt="" /></div></Link>
                <div className={classes.RightPart}>
                    <Link to='profile/megabebrick'><div className={classes.Name}>{user.name}</div></Link>
                    <div className={classes.Text}>{notification.text}</div>
                    <div className={classes.TimeStamp}>{notification.timeStamp}</div>
                    <div className={classes.Action}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification