import React, { FC, useState } from 'react'
import { IUser } from '../../../types/types';
import classes from './RepostProfile.module.scss';
import { CSSTransition } from 'react-transition-group';

interface IRepostPopUp {
    user: IUser
}

const RepostProfile: FC<IRepostPopUp> = ({user}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={classes.RepostProfile} onClick={()=>setOpen(true
    
    )}>
        <CSSTransition
                in={open}
                unmountOnExit 
                timeout={300}
                classNames="popUp"
        >
          <div className={classes.PopUp}>
            asfasgfafffffffffffffffffffffffffffffffffff
          </div>
        </CSSTransition>
        <div className={classes.Avatar}><img src={user.avatar} alt="" /></div>
        <div className={classes.Name}>{user.name}</div>
    </div>
  )
}

export default RepostProfile