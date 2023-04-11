import React, { FC, useState } from 'react'
import classes from './Register.module.scss';
import { CSSTransition } from 'react-transition-group';
import preview1 from '../../../../../../images/12.png'

interface INextButton {
    goTo: string
}

const Register = () => {
    const [registerLvl, setRegisterLvl] = useState('name')
    const [changedProfileType, setChangedProfileType] = useState('')
    const [openPreviewPhoto, setOpenPreviewPhoto] = useState(false)
    const [openThumbnail, setOpenThumbnail] = useState(false)
    const [isGoodImgCond, setIsGoodImgCond] = useState(true)
    
    const uploadAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const addedFiles = document.getElementById('thumbnail');
        const field = document.getElementById('field');
    
        if (!e.target.files?.length) {
          return
        } else {
          const files = Array.from(e.target.files)
          files.forEach(file => {
            if (!file.type.match('image')) {
                return
            } else {
                const reader = new FileReader();
                const img = new Image();
                reader.onload = e => {
                    img.onload = function() {
                        if (img.width <= 400 && img.height <= 400) {
                            setIsGoodImgCond(false)
                            console.log(isGoodImgCond)
                        }
                        img.height + 5 > img.width && field?.setAttribute('style', 'width: 550px; height: 630px;');
                        img.width + 5 > img.height && field?.setAttribute('style', 'width: 700px; height: 400px;');
                        img.width < 730 && field?.setAttribute('style', `width: ${img.width};`);
                        img.height < 650 && field?.setAttribute('style', `height: ${img.height};`);
                        addedFiles?.setAttribute('src', `${e.target?.result}`);
                        img.height === img.width && field?.setAttribute('style', 'width: 500px; height: 500px;');
                    }
                    img.src = `${e.target?.result}`;
                    isGoodImgCond && setOpenThumbnail(true)
                }
        
                reader.readAsDataURL(file)
            }
          })
        }
      }
    
    const uploadShowcase = (e: React.ChangeEvent<HTMLInputElement>) => {
        const addedFiles = document.getElementById('thumbnail');
        const field = document.getElementById('field');
    
        if (!e.target.files?.length) {
          return
        } else {
          const files = Array.from(e.target.files)
          files.forEach(file => {
            if (!file.type.match('image')) {
                return
            } else {
                const reader = new FileReader();
                const img = new Image();
                reader.onload = e => {
                    img.onload = function() {
                        if (img.width <= 400 && img.height <= 400) {
                            setIsGoodImgCond(false)
                            console.log(isGoodImgCond)
                        }
                        img.height + 5 > img.width && field?.setAttribute('style', 'width: 550px; height: 630px;');
                        img.width + 5 > img.height && field?.setAttribute('style', 'width: 700px; height: 400px;');
                        img.width < 730 && field?.setAttribute('style', `width: ${img.width};`);
                        img.height < 650 && field?.setAttribute('style', `height: ${img.height};`);
                        addedFiles?.setAttribute('src', `${e.target?.result}`);
                        img.height === img.width && field?.setAttribute('style', 'width: 500px; height: 500px;');
                    }
                    img.src = `${e.target?.result}`;
                    isGoodImgCond && setOpenThumbnail(true)
                }
        
                reader.readAsDataURL(file)
            }
          })
        }
      }

    const NextButton: FC<INextButton> = ({goTo}) => {
        return (
          <div className={classes.NextButton} onClick={() => setRegisterLvl(goTo)}>Далее</div>
        )
    }

    return (
        <div className={classes.Register}>
            <CSSTransition
                in={registerLvl === 'name'}
                unmountOnExit 
                timeout={500} 
                classNames="registerPrimary"
            >
                <div className={classes.NameBlock}>
                    <h1>Let's gooo, введите имя</h1>
                    <input type="text" placeholder='Ваш ник'/>
                    <h3>Вы можете в любой момент изменить ник</h3>
                    <NextButton goTo='id'/>
                </div>
            </CSSTransition>

            <CSSTransition
                in={registerLvl === 'id'}
                unmountOnExit 
                timeout={500} 
                classNames="registerSecondary"
            >
                <div className={classes.NameBlock}>
                    <h1>А теперь ваш id</h1>
                    <input type="text" placeholder='Ваш id'/>
                    <h3>GettId - уникальное неизменяемое имя</h3>
                    <NextButton goTo='email'/>
                </div>
            </CSSTransition>

            <CSSTransition
                in={registerLvl === 'email'}
                unmountOnExit 
                timeout={500} 
                classNames="registerSecondary"
            >
                <div className={classes.NameBlock}>
                    <h1>Введите email</h1>
                    <input type="text" placeholder='Ваш email'/>
                    <h3>Вы можете завести несколько аккаунтов на одну почту</h3>
                    <NextButton goTo='password'/>
                </div>
            </CSSTransition>

            <CSSTransition
                in={registerLvl === 'password'}
                unmountOnExit 
                timeout={500} 
                classNames="registerSecondary"
            >
                <div className={classes.NameBlock}>
                    <h1>Введите пароль</h1>
                    <input type="text" placeholder='Ваш пароль'/>
                    <h3>Вы можете в любой момент изменить пароль</h3>
                    <NextButton goTo='avatar'/>
                </div>
            </CSSTransition>

            <CSSTransition
                in={registerLvl === 'avatar'}
                unmountOnExit 
                timeout={500} 
                classNames="registerSecondary"
            >
                <div className={classes.NameBlock}>
                    <div className={classes.changeAvatar}>
                        <h1 className={classes.chooseAvatar}>Выберите аватар</h1>
                        {!isGoodImgCond && <h3 className={classes.wrongCond}>Фотография должна иметь размер не менее 400 точек в ширину и не менее 400 точек в высоту.</h3>}
                        <div className={classes.avatar}>
                            <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.375 26.5C39.375 27.1962 39.0984 27.8639 38.6062 28.3562C38.1139 28.8484 37.4462 29.125 36.75 29.125H5.25C4.55381 29.125 3.88613 28.8484 3.39384 28.3562C2.90156 27.8639 2.625 27.1962 2.625 26.5V10.75C2.625 10.0538 2.90156 9.38613 3.39384 8.89385C3.88613 8.40156 4.55381 8.125 5.25 8.125H8.3265C10.414 8.12386 12.4156 7.29393 13.8915 5.81762L16.0703 3.64412C16.5611 3.15309 17.2266 2.87654 17.9209 2.875H24.0739C24.77 2.87515 25.4376 3.15181 25.9298 3.64412L28.1033 5.81762C28.8347 6.54925 29.703 7.1296 30.6588 7.5255C31.6146 7.92141 32.639 8.12512 33.6735 8.125H36.75C37.4462 8.125 38.1139 8.40156 38.6062 8.89385C39.0984 9.38613 39.375 10.0538 39.375 10.75V26.5ZM5.25 5.5C3.85761 5.5 2.52226 6.05312 1.53769 7.03769C0.553124 8.02226 0 9.35761 0 10.75L0 26.5C0 27.8924 0.553124 29.2277 1.53769 30.2123C2.52226 31.1969 3.85761 31.75 5.25 31.75H36.75C38.1424 31.75 39.4777 31.1969 40.4623 30.2123C41.4469 29.2277 42 27.8924 42 26.5V10.75C42 9.35761 41.4469 8.02226 40.4623 7.03769C39.4777 6.05312 38.1424 5.5 36.75 5.5H33.6735C32.2812 5.4997 30.9461 4.94638 29.9617 3.96175L27.7883 1.78825C26.8039 0.803616 25.4688 0.250297 24.0765 0.25H17.9235C16.5312 0.250297 15.1961 0.803616 14.2118 1.78825L12.0382 3.96175C11.0539 4.94638 9.71877 5.4997 8.3265 5.5H5.25Z" fill="white"/><path d="M21 23.875C19.2595 23.875 17.5903 23.1836 16.3596 21.9529C15.1289 20.7222 14.4375 19.053 14.4375 17.3125C14.4375 15.572 15.1289 13.9028 16.3596 12.6721C17.5903 11.4414 19.2595 10.75 21 10.75C22.7405 10.75 24.4097 11.4414 25.6404 12.6721C26.8711 13.9028 27.5625 15.572 27.5625 17.3125C27.5625 19.053 26.8711 20.7222 25.6404 21.9529C24.4097 23.1836 22.7405 23.875 21 23.875ZM21 26.5C23.4367 26.5 25.7736 25.532 27.4965 23.809C29.2195 22.0861 30.1875 19.7492 30.1875 17.3125C30.1875 14.8758 29.2195 12.5389 27.4965 10.816C25.7736 9.09297 23.4367 8.125 21 8.125C18.5633 8.125 16.2264 9.09297 14.5035 10.816C12.7805 12.5389 11.8125 14.8758 11.8125 17.3125C11.8125 19.7492 12.7805 22.0861 14.5035 23.809C16.2264 25.532 18.5633 26.5 21 26.5ZM7.875 12.0625C7.875 12.4106 7.73672 12.7444 7.49058 12.9906C7.24444 13.2367 6.9106 13.375 6.5625 13.375C6.2144 13.375 5.88056 13.2367 5.63442 12.9906C5.38828 12.7444 5.25 12.4106 5.25 12.0625C5.25 11.7144 5.38828 11.3806 5.63442 11.1344C5.88056 10.8883 6.2144 10.75 6.5625 10.75C6.9106 10.75 7.24444 10.8883 7.49058 11.1344C7.73672 11.3806 7.875 11.7144 7.875 12.0625Z" fill="white"/></svg>
                            <img src="" alt="" id="avatar" className={classes.avatarImg}/>
                            <div className={classes.hover}></div>
                            <input type="file" multiple={false} onChange={(e) => uploadAvatar(e)}/>
                        </div>
                        <h3 className={classes.avatarTip}>Вы можете в любой момент изменить пароль</h3>
                        <NextButton goTo='profileType'/>
                    </div>
                    <div className={(openThumbnail && classes.chooseThumbnail + ' ' + classes.activeChooseThumbnail) || classes.chooseThumbnail}>
                        <h1 className={classes.chooseThumbnailTitle}>Выберите миниатюру</h1>
                        <div id="field" className={classes.field}>
                            <img src="" alt="" id="thumbnail"/>
                            <div className={classes.blackout}></div>
                            <div className={classes.selectedArea}></div>
                        </div>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={registerLvl === 'profileType'}
                unmountOnExit 
                timeout={500} 
                classNames="registerSecondary"
            >
                <div className={classes.NameBlock}>
                    <h1 className={classes.chooseProfileType}>Выберите тип профиля</h1>
                    <div className={classes.profileTypes}>
                        <div 
                            onMouseOver={() => setOpenPreviewPhoto(true)} 
                            onMouseLeave={() => setOpenPreviewPhoto(false)} 
                            onClick={() => setChangedProfileType('photo')} 
                            className={(changedProfileType === 'photo' && classes.profileType + ' ' + classes.active) || classes.profileType}
                        >
                            <svg width="42" height="32" viewBox="0 0 42 32" xmlns="http://www.w3.org/2000/svg"><path d="M39.375 26.5C39.375 27.1962 39.0984 27.8639 38.6062 28.3562C38.1139 28.8484 37.4462 29.125 36.75 29.125H5.25C4.55381 29.125 3.88613 28.8484 3.39384 28.3562C2.90156 27.8639 2.625 27.1962 2.625 26.5V10.75C2.625 10.0538 2.90156 9.38613 3.39384 8.89385C3.88613 8.40156 4.55381 8.125 5.25 8.125H8.3265C10.414 8.12386 12.4156 7.29393 13.8915 5.81762L16.0703 3.64412C16.5611 3.15309 17.2266 2.87654 17.9209 2.875H24.0739C24.77 2.87515 25.4376 3.15181 25.9298 3.64412L28.1033 5.81762C28.8347 6.54925 29.703 7.1296 30.6588 7.5255C31.6146 7.92141 32.639 8.12512 33.6735 8.125H36.75C37.4462 8.125 38.1139 8.40156 38.6062 8.89385C39.0984 9.38613 39.375 10.0538 39.375 10.75V26.5ZM5.25 5.5C3.85761 5.5 2.52226 6.05312 1.53769 7.03769C0.553124 8.02226 0 9.35761 0 10.75L0 26.5C0 27.8924 0.553124 29.2277 1.53769 30.2123C2.52226 31.1969 3.85761 31.75 5.25 31.75H36.75C38.1424 31.75 39.4777 31.1969 40.4623 30.2123C41.4469 29.2277 42 27.8924 42 26.5V10.75C42 9.35761 41.4469 8.02226 40.4623 7.03769C39.4777 6.05312 38.1424 5.5 36.75 5.5H33.6735C32.2812 5.4997 30.9461 4.94638 29.9617 3.96175L27.7883 1.78825C26.8039 0.803616 25.4688 0.250297 24.0765 0.25H17.9235C16.5312 0.250297 15.1961 0.803616 14.2118 1.78825L12.0382 3.96175C11.0539 4.94638 9.71877 5.4997 8.3265 5.5H5.25Z"/><path d="M21 23.875C19.2595 23.875 17.5903 23.1836 16.3596 21.9529C15.1289 20.7222 14.4375 19.053 14.4375 17.3125C14.4375 15.572 15.1289 13.9028 16.3596 12.6721C17.5903 11.4414 19.2595 10.75 21 10.75C22.7405 10.75 24.4097 11.4414 25.6404 12.6721C26.8711 13.9028 27.5625 15.572 27.5625 17.3125C27.5625 19.053 26.8711 20.7222 25.6404 21.9529C24.4097 23.1836 22.7405 23.875 21 23.875ZM21 26.5C23.4367 26.5 25.7736 25.532 27.4965 23.809C29.2195 22.0861 30.1875 19.7492 30.1875 17.3125C30.1875 14.8758 29.2195 12.5389 27.4965 10.816C25.7736 9.09297 23.4367 8.125 21 8.125C18.5633 8.125 16.2264 9.09297 14.5035 10.816C12.7805 12.5389 11.8125 14.8758 11.8125 17.3125C11.8125 19.7492 12.7805 22.0861 14.5035 23.809C16.2264 25.532 18.5633 26.5 21 26.5ZM7.875 12.0625C7.875 12.4106 7.73672 12.7444 7.49058 12.9906C7.24444 13.2367 6.9106 13.375 6.5625 13.375C6.2144 13.375 5.88056 13.2367 5.63442 12.9906C5.38828 12.7444 5.25 12.4106 5.25 12.0625C5.25 11.7144 5.38828 11.3806 5.63442 11.1344C5.88056 10.8883 6.2144 10.75 6.5625 10.75C6.9106 10.75 7.24444 10.8883 7.49058 11.1344C7.73672 11.3806 7.875 11.7144 7.875 12.0625Z"/></svg>
                            <span>Фото-профиль</span>
                            <div className={(openPreviewPhoto && classes.photoProfilePrewiew + ' ' + classes.photoPreviewActive) || classes.photoProfilePrewiew}>
                                <img src={preview1} alt="" />
                            </div>
                        </div>
                        <div 
                            onClick={() => setChangedProfileType('post')}
                            className={(changedProfileType === 'post' && classes.profileType + ' ' + classes.active) || classes.profileType}
                        >
                            <svg width="42" height="32" viewBox="0 0 42 32" xmlns="http://www.w3.org/2000/svg"><path d="M6 7.26923H36C37.5913 7.26923 39.1174 7.77981 40.2426 8.68864C41.3679 9.59747 42 10.8301 42 12.1154V19.3846C42 20.6699 41.3679 21.9025 40.2426 22.8114C39.1174 23.7202 37.5913 24.2308 36 24.2308H6C4.4087 24.2308 2.88258 23.7202 1.75736 22.8114C0.632141 21.9025 0 20.6699 0 19.3846V12.1154C0 10.8301 0.632141 9.59747 1.75736 8.68864C2.88258 7.77981 4.4087 7.26923 6 7.26923ZM6 9.69231C5.20435 9.69231 4.44129 9.9476 3.87868 10.402C3.31607 10.8564 3 11.4727 3 12.1154V19.3846C3 20.0273 3.31607 20.6436 3.87868 21.098C4.44129 21.5524 5.20435 21.8077 6 21.8077H36C36.7957 21.8077 37.5587 21.5524 38.1213 21.098C38.6839 20.6436 39 20.0273 39 19.3846V12.1154C39 11.4727 38.6839 10.8564 38.1213 10.402C37.5587 9.9476 36.7957 9.69231 36 9.69231H6ZM0 1.21154C0 0.890218 0.158035 0.582059 0.43934 0.354851C0.720644 0.127644 1.10218 0 1.5 0H40.5C40.8978 0 41.2794 0.127644 41.5607 0.354851C41.842 0.582059 42 0.890218 42 1.21154C42 1.53286 41.842 1.84102 41.5607 2.06823C41.2794 2.29543 40.8978 2.42308 40.5 2.42308H1.5C1.10218 2.42308 0.720644 2.29543 0.43934 2.06823C0.158035 1.84102 0 1.53286 0 1.21154ZM0 30.2885C0 29.9671 0.158035 29.659 0.43934 29.4318C0.720644 29.2046 1.10218 29.0769 1.5 29.0769H40.5C40.8978 29.0769 41.2794 29.2046 41.5607 29.4318C41.842 29.659 42 29.9671 42 30.2885C42 30.6098 41.842 30.9179 41.5607 31.1451C41.2794 31.3724 40.8978 31.5 40.5 31.5H1.5C1.10218 31.5 0.720644 31.3724 0.43934 31.1451C0.158035 30.9179 0 30.6098 0 30.2885Z"/></svg>
                            <span>Пост-профиль</span>
                        </div>
                    </div>
                    <h3 className={classes.profileTypeTip}>Выбранный тип профиля - неизменяемый</h3>
                    <NextButton goTo='showcase'/>
                </div>
            </CSSTransition>

            <CSSTransition
                in={registerLvl === 'showcase'}
                unmountOnExit 
                timeout={500} 
                classNames="registerSecondary"
            >
                <div className={classes.NameBlock}>
                <div className={classes.changeShowcase}>
                        <h1 className={classes.chooseShowcase}>Выберите аватар</h1>
                        <div className={classes.showcase}>
                            <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.375 26.5C39.375 27.1962 39.0984 27.8639 38.6062 28.3562C38.1139 28.8484 37.4462 29.125 36.75 29.125H5.25C4.55381 29.125 3.88613 28.8484 3.39384 28.3562C2.90156 27.8639 2.625 27.1962 2.625 26.5V10.75C2.625 10.0538 2.90156 9.38613 3.39384 8.89385C3.88613 8.40156 4.55381 8.125 5.25 8.125H8.3265C10.414 8.12386 12.4156 7.29393 13.8915 5.81762L16.0703 3.64412C16.5611 3.15309 17.2266 2.87654 17.9209 2.875H24.0739C24.77 2.87515 25.4376 3.15181 25.9298 3.64412L28.1033 5.81762C28.8347 6.54925 29.703 7.1296 30.6588 7.5255C31.6146 7.92141 32.639 8.12512 33.6735 8.125H36.75C37.4462 8.125 38.1139 8.40156 38.6062 8.89385C39.0984 9.38613 39.375 10.0538 39.375 10.75V26.5ZM5.25 5.5C3.85761 5.5 2.52226 6.05312 1.53769 7.03769C0.553124 8.02226 0 9.35761 0 10.75L0 26.5C0 27.8924 0.553124 29.2277 1.53769 30.2123C2.52226 31.1969 3.85761 31.75 5.25 31.75H36.75C38.1424 31.75 39.4777 31.1969 40.4623 30.2123C41.4469 29.2277 42 27.8924 42 26.5V10.75C42 9.35761 41.4469 8.02226 40.4623 7.03769C39.4777 6.05312 38.1424 5.5 36.75 5.5H33.6735C32.2812 5.4997 30.9461 4.94638 29.9617 3.96175L27.7883 1.78825C26.8039 0.803616 25.4688 0.250297 24.0765 0.25H17.9235C16.5312 0.250297 15.1961 0.803616 14.2118 1.78825L12.0382 3.96175C11.0539 4.94638 9.71877 5.4997 8.3265 5.5H5.25Z" fill="white"/><path d="M21 23.875C19.2595 23.875 17.5903 23.1836 16.3596 21.9529C15.1289 20.7222 14.4375 19.053 14.4375 17.3125C14.4375 15.572 15.1289 13.9028 16.3596 12.6721C17.5903 11.4414 19.2595 10.75 21 10.75C22.7405 10.75 24.4097 11.4414 25.6404 12.6721C26.8711 13.9028 27.5625 15.572 27.5625 17.3125C27.5625 19.053 26.8711 20.7222 25.6404 21.9529C24.4097 23.1836 22.7405 23.875 21 23.875ZM21 26.5C23.4367 26.5 25.7736 25.532 27.4965 23.809C29.2195 22.0861 30.1875 19.7492 30.1875 17.3125C30.1875 14.8758 29.2195 12.5389 27.4965 10.816C25.7736 9.09297 23.4367 8.125 21 8.125C18.5633 8.125 16.2264 9.09297 14.5035 10.816C12.7805 12.5389 11.8125 14.8758 11.8125 17.3125C11.8125 19.7492 12.7805 22.0861 14.5035 23.809C16.2264 25.532 18.5633 26.5 21 26.5ZM7.875 12.0625C7.875 12.4106 7.73672 12.7444 7.49058 12.9906C7.24444 13.2367 6.9106 13.375 6.5625 13.375C6.2144 13.375 5.88056 13.2367 5.63442 12.9906C5.38828 12.7444 5.25 12.4106 5.25 12.0625C5.25 11.7144 5.38828 11.3806 5.63442 11.1344C5.88056 10.8883 6.2144 10.75 6.5625 10.75C6.9106 10.75 7.24444 10.8883 7.49058 11.1344C7.73672 11.3806 7.875 11.7144 7.875 12.0625Z" fill="white"/></svg>
                            <img src="" alt="" id="showcase" className={classes.showcaseImg}/>
                            <div className={classes.hover}></div>
                            <input type="file" multiple={false} onChange={(e) => uploadShowcase(e)}/>
                        </div>
                        <h3 className={classes.showcaseTip}>Вы можете в любой момент изменить пароль</h3>
                        <NextButton goTo='profileType'/>
                    </div>
                    <div className={(openThumbnail && classes.chooseThumbnail + ' ' + classes.activeChooseThumbnail) || classes.chooseThumbnail}>
                        <h1 className={classes.chooseThumbnailTitle}>Выберите миниатюру</h1>
                        <div id="field" className={classes.field}>
                            <img src="" alt="" id="thumbnail"/>
                            <div className={classes.blackout}></div>
                            <div className={classes.selectedArea}></div>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Register