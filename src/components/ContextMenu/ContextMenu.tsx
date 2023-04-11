import React, { FC, useRef } from 'react'
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import classes from './ContextMenu.module.scss';

interface IContextMenu {
    x: number
    y: number
    height?: number | undefined
    width?: number | undefined
    children: React.ReactNode
    closeContextMenu: () => void
}

const ContextMenu: FC<IContextMenu> = ({x, y, closeContextMenu, children}) => {

    const ContextMenuRef = useRef<HTMLDivElement>(null)
    useOnClickOutside(ContextMenuRef, closeContextMenu)

    return (
        <div className={classes.Content}
            onClick={closeContextMenu} 
            style={{top: `${y}px`, left: `${x}px`}}
            ref={ContextMenuRef}
        >
            {children}
        </div>
    )
}

export default ContextMenu