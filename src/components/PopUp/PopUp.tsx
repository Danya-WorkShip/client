import React, { FC } from 'react'
import classes from './PopUp.module.scss';

interface IPopUp {
    children: React.ReactNode
    active: boolean
    setOpen: Function
} 

const PopUp: FC<IPopUp> = ({active, children, setOpen}) => {

    active ? document.body.classList.add('active-modal') : document.body.classList.remove('active-modal')

    return (
        <div className={classes.PopUp} onClick={() => setOpen()}>
            <div className={classes.LeftTrigger}></div>
            <div className={classes.popUpContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            <div className={classes.RightTrigger}></div>
        </div>
    )
}

export default PopUp