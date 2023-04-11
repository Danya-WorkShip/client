import {FC, useRef, useState} from 'react';
import classes from './AdditNav.module.scss';
import DropdownMenu from './AdditNavMenuPopUp/PopUpButtons/DropdownMenu/DropdownMenu';
import { CSSTransition } from 'react-transition-group';
import Notifications from './Notifications/Notifications';
import { useOnClickOutside } from './../../../../utils/hooks/useOnClickOutside';

const AdditNav = () => {
  const [open,setOpen] = useState(false)
  const [open1,setOpen1] = useState(false)

  const ContextMenuRef1 = useRef<HTMLLIElement>(null)
  const closeMenu1 = () => {
      setOpen(false)      
  }

  const ContextMenuRef2 = useRef<HTMLLIElement>(null)
  const closeMenu2 = () => {
      setOpen1(false)
  }

  useOnClickOutside(ContextMenuRef1, closeMenu1)



  useOnClickOutside(ContextMenuRef2, closeMenu2)

  return (
    <div className={classes.additNav}>
      <ul className={classes.Buttons}>
        <li className={classes.Button} ref={ContextMenuRef1}>
          <div className={classes.icon} onClick={() => {setOpen(!open)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/></svg></div>
          <CSSTransition
            in={open}
            unmountOnExit 
            timeout={500}
            classNames="dropdown"
          >
            <Notifications />
          </CSSTransition>
        </li>
        <li className={classes.Button} ref={ContextMenuRef2}>
          <div className={classes.icon} onClick={() => {setOpen1(!open1)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></div>
          <CSSTransition
            in={open1}
            unmountOnExit 
            timeout={500}
            classNames="dropdown1"
          >
            <DropdownMenu />
          </CSSTransition>
        </li>
      </ul>
    </div>
  )
}

export default AdditNav;