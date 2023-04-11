import React, { FC } from 'react';
import UlItem from './MainNavUlItem/UlItem';
import classes from './Ul.module.scss';

interface IUl {
  categories: {isActive: boolean, icon?: JSX.Element, title: string, url: string}[]
}

const  Ul: FC<IUl> = ({categories}) => {
  return (
    <ul className={classes.UlNav}>
      {categories.map((categorie, id) => {
        if (categorie.title === 'Individual') {
          return <li key={'individualButton'} className={classes.individual_button}></li>
        } else {
          return <UlItem key={categorie.title + 'gett' + id} href={categorie.url} title={categorie.title}>{categorie.icon}</UlItem>
        }
      })
      }
    </ul>
  )
}

export default Ul;