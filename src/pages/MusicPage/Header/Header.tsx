import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

const Header = () => {
    const [activeSection, setActiveSection] = useState('home')
    return (
        <div className={classes.Header}>
            <div className={classes.title}>
                <h1>Музыка</h1>
            </div>
            <div className={classes.search}>
                <form action="" method="GEt">
                    <input type="text" name="music-search" placeholder='Поиск'/>
                </form>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.55918 18.8679H9.91424L10.3945 18.4048C8.71355 16.4494 7.70154 13.9108 7.70154 11.1492C7.70154 4.99142 12.693 0 18.8508 0C25.0086 0 30 4.99142 30 11.1492C30 17.307 25.0086 22.2985 18.8508 22.2985C16.0892 22.2985 13.5506 21.2865 11.5952 19.6055L11.1321 20.0858V21.4408L2.55575 30L3.24644e-07 27.4443L8.55918 18.8679V18.8679ZM18.8508 18.8679C23.1218 18.8679 26.5695 15.4202 26.5695 11.1492C26.5695 6.87822 23.1218 3.43053 18.8508 3.43053C14.5798 3.43053 11.1321 6.87822 11.1321 11.1492C11.1321 15.4202 14.5798 18.8679 18.8508 18.8679Z" fill="white"/>
                </svg>                    
            </div>
            <nav className={classes.sections}>
                <Link to="home" title="Главная"><li onClick={() => setActiveSection('home')} className={(activeSection === 'home' && classes.activeSection) || ''}>Главная</li></Link>
                <Link to="mymusic" title="Музыка"><li onClick={() => setActiveSection('myMusic')} className={(activeSection === 'myMusic' && classes.activeSection) || ''}>Моя музыка</li></Link>
                <Link to="popular" title="Музыка"><li onClick={() => setActiveSection('popular')} className={(activeSection === 'popular' && classes.activeSection) || ''}>Популярно</li></Link>
                <Link to="friends" title="Музыка"><li onClick={() => setActiveSection('friends')} className={(activeSection === 'friends' && classes.activeSection) || ''}>Друзья</li></Link>
            </nav>
        </div>
    )
}

export default Header