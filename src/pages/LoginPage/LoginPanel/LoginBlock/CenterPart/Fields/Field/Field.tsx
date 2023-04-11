import React, { FC } from 'react'
import classes from './Field.module.scss';
import LoginInput from './../../../../../../../components/LoginInput/LoginInput';

interface IField {
    fieldName: string
    inputType: string
}

const Field: FC<IField> = ({fieldName, inputType}) => {
  return (
    <div className={classes.Field}>
        <h1>{fieldName}</h1>
        <LoginInput placeholder='' type={inputType}/>
    </div>
  )
}

export default Field