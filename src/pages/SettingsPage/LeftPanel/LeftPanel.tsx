import React, { FC, useState } from 'react'
import classes from './LeftPanel.module.scss';

interface ISetting {
    setSection: Function
}

const LeftPanel: FC<ISetting> = ({setSection}) => {
    const [activeSection, setActiveSection] = useState(0)

    return (
        <div className={classes.LeftPanel}>
            <div className={classes.Section}>
                <div className={classes.Title}>Настройки пользователя</div>
                <div className={classes.SettingsList}>
                    <div className={classes.Setting} onClick={() => {setActiveSection(0); setSection(0)}} style={activeSection===0 ? {background: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 1)'} : {}}>
                        <div className={classes.Name}>Моя учётная запись</div>
                    </div>
                    <div className={classes.Setting} onClick={() => {setActiveSection(1); setSection(1)}} style={activeSection===1 ? {background: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 1)'} : {}}>
                        <div className={classes.Name}>Профиль</div>
                    </div>
                    <div className={classes.Setting} onClick={() => {setActiveSection(2); setSection(2)}} style={activeSection===2 ? {background: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 1)'} : {}}>
                        <div className={classes.Name}>Приватность</div>
                    </div>
                    <div className={classes.Setting} onClick={() => {setActiveSection(3); setSection(3)}} style={activeSection===3 ? {background: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 1)'} : {}}>
                        <div className={classes.Name}>Уведомления</div>
                    </div>
                    <div className={classes.Setting} onClick={() => {setActiveSection(4); setSection(4)}} style={activeSection===4 ? {background: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 1)'} : {}}>
                        <div className={classes.Name}>Чёрный Список</div>
                    </div>
                </div>
            </div>
            <div className={classes.Section}>
                <div className={classes.Title}>Настройки приложения</div>
                <div className={classes.SettingsList}>
                    <div className={classes.Setting} onClick={() => {setActiveSection(5); setSection(5)}} style={activeSection===5 ? {background: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 1)'} : {}}>
                        <div className={classes.Name}>Внешний вид</div>
                    </div>
                    <div className={classes.Setting} onClick={() => {setActiveSection(6); setSection(6)}} style={activeSection===6 ? {background: 'rgba(255, 255, 255, 0.1)', color: 'rgba(255, 255, 255, 1)'} : {}}>
                        <div className={classes.Name}>Текст и изображения</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel