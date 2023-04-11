import classes from './DownloadOnGooglePlay.module.scss'
import downloadIcon from '../../../../images/android-en.png';

function DownloadOnGooglePlay() {
  return (
    <div className={classes.DownloadOnGooglePlay}>
        <img src={downloadIcon} alt="" />
    </div>
  )
}

export default DownloadOnGooglePlay