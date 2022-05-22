import React, { ChangeEvent, KeyboardEvent } from 'react';
import style from '../InputContainer/InputContainer.module.css';
import { Input } from './Input/Input';
import search from '../../../assets/search.svg';

type InputContainerType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const InputContainer = (props: InputContainerType) => {
    return (
        <div className={style.container}>
            <img src={search} alt="logoSearch" className={style.logoSearch} />
            <Input
                type="text"
                placeholder={"Enter GitHub username"}
                onChange={props.onChange}
                onKeyPress={props.onKeyPress} />
        </div>
    )
}
