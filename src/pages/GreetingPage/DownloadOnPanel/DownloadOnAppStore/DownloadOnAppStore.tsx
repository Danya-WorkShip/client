import classes from './DownloadOnAppStore.module.scss'
import downloadIcon from '../../../../images/ios-en.png';

function DownloadOnAppStore() {
  return (
    <div className={classes.DownloadOnAppStore}>
        <img src={downloadIcon} alt="" />
    </div>
  )
}

export default DownloadOnAppStore