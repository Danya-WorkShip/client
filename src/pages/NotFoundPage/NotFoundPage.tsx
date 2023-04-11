import React, { useEffect, useState } from 'react'
import classes from './NotFoundPage.module.scss';
import Meme1 from '../../images/404notFound1.png';
import Meme2 from '../../images/404notFound2.png';
import Meme3 from '../../images/404notFound3.png';
import Meme4 from '../../images/404notFound4.png';
import Meme5 from '../../images/404notFound5.png';
import Meme6 from '../../images/404notFound6.png';

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const Memes = [
    Meme1,
    Meme2,
    Meme3,
    Meme4,
    Meme5,
    Meme6,
  ]

  const [Meme, setMeme] = useState('')

  function randomMeme(min: number, max: number) {
    return Memes[Math.floor(Math.random() * (max - min + 1) + min)]
  }

  useEffect(() => setMeme(randomMeme(0,5)))

  return (
    <div className={classes.NotFoundPage} style={{background: `url(${Meme})`}}>
      <div className={classes.NotFoundContent}>
        <div className={classes.Container}>
          <div className={classes.Picture}><img src={Meme} alt="" /></div>
          <div className={classes.Title}>Ошибка 404</div>
          <div className={classes.SubTitle}>Страница не найдена</div>
          <Link to='/feed' className={classes.HomeButton}><div className={classes.Button}><svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.5652 1.06449C14.4548 1.11471 11.1533 4.37985 7.22837 8.32034C-0.531482 16.1109 -0.0703416 15.6026 0.0481877 16.2359C0.109927 16.5659 0.510064 16.9671 0.839297 17.0289C1.4702 17.1476 1.00365 17.5707 8.29427 10.2676L15 3.5504L21.7057 10.2676C28.9964 17.5707 28.5298 17.1476 29.1607 17.0289C29.4899 16.9671 29.8901 16.5659 29.9518 16.2359C30.0703 15.6026 30.5315 16.1109 22.7716 8.32027C18.5926 4.12451 15.5463 1.11672 15.4202 1.06181C15.1514 0.9446 14.8264 0.945606 14.5652 1.06449ZM3.85945 18.224C3.58908 18.3471 3.30908 18.689 3.25972 18.9568C3.23778 19.0756 3.23075 20.8474 3.24413 22.8942C3.27142 27.0779 3.25276 26.9042 3.79617 28.0237C4.31785 29.0984 5.17036 29.9431 6.26562 30.4704C7.38409 31.0088 6.78034 30.974 15 30.974C23.2669 30.974 22.6231 31.0135 23.7993 30.4345C25.1772 29.7563 26.1808 28.5271 26.6162 26.9844C26.7292 26.5841 26.7392 26.2329 26.7392 22.6812C26.7392 18.8798 26.7369 18.8107 26.6013 18.6287C26.3393 18.2768 26.1254 18.167 25.7024 18.167C25.2795 18.167 25.0657 18.2767 24.8035 18.6286C24.669 18.809 24.6648 18.9074 24.6322 22.5805C24.5998 26.227 24.5941 26.3595 24.4553 26.7275C24.1142 27.6304 23.4037 28.3427 22.5029 28.6845C22.1255 28.8277 22.0928 28.8284 15.2341 28.8485C10.3 28.863 8.23052 28.8472 7.94309 28.7927C7.48135 28.7052 6.87151 28.4149 6.49693 28.1043C6.1497 27.8164 5.72308 27.2002 5.54589 26.7307C5.40555 26.3587 5.40027 26.2364 5.36782 22.5805C5.33518 18.9074 5.33097 18.809 5.19645 18.6286C5.1206 18.5268 4.97986 18.3846 4.88374 18.3126C4.66233 18.1469 4.13022 18.1009 3.85945 18.224Z"></path></svg>На главную</div></Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage