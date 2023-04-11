import React, { FC } from 'react';
import classes from './UlItem.module.scss';

interface IUlItem {
  children: React.ReactNode
  href: string
  title: string
}

const UlItem: FC<IUlItem> = ({children, ...props}) => {
  return (
    <li className={classes.UlItem}><a {...props}>{children}</a></li>
  )
}

export default UlItem;