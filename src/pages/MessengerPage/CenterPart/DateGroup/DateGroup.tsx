import React, { FC } from 'react'
import classes from './DateGroup.module.scss';

interface IDateGroup {
    children: React.ReactNode
    date: string
}

const DateGroup: FC<IDateGroup> = ({children, date}) => {
  return (
    <div className={classes.DateGroup}>
        <div className={classes.StickyDate}>{date}</div>
        {children}
    </div>
  )
}

export default DateGroup