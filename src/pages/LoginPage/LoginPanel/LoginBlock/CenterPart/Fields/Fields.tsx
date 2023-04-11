import React from 'react'
import classes from './Fields.module.scss';
import Field from './Field/Field';

const Fields = () => {
  return (
    <div className={classes.Fields}>
        <Field fieldName='Почта' inputType='text'/>
        <Field fieldName='Пароль' inputType='password'/>
    </div>
  )
}

export default Fields