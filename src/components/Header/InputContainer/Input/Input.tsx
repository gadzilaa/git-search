import React, { ChangeEvent, KeyboardEvent } from 'react';
import style from '../Input/Input.module.css';

type InputPropsType = {
    type: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}



export const Input = (props: InputPropsType) => {
    return (
        <>
            <input
                className={style.input}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress} />
        </>
    )
}
