import React, { FC, useState } from 'react'
import classes from './CenterPanel.module.scss';
import { CSSTransition } from 'react-transition-group';

interface ICenterPanel {
    settingId: number
}

interface IArray {
    value: string
}

const CenterPanel: FC<ICenterPanel> = ({settingId}) => {
    const settingValueMyAccount =  [
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
    ]
    const settingValueMyProfile =  [
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
    ]
    const settingValueMyPrivacy =  [
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
    ]
    const settingValueNotifications =  [
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
    ]
    const settingValueMyBlackList =  [
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
    ]
    const settingValueMyAppearance =  [
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
    ]
    const settingValueMyTextImages =  [
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
        {value: ''},
    ]

    const [settingsValuesMyProfileState, setSettingsValuesMyProfileState] = useState(settingValueMyProfile)
    const [settingsValuesMyPrivacyState, setSettingsValuesMyPrivacyState] = useState(settingValueMyPrivacy)
    const [settingsValuesNotificationsState, setSettingsValuesNotificationsState] = useState(settingValueNotifications)
    const [settingsValuesMyBlackListState, setSettingsValuesMyBlackListState] = useState(settingValueMyBlackList)
    const [settingsValuesMyAppearanceState, setSettingsValueMyAppearancesState] = useState(settingValueMyAppearance)
    const [settingsValuesMyTextImagesState, setSettingsValueMyTextImagesState] = useState(settingValueMyTextImages)

    const updateArea = (e: React.ChangeEvent<HTMLInputElement>, value: string, id: number, array: IArray[], setArray: Function) => {
        const updatedArray = [...array];
        updatedArray[id].value = e.target.value;
        setArray(updatedArray);
    }

    return (
        <div className={classes.CenterPanel}>
            <div className={classes.Content}>
                <CSSTransition
                    in={settingId===0}
                    unmountOnExit
                    timeout={500} 
                    classNames="settings"
                >
                    <div className={classes.ChangeSettings}>
                        <div className={classes.Title}>Моя учётная запись</div>
                        <div className={classes.List}>
                            <div className={classes.Setting}>
                                <div className={classes.Name}>Имя</div>
                                <div className={classes.Value}><input type="text" value={settingsValuesMyProfileState[0].value} onChange={e => updateArea(e, e.target.value, 0, settingsValuesMyProfileState, setSettingsValuesMyProfileState)}/></div>
                            </div>
                            <div className={classes.Setting}>
                                <div className={classes.Name}>ID</div>
                                <div className={classes.Value}><input type="text" value={settingsValuesMyProfileState[1].value} onChange={e => updateArea(e, e.target.value, 1, settingsValuesMyProfileState, setSettingsValuesMyProfileState)}/></div>
                            </div>
                            <div className={classes.Setting}>
                                <div className={classes.Name}>Логин</div>
                                <div className={classes.Value}><input type="text" value={settingsValuesMyProfileState[2].value} onChange={e => updateArea(e, e.target.value, 2, settingsValuesMyProfileState, setSettingsValuesMyProfileState)}/></div>
                            </div>
                            <div className={classes.Setting}>
                                <div className={classes.Name}>Пароль</div>
                                <div className={classes.Value}><input type="text" value={settingsValuesMyProfileState[3].value} onChange={e => updateArea(e, e.target.value, 3, settingsValuesMyProfileState, setSettingsValuesMyProfileState)}/></div>
                            </div>
                            <div className={classes.DeleteAccount}>
                                <div className={classes.Name}>Удалить аккаунт</div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={settingId===1}
                    unmountOnExit
                    timeout={500} 
                    classNames="settings"
                >
                    <div className={classes.ChangeSettings}>
                        <div className={classes.Title}>Профиль</div>
                        <div className={classes.List}>
                            <div className={classes.Setting}>
                                <div className={classes.Name}>Имя</div>
                                <div className={classes.Value}><input type="text" value={settingsValuesMyPrivacyState[0].value} onChange={e => updateArea(e, e.target.value, 0, settingsValuesMyProfileState, setSettingsValuesMyProfileState)}/></div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={settingId===2}
                    unmountOnExit
                    timeout={500} 
                    classNames="settings"
                >
                    <div className={classes.ChangeSettings}>
                        <div className={classes.Title}>Приватность</div>
                        <div className={classes.List}>
                            <div className={classes.Setting}>
                                <div className={classes.Name}>Имя</div>
                                <div className={classes.Value}><input type="text" value={settingsValuesMyPrivacyState[0].value} onChange={e => updateArea(e, e.target.value, 0, settingsValuesMyProfileState, setSettingsValuesMyProfileState)}/></div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={settingId===3}
                    unmountOnExit
                    timeout={500} 
                    classNames="settings"
                >
                    <div className={classes.ChangeSettings}>
                        <div className={classes.Title}>Уведомления</div>
                        <div className={classes.List}>
                            <div className={classes.Setting}>
                                <div className={classes.Name}>Имя</div>
                                <div className={classes.Value}><input type="text" value={settingsValuesMyPrivacyState[0].value} onChange={e => updateArea(e, e.target.value, 0, settingsValuesMyProfileState, setSettingsValuesMyProfileState)}/></div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={settingId===4}
                    unmountOnExit
                    timeout={500} 
                    classNames="settings"
                >
                    <div className={classes.ChangeSettings}>
                        <div className={classes.Title}>Чёрный список</div>
                        <div className={classes.List}>
                            <div className={classes.Setting}>
                                <div className={classes.Name}>Имя</div>
                                <div className={classes.Value}><input type="text" value={settingsValuesMyPrivacyState[0].value} onChange={e => updateArea(e, e.target.value, 0, settingsValuesMyProfileState, setSettingsValuesMyProfileState)}/></div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={settingId===5}
                    unmountOnExit
                    timeout={500} 
                    classNames="settings"
                >
                    <div className={classes.ChangeSettings}>
                        <div className={classes.Title}>Внешний вид</div>
                        <div className={classes.List}>
                            <div className={classes.Setting}>
                                <div className={classes.Name}>Имя</div>
                                <div className={classes.Value}><input type="text" value={settingsValuesMyPrivacyState[0].value} onChange={e => updateArea(e, e.target.value, 0, settingsValuesMyProfileState, setSettingsValuesMyProfileState)}/></div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={settingId===6}
                    unmountOnExit
                    timeout={500} 
                    classNames="settings"
                >
                    <div className={classes.ChangeSettings}>
                        <div className={classes.Title}>Текст и изображения</div>
                        <div className={classes.List}>
                            <div className={classes.Setting}>
                                <div className={classes.Name}>Имя</div>
                                <div className={classes.Value}><input type="text" value={settingsValuesMyPrivacyState[0].value} onChange={e => updateArea(e, e.target.value, 0, settingsValuesMyProfileState, setSettingsValuesMyProfileState)}/></div>
                            </div>
                        </div>
                    </div>
                </CSSTransition>
            </div>
        </div>
  )
}

export default CenterPanel