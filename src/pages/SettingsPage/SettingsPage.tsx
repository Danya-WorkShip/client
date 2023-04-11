import React, { useState } from 'react'
import classes from './SettingsPage.module.scss';
import LeftPanel from './LeftPanel/LeftPanel';
import CenterPanel from './CenterPanel/CenterPanel';

const SettingsPage = () => {
    const [activeSection, setActiveSection] = useState(0)

    const setSection = (id: number) => {
        setActiveSection(id)
    }

    return (
        <div className={classes.SettingsPage}>
            <LeftPanel setSection={setSection}/>
            <CenterPanel settingId={activeSection}/>
        </div>
    )
}

export default SettingsPage