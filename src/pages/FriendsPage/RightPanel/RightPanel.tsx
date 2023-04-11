import React from 'react'
import classes from './RightPanel.module.scss';
import avatar from '../../../images/ToPimpAButterfly.png';

const RightPanel = () => {
  return (
    <section className={classes.RightPanel}>
        <div className={classes.UpperPanel}>
            <div className={classes.Title}>Активность друзей</div>
        </div>
        <div className={classes.LowerPart}>
            <div className={classes.ActivityList}>
                <div className={classes.Activity}>
                    <div className={classes.UpperActivityPart}>
                        <div className={classes.Avatar}><img src={avatar} alt="" /></div>
                        <div className={classes.Info}>
                            <div className={classes.Name}>Mr.Bebr</div>
                            <div className={classes.ActivityProcess}>Слушает:</div>
                        </div>
                    </div>
                    <div className={classes.BottomActivityPart}>
                        <div className={classes.ActionContent}>
                            <div className={classes.ActionUpperPart}>
                                <div className={classes.Preview}><img src={avatar} alt="" /></div>
                                <div className={classes.ActionInfo}>
                                    <div className={classes.Name}>Wesley's Theory</div>
                                    <div className={classes.Artist}>Kendrick Lamar</div>
                                </div>
                                <div className={classes.Play}></div>
                            </div>
                            <div className={classes.CompleteProcess}>
                                <div className={classes.DurationBar}>
                                    <div className={classes.CompletedDurationBar}></div>
                                    <div className={classes.Slider}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default RightPanel