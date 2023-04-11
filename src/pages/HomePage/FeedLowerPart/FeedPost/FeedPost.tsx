import React, { FC, useState } from 'react'
import classes from './FeedPost.module.scss';
import { IUser, IPost, IComment} from './../../../../types/types';
import ContextMenu from '../../../../components/ContextMenu/ContextMenu';
import { CSSTransition } from 'react-transition-group';
import CommentSection from './CommentSection/CommentSection';
import RepostPopUp from './../../../../components/RepostPopUp/RepostPopUp';

const comments: IComment[] = [
    {id: 1, post_id: 1, user_id: 1, text: 'WHATS GOODD MAAN', album_id: 1},
    {id: 1, post_id: 1, user_id: 1, text: 'WHATS GOODD MAAN', album_id: 1},
    {id: 1, post_id: 1, user_id: 1, text: 'WHATS GOODD MAAN', album_id: 1},
    {id: 1, post_id: 1, user_id: 1, text: 'WHATS GOODD MAAN', album_id: 1},
]

interface ILikedPost {
    post_id: number
    likes_count: number
    isLiked: boolean
}

interface IFeedPost {
    user: IUser
    post: IPost
    likedPostsArr: ILikedPost[]
    setLikedPostsArr: Function
}


const FeedPost: FC<IFeedPost> = ({user, post, likedPostsArr, setLikedPostsArr}) => {

    const initialContextMenu = {
        show: false,
        x: 0,
        y: 0
    }

    const initialLikesState = {
        likesCount: post.likes_count,
        isSettedLike: false
    }

    const [openCommentSection, setOpenCommentSection] = useState<boolean>(false)

    const [repostPopupOpen, setRepostPopupOpen] = useState(false)

    const [likesState, setLikesState] = useState(initialLikesState)

    const [contextMenu, setContextMenu] = useState(initialContextMenu)
    
    const contextMenuOpen = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        e.preventDefault()
        const {pageX, pageY} = e
        setContextMenu({show: !contextMenu.show, x: pageX, y: pageY})
    }

    const contextMenuClose = () => setContextMenu({
        show: false,
        x: contextMenu.x,
        y: contextMenu.y
    })

    const isUserOwnerProfile = true

    return (
        <div className={classes.FeedPost}>

            <CSSTransition
                in={contextMenu.show}
                unmountOnExit 
                timeout={300}
                classNames="contextMenu"
            >
                <ContextMenu x={contextMenu.x} y={contextMenu.y} closeContextMenu={contextMenuClose} height={document.getElementById('ContextButtons')?.offsetHeight} width={document.getElementById('ContextButtons')?.offsetWidth}>
                    <ul className={classes.ContextButtons} id='ContextButtons'>
                        {!isUserOwnerProfile
                            ?
                            <>
                                <li className={classes.ContextVariant} key='edit'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path></svg>
                                    Редактировать
                                </li>
                                <li className={classes.ContextVariant} key='follow'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
                                    Подписаться
                                </li>
                            </>
                            :
                            <>
                                <li className={classes.ContextVariant} key='notInteresting'>
                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 30.9375C12.6709 30.9375 8.9987 29.4164 6.29115 26.7089C3.58359 24.0013 2.0625 20.3291 2.0625 16.5C2.0625 12.6709 3.58359 8.9987 6.29115 6.29115C8.9987 3.58359 12.6709 2.0625 16.5 2.0625C20.3291 2.0625 24.0013 3.58359 26.7089 6.29115C29.4164 8.9987 30.9375 12.6709 30.9375 16.5C30.9375 20.3291 29.4164 24.0013 26.7089 26.7089C24.0013 29.4164 20.3291 30.9375 16.5 30.9375ZM16.5 33C20.8761 33 25.0729 31.2616 28.1673 28.1673C31.2616 25.0729 33 20.8761 33 16.5C33 12.1239 31.2616 7.92709 28.1673 4.83274C25.0729 1.73839 20.8761 0 16.5 0C12.1239 0 7.92709 1.73839 4.83274 4.83274C1.73839 7.92709 0 12.1239 0 16.5C0 20.8761 1.73839 25.0729 4.83274 28.1673C7.92709 31.2616 12.1239 33 16.5 33V33Z" fill="white"/><path d="M22.7273 10.2727C22.641 10.1863 22.5386 10.1177 22.4258 10.0709C22.313 10.0241 22.1921 10 22.07 10C21.9479 10 21.8269 10.0241 21.7142 10.0709C21.6014 10.1177 21.4989 10.1863 21.4127 10.2727L10.2723 21.4132C10.1859 21.4995 10.1175 21.602 10.0708 21.7147C10.024 21.8275 10 21.9484 10 22.0705C10 22.1925 10.024 22.3134 10.0708 22.4262C10.1175 22.539 10.1859 22.6414 10.2723 22.7277C10.4466 22.9021 10.683 23 10.9295 23C11.0516 23 11.1725 22.976 11.2853 22.9292C11.398 22.8825 11.5005 22.8141 11.5868 22.7277L22.7273 11.5873C22.8137 11.5011 22.8823 11.3986 22.9291 11.2858C22.9759 11.1731 23 11.0521 23 10.93C23 10.8079 22.9759 10.687 22.9291 10.5742C22.8823 10.4614 22.8137 10.359 22.7273 10.2727V10.2727Z" fill="white"/></svg>
                                    Не интересно
                                </li>
                                <li className={classes.ContextVariant} key='pin'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146zm.122 2.112v-.002.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a4.507 4.507 0 0 0-.288-.076 4.922 4.922 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a4.924 4.924 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034.114 0 .23-.011.343-.04L9.927 2.028c-.029.113-.04.23-.04.343a1.779 1.779 0 0 0 .062.46z"/></svg>
                                    Закрепить
                                </li>
                                <li className={classes.ContextVariant} key='copyLink'>
                                    <svg width="41" height="49" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.297 0.545468C4.30537 1.2798 2.12913 3.34094 1.10164 5.46623C0.192658 7.34688 0.179359 7.56244 0.0502869 22.2319C-0.0971686 38.9772 -0.0869996 39.0474 2.5144 39.0474C5.06299 39.0474 5.07003 39.0023 5.07003 23.0013C5.07003 7.79194 5.09663 7.55646 7.02606 5.77662C7.82827 5.03631 8.59371 4.96659 17.9198 4.78131C23.437 4.67174 28.1517 4.44941 28.3965 4.28684C29.207 3.75014 29.3924 1.96472 28.7423 0.953871L28.1286 0L17.8705 0.0302817C10.8634 0.0510007 7.19542 0.214362 6.297 0.545468ZM12.4197 7.55447C10.6006 8.13261 8.91913 9.61761 8.1619 11.3162C7.49307 12.8171 7.43401 14.1754 7.43401 28.0902C7.43401 41.9385 7.49542 43.3669 8.15251 44.8248C9.00713 46.7206 9.87935 47.5701 11.8186 48.3956C13.0013 48.8989 15.2362 49.0068 24.3206 48.9997C34.2064 48.9917 35.5507 48.9132 36.963 48.2594C38.6727 47.4685 40.5356 45.4854 40.8739 44.0968C40.9901 43.6207 41.0339 36.1344 40.9717 27.4611L40.8583 11.6911L39.7623 10.228C37.6526 7.41103 37.495 7.38035 24.822 7.29469C18.5835 7.25245 13.0025 7.36959 12.4197 7.55447ZM13.0651 12.9171C12.3376 13.4594 12.3059 14.0897 12.3059 28.044C12.3059 41.491 12.3595 42.6593 13.0045 43.3163C13.6404 43.9646 14.6476 44.0279 24.2838 44.0279H34.865L35.6125 43.0872C36.3173 42.201 36.3603 41.3372 36.3603 28.1348C36.3603 16.0979 36.2747 13.9981 35.7513 13.2375C35.1474 12.3589 35.0547 12.3517 24.4833 12.3517C15.8953 12.3517 13.6768 12.4617 13.0651 12.9171Z" fill="white"/></svg>
                                    Копировать ссылку на пост
                                </li>
                                <li className={classes.ContextVariantRed} key='report'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001M14 1.221c-.22.078-.48.167-.766.255-.81.252-1.872.523-2.734.523-.886 0-1.592-.286-2.203-.534l-.008-.003C7.662 1.21 7.139 1 6.5 1c-.669 0-1.606.229-2.415.478A21.294 21.294 0 0 0 3 1.845v6.433c.22-.078.48-.167.766-.255C4.576 7.77 5.638 7.5 6.5 7.5c.847 0 1.548.28 2.158.525l.028.01C9.32 8.29 9.86 8.5 10.5 8.5c.668 0 1.606-.229 2.415-.478A21.317 21.317 0 0 0 14 7.655V1.222z"/></svg>
                                    Пожаловаться
                                </li>
                            </>
                        }
                    </ul>
                </ContextMenu>
            </CSSTransition>

            <div className={classes.PostWrapper} style={contextMenu.show ? {background: 'rgba(255, 255, 255, 0.05)'} : {}} onContextMenu={contextMenuOpen}>
                <div className={classes.Background} style={post.image_id !== 0 ? {background: `url(${user.avatar})`} : {}}>
                    <div className={classes.Post} style={post.image_id !== 0 ? {background: 'rgba(0, 0, 0, 0.3)'} : {}}>
                        <div className={classes.postInfo}>
                            <div className={classes.avatar}><img src={user.avatar} alt="" /></div>
                            <div className={classes.names}>
                                <div className={classes.creatorName}>{user.name}</div>
                                <div className={classes.creatorId}>#{user.id_name}</div>
                            </div>
                        </div>
                        {post.image_id === 0 && <div className={classes.postText}><span>{post.text}</span></div>}
                        <div className={classes.AdditionalContent}>
                            {post.image_id !== 0 && <img src={user.avatar} alt=''/>} {/* TODO: Изменить на поиск картинок с индексом поста*/}
                        </div>
                        <div className={classes.pubDate}></div>
                        <div className={classes.Actions}>
                            <div className={classes.Action} onClick={() => setRepostPopupOpen(true)}><svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.05954 1.0108C5.08146 1.00107 5.10546 0.997053 5.12932 0.999116C5.15318 1.00118 5.17615 1.00925 5.19611 1.0226C5.21607 1.03594 5.23238 1.05413 5.24354 1.07549C5.2547 1.09685 5.26036 1.12069 5.25999 1.14483V2.29815C5.25999 2.4308 5.31227 2.55801 5.40532 2.6518C5.49837 2.7456 5.62457 2.79829 5.75616 2.79829C6.41804 2.79829 7.75372 2.80329 9.03085 3.62052C10.0073 4.24469 11.0056 5.381 11.6059 7.49759C10.5938 6.51432 9.43771 5.98117 8.42553 5.69809C7.80338 5.52488 7.164 5.42222 6.51926 5.39201C6.25535 5.38032 5.99101 5.38299 5.72738 5.40001H5.71448L5.70952 5.40101H5.70853L5.75616 5.89915L5.70654 5.40101C5.58407 5.41342 5.47055 5.47127 5.38802 5.56332C5.3055 5.65538 5.25987 5.77507 5.25999 5.89915V7.05247C5.25999 7.1605 5.15084 7.22851 5.05954 7.1865L1.1061 4.25269C1.09268 4.24266 1.07877 4.23331 1.06442 4.22468C1.04284 4.21161 1.02499 4.19314 1.01259 4.17105C1.0002 4.14897 0.993682 4.12402 0.993682 4.09865C0.993682 4.07327 1.0002 4.04833 1.01259 4.02625C1.02499 4.00416 1.04284 3.98568 1.06442 3.97261C1.07877 3.96399 1.09268 3.95465 1.1061 3.94461L5.05954 1.0108ZM6.25232 6.38528C6.3198 6.38528 6.39423 6.38828 6.47361 6.39128C6.90429 6.41129 7.49968 6.47731 8.16058 6.66236C9.47641 7.03046 11.0344 7.86469 12.0704 9.74321C12.1264 9.84461 12.2157 9.92321 12.3229 9.96555C12.4301 10.0079 12.5486 10.0113 12.658 9.97524C12.7674 9.93918 12.861 9.86587 12.9227 9.76787C12.9844 9.66988 13.0104 9.5533 12.9962 9.43812C12.5358 5.7271 11.1247 3.77456 9.56274 2.77628C8.32729 1.98607 7.05512 1.83402 6.25232 1.80502V1.14483C6.25242 0.938845 6.19735 0.736652 6.09293 0.559586C5.9885 0.382521 5.8386 0.237151 5.65904 0.138814C5.47948 0.040478 5.27691 -0.00717803 5.07272 0.000874986C4.86852 0.00892801 4.67027 0.0723913 4.49888 0.184569L0.535506 3.12538C0.371653 3.22848 0.236523 3.37191 0.142839 3.54218C0.0491557 3.71245 0 3.90395 0 4.09865C0 4.29335 0.0491557 4.48485 0.142839 4.65512C0.236523 4.82539 0.371653 4.96882 0.535506 5.07192L4.49888 8.01273C4.67027 8.12491 4.86852 8.18837 5.07272 8.19642C5.27691 8.20448 5.47948 8.15682 5.65904 8.05848C5.8386 7.96015 5.9885 7.81478 6.09293 7.63771C6.19735 7.46065 6.25242 7.25845 6.25232 7.05247V6.38528V6.38528Z" fill="white"/></svg>
                                {post.shares_count}
                            </div>
                            <div className={classes.Action} onClick={() => setOpenCommentSection(!openCommentSection)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 1C14.2652 1 14.5196 1.10536 14.7071 1.29289C14.8946 1.48043 15 1.73478 15 2V10C15 10.2652 14.8946 10.5196 14.7071 10.7071C14.5196 10.8946 14.2652 11 14 11H4.414C3.88361 11.0001 3.37499 11.2109 3 11.586L1 13.586V2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H14ZM2 0C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14.793C2.10149e-05 14.8919 0.0293926 14.9886 0.0843973 15.0709C0.139402 15.1531 0.217567 15.2172 0.308999 15.255C0.400432 15.2928 0.501021 15.3026 0.598036 15.2832C0.695051 15.2638 0.784131 15.216 0.854 15.146L3.707 12.293C3.89449 12.1055 4.14881 12.0001 4.414 12H14C14.5304 12 15.0391 11.7893 15.4142 11.4142C15.7893 11.0391 16 10.5304 16 10V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0L2 0Z" fill="white"/></svg>
                                    {post.likes_count - 255}
                            </div>
                            <div className={classes.Action}
                                onClick={ () => {
                                        setLikesState(!likesState.isSettedLike ? {
                                            likesCount: likesState.likesCount + 1,
                                            isSettedLike: !likesState.isSettedLike
                                        } : {
                                            likesCount: likesState.likesCount - 1,
                                            isSettedLike: !likesState.isSettedLike
                                        });
                                        likesState.isSettedLike && setLikedPostsArr([...likedPostsArr, {post_id: post.id, likes_count: post.likes_count + 1, isSettedLike: true}])
                                        localStorage.setItem('likedPosts', JSON.stringify(likedPostsArr))
                                    }
                                }
                                style={likesState.isSettedLike ? {background: '#EA294C'} : {}}
                            >
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9999 2.74805L7.2829 2.01105C5.5999 0.281049 2.5139 0.878049 1.39989 3.05305C0.876895 4.07605 0.758895 5.55305 1.71389 7.43805C2.63389 9.25305 4.5479 11.427 7.9999 13.795C11.4519 11.427 13.3649 9.25305 14.2859 7.43805C15.2409 5.55205 15.1239 4.07605 14.5999 3.05305C13.4859 0.878049 10.3999 0.280049 8.7169 2.01005L7.9999 2.74805ZM7.9999 15C-7.33311 4.86805 3.27889 -3.03995 7.82389 1.14305C7.88389 1.19805 7.94289 1.25505 7.9999 1.31405C8.05632 1.2551 8.11503 1.19839 8.17589 1.14405C12.7199 -3.04195 23.3329 4.86705 7.9999 15Z" fill="white"/></svg>
                                {likesState.likesCount}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CSSTransition
                in={openCommentSection}
                unmountOnExit 
                timeout={300}
                classNames="commentSection"
            >
                <CommentSection comments={comments} />
            </CSSTransition>
            <CSSTransition
                in={repostPopupOpen}
                unmountOnExit 
                timeout={300}
                classNames="repostPopup"
            >
                <RepostPopUp />
            </CSSTransition>
        </div>
    )
}

export default FeedPost