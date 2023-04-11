import React from 'react';
import classes from './LeftFooterPart.module.scss';
import SearchForm from './SearchForm/SearchForm';
import Logo from './Logo/Logo';

function LeftFooterPart() {
  return (
    <div className={classes.leftFooterPart}>
      <Logo />
      <SearchForm />
    </div>
  )
}

export default LeftFooterPart;