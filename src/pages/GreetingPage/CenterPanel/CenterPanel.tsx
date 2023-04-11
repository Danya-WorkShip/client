import React from 'react'
import BrandName from './BrandName/BrandName'
import classes from './CenterPanel.module.scss';
import Description from './Description/Description';
import PreviewImages from './PreviewImages/PreviewImages';
import ChangeAction from './ChangeAction/ChangeAction';

function CenterPanel() {
  return (
    <div className={classes.CenterPanel}>
      <BrandName />
      <Description />
      <PreviewImages />
      <ChangeAction />
    </div>
  )
}

export default CenterPanel