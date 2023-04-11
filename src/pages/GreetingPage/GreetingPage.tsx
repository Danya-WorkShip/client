import CenterPanel from './CenterPanel/CenterPanel';
import classes from './GreetingPage.module.scss';
import UpperLogo from './UpperLogo/UpperLogo';
import DownloadOnPanel from './DownloadOnPanel/DownloadOnPanel';

function GreetingPage() {
  return (
    <div className={classes.GreetingPage}>
      <UpperLogo />
      <CenterPanel />
      <DownloadOnPanel />
    </div>
  )
}

export default GreetingPage