import React, { FC, useState } from 'react'
import classes from './CentralFriendsProfile.module.scss';
import { CSSTransition } from 'react-transition-group';
import ContextMenu from '../../../../components/ContextMenu/ContextMenu';
import { IUser } from '../../../../types/types';

interface ICentralFriendsProfile {
    user: IUser
    id: number
}

const CentralFriendsProfile: FC<ICentralFriendsProfile> = ({user, id}) => {
    const initialContextMenu = {
        show: false,
        x: 0,
        y: 0
    }

    const contextMenuOpen = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        const {pageX, pageY} = e
        setContextMenu({show: !contextMenu.show, x: pageX, y: pageY})
    }

    const [contextMenu, setContextMenu] = useState(initialContextMenu)

    const contextMenuClose = () => setContextMenu({
        show: false,
        x: contextMenu.x,
        y: contextMenu.y
    })

    return (
        <div className={classes.CentralFriendsProfile} onContextMenu={contextMenuOpen}>
            <CSSTransition
                in={contextMenu.show}
                unmountOnExit 
                timeout={300}
                classNames="contextMenu"
            >
                <ContextMenu x={contextMenu.x} y={contextMenu.y} closeContextMenu={contextMenuClose}>
                    <ul className={classes.Actions}>
                        <li className={classes.Action}>
                            <div className={classes.Icon}><svg width="30" height="31" viewBox="0 0 30 31" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M13.8061 1.00361C11.511 1.20152 9.58355 1.73661 7.7033 2.69797C4.27313 4.45171 1.78219 7.26579 0.642143 10.6753C-0.0687143 12.8011 -0.19212 15.1116 0.2856 17.3486C0.689322 19.2391 1.59699 21.1493 2.84848 22.7422L3.19757 23.1865L2.26871 27.0416C1.75784 29.1619 1.33909 30.931 1.33815 30.9731C1.33722 31.0151 3.00404 30.1822 5.04219 29.1223C7.09966 28.0523 8.78966 27.2087 8.84177 27.2257C8.89335 27.2425 9.21286 27.3561 9.55174 27.4782C15.408 29.5879 22.123 28.0723 26.3051 23.6969C28.2655 21.6458 29.4374 19.3143 29.8945 16.5553C30.0352 15.7064 30.0352 13.6815 29.8945 12.8326C29.4374 10.0737 28.2655 7.74217 26.3051 5.69105C23.7473 3.015 20.2272 1.36886 16.3294 1.02607C15.6751 0.968518 14.3499 0.956678 13.8061 1.00361ZM17.1509 2.96893C18.9251 3.25216 20.4568 3.76478 21.8747 4.55002C27.0133 7.39572 29.381 12.7746 27.7636 17.9284C26.508 21.929 22.8419 25.1378 18.3202 26.1936C17.0855 26.4819 16.364 26.56 14.9504 26.5588C12.6773 26.5568 11.2993 26.259 8.8606 25.2428C8.67142 25.1639 8.62975 25.1826 6.34537 26.3699C5.06784 27.034 4.01135 27.5657 3.99768 27.5514C3.98395 27.5371 4.23575 26.4324 4.5572 25.0964L5.14172 22.6673L4.7279 22.2049C2.17559 19.3531 1.19286 15.6171 2.07067 12.1034C3.25824 7.34995 7.61962 3.673 12.9259 2.95166C14.0016 2.80544 14.0223 2.80434 15.2438 2.82649C15.999 2.84016 16.6474 2.88862 17.1509 2.96893Z"></path></svg></div>
                            Написать сообщение
                        </li>
                        <li className={classes.Action}>
                            <div className={classes.Icon}><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.05954 1.0108C5.08146 1.00107 5.10546 0.997053 5.12932 0.999116C5.15318 1.00118 5.17615 1.00925 5.19611 1.0226C5.21607 1.03594 5.23238 1.05413 5.24354 1.07549C5.2547 1.09685 5.26036 1.12069 5.25999 1.14483V2.29815C5.25999 2.4308 5.31227 2.55801 5.40532 2.6518C5.49837 2.7456 5.62457 2.79829 5.75616 2.79829C6.41804 2.79829 7.75372 2.80329 9.03085 3.62052C10.0073 4.24469 11.0056 5.381 11.6059 7.49759C10.5938 6.51432 9.43771 5.98117 8.42553 5.69809C7.80338 5.52488 7.164 5.42222 6.51926 5.39201C6.25535 5.38032 5.99101 5.38299 5.72738 5.40001H5.71448L5.70952 5.40101H5.70853L5.75616 5.89915L5.70654 5.40101C5.58407 5.41342 5.47055 5.47127 5.38802 5.56332C5.3055 5.65538 5.25987 5.77507 5.25999 5.89915V7.05247C5.25999 7.1605 5.15084 7.22851 5.05954 7.1865L1.1061 4.25269C1.09268 4.24266 1.07877 4.23331 1.06442 4.22468C1.04284 4.21161 1.02499 4.19314 1.01259 4.17105C1.0002 4.14897 0.993682 4.12402 0.993682 4.09865C0.993682 4.07327 1.0002 4.04833 1.01259 4.02625C1.02499 4.00416 1.04284 3.98568 1.06442 3.97261C1.07877 3.96399 1.09268 3.95465 1.1061 3.94461L5.05954 1.0108ZM6.25232 6.38528C6.3198 6.38528 6.39423 6.38828 6.47361 6.39128C6.90429 6.41129 7.49968 6.47731 8.16058 6.66236C9.47641 7.03046 11.0344 7.86469 12.0704 9.74321C12.1264 9.84461 12.2157 9.92321 12.3229 9.96555C12.4301 10.0079 12.5486 10.0113 12.658 9.97524C12.7674 9.93918 12.861 9.86587 12.9227 9.76787C12.9844 9.66988 13.0104 9.5533 12.9962 9.43812C12.5358 5.7271 11.1247 3.77456 9.56274 2.77628C8.32729 1.98607 7.05512 1.83402 6.25232 1.80502V1.14483C6.25242 0.938845 6.19735 0.736652 6.09293 0.559586C5.9885 0.382521 5.8386 0.237151 5.65904 0.138814C5.47948 0.040478 5.27691 -0.00717803 5.07272 0.000874986C4.86852 0.00892801 4.67027 0.0723913 4.49888 0.184569L0.535506 3.12538C0.371653 3.22848 0.236523 3.37191 0.142839 3.54218C0.0491557 3.71245 0 3.90395 0 4.09865C0 4.29335 0.0491557 4.48485 0.142839 4.65512C0.236523 4.82539 0.371653 4.96882 0.535506 5.07192L4.49888 8.01273C4.67027 8.12491 4.86852 8.18837 5.07272 8.19642C5.27691 8.20448 5.47948 8.15682 5.65904 8.05848C5.8386 7.96015 5.9885 7.81478 6.09293 7.63771C6.19735 7.46065 6.25242 7.25845 6.25232 7.05247V6.38528V6.38528Z" fill="white"></path></svg></div>
                            Поделиться профилем
                        </li>
                        <li className={classes.Action}>
                            <div className={classes.Icon}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg></div>
                            Добавить в панель
                        </li>
                        <li className={classes.Action} style={{color: '#fb3737'}}>
                            <div className={classes.Icon} style={{fill: '#fb3737', color: '#fb3737'}}><svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24"><g><path fill="none" d="M0 0h24v24H0z"/><path d="M14 14.252v2.09A6 6 0 0 0 6 22l-2-.001a8 8 0 0 1 10-7.748zM12 13c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm7 6.586l2.121-2.122 1.415 1.415L20.414 19l2.122 2.121-1.415 1.415L19 20.414l-2.121 2.122-1.415-1.415L17.586 19l-2.122-2.121 1.415-1.415L19 17.586z"/></g></svg></div>
                            Отписаться
                        </li>
                    </ul>
                </ContextMenu>
            </CSSTransition>
            <div className={classes.Avatar}>
                <img src={user.avatar} alt="" />
            </div>
            <div className={classes.Names}>
                <div className={classes.Name}>qwrer</div>
                <div className={classes.IdName}>#qwfgg</div>
            </div>
            <div className={classes.More} onClick={contextMenuOpen}>
                <svg width="15" height="4" viewBox="0 0 15 4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.73077 3.15789C1.27174 3.15789 0.831513 2.99154 0.506931 2.69543C0.182348 2.39932 0 1.99771 0 1.57895C0 1.16018 0.182348 0.758573 0.506931 0.462463C0.831513 0.166353 1.27174 0 1.73077 0C2.1898 0 2.63003 0.166353 2.95461 0.462463C3.27919 0.758573 3.46154 1.16018 3.46154 1.57895C3.46154 1.99771 3.27919 2.39932 2.95461 2.69543C2.63003 2.99154 2.1898 3.15789 1.73077 3.15789ZM7.5 3.15789C7.04097 3.15789 6.60074 2.99154 6.27616 2.69543C5.95158 2.39932 5.76923 1.99771 5.76923 1.57895C5.76923 1.16018 5.95158 0.758573 6.27616 0.462463C6.60074 0.166353 7.04097 0 7.5 0C7.95903 0 8.39926 0.166353 8.72384 0.462463C9.04842 0.758573 9.23077 1.16018 9.23077 1.57895C9.23077 1.99771 9.04842 2.39932 8.72384 2.69543C8.39926 2.99154 7.95903 3.15789 7.5 3.15789ZM13.2692 3.15789C12.8102 3.15789 12.37 2.99154 12.0454 2.69543C11.7208 2.39932 11.5385 1.99771 11.5385 1.57895C11.5385 1.16018 11.7208 0.758573 12.0454 0.462463C12.37 0.166353 12.8102 0 13.2692 0C13.7283 0 14.1685 0.166353 14.4931 0.462463C14.8177 0.758573 15 1.16018 15 1.57895C15 1.99771 14.8177 2.39932 14.4931 2.69543C14.1685 2.99154 13.7283 3.15789 13.2692 3.15789Z" fill="white"/></svg>
                <div className={classes.Order} style={id === 0 ? {color: '#FFB800'} : {color: 'white'}}>{id + 1}</div>
            </div>
        </div>
    )
}

export default CentralFriendsProfile