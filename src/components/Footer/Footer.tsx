import React from 'react';
import LeftFooterPart from './LeftFooterPart/LeftFooterPart';
import MainNavigation from './MainNavigation/MainNavigation';
import RightFooterPart from './RightFooterPart/RightFooterPart';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <LeftFooterPart />
      <MainNavigation />
      <RightFooterPart />
    </div>
  )
}

export default Footer;