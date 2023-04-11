import React, { useState } from 'react'
import classes from './UpperBar.module.scss';

const UpperBar = () => {
  const [selectedState, setSelectedState] = useState(0)
  
  return (
    <div className={classes.UpperBar}>
        <div className={classes.Title}>Home</div>
        <div className={classes.Sections}>
            <div className={classes.Section} onClick={()=> setSelectedState(0)} style={selectedState === 0 ? {background: 'rgba(234, 41, 76, 0.9)'} : {}}>Рекомендации</div>
            <div className={classes.Section} onClick={()=> setSelectedState(1)} style={selectedState === 1 ? {background: 'rgba(234, 41, 76, 0.9)'} : {}}>Подписки</div>
            <div className={classes.Section} onClick={()=> setSelectedState(2)} style={selectedState === 2 ? {background: 'rgba(234, 41, 76, 0.9)'} : {}}>Популярное</div>
        </div>
    </div>
  )
}

export default UpperBar