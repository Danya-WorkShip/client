import classes from './DownloadOnPanel.module.scss'
import DownloadOnGooglePlay from './DownloadOnGooglePlay/DownloadOnGooglePlay';
import DownloadOnAppStore from './DownloadOnAppStore/DownloadOnAppStore';

function DownloadOnPanel() {
  return (
    <div className={classes.DownloadOnPanel}>
      <DownloadOnGooglePlay />
      <DownloadOnAppStore />
    </div>
  )
}

export default DownloadOnPanel