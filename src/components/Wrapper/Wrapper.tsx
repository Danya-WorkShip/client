import classes from './Wrapper.module.scss';
import SearcherPage from '../../pages/SearcherPage/SearcherPage';
import MusicPage from './../../pages/MusicPage/MusicPage';
import ProfilePage from './../../pages/ProfilePage/ProfilePage';
import Footer from '../Footer/Footer';
import { Routes, Route} from 'react-router-dom';
import NotFoundPage from './../../pages/NotFoundPage/NotFoundPage';
import HomePage from './../../pages/HomePage/HomePage';
import MessengerPage from './../../pages/MessengerPage/MessengerPage';
import FriendsPage from './../../pages/FriendsPage/FriendsPage';
import LoginPage from './../../pages/LoginPage/LoginPage';
import SettingsPage from './../../pages/SettingsPage/SettingsPage';
import PrivacyPolicyPage from './../../pages/PrivacyPolicyPage/PrivacyPolicyPage';
import UserAgreement from './../../pages/UserAgreement/UserAgreement';
import CreateThemePage from './../../pages/CreateThemePage/CreateThemePage';
import LeftNavMenu from '../LeftNavMenu/LeftNavMenu';
import AlbumPage from '../../pages/AlbumPage/AlbumPage';

function Wrapper() {
  const isLogin = true
  const isFoterLeft = false

  return (
    <div className={classes.Wrapper} onContextMenu={e => e.preventDefault()}>
      {isLogin && !isFoterLeft && <Footer />}
      {isFoterLeft && <LeftNavMenu />}
      <Routes>
        <Route path='/feed' element={<HomePage />}></Route>
        <Route path='/settings' element={<SettingsPage />}></Route>
        <Route path='/profile/megabebrick' element={<ProfilePage />}></Route>
        <Route path='/friends' element={<FriendsPage />}></Route>
        <Route path='/music/*' element={<MusicPage />}></Route>
        <Route path='/messenger' element={<MessengerPage />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/searcher' element={<SearcherPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/privacy_policy' element={<PrivacyPolicyPage />}></Route>
        <Route path='/user_agreement' element={<UserAgreement />}></Route>
        <Route path='/faq' element={<UserAgreement />}></Route>
        <Route path='/create_theme' element={<CreateThemePage />}></Route>
        <Route path='/playlist/*' element={<AlbumPage />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  )
}

export default Wrapper