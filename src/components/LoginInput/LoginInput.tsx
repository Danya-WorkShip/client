import React, { FC, useState } from 'react'
import classes from './LoginInput.module.scss';

interface ILoginInput {
    placeholder: string
    type?: string
}

const LoginInput: FC<ILoginInput> = ({placeholder, type = 'text'}) => {
    const [value, setValue] = useState('')
    return (
        <div className={classes.Input}>
            <input type={type} name="Email" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
        </div>
    )
}

export default LoginInput