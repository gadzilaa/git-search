import React, { ChangeEvent, KeyboardEvent } from 'react';
import style from './Header.module.css';
import logo from '../../assets/logo.svg';
import { InputContainer } from './InputContainer/InputContainer';


type HeaderType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

export const Header = (props: HeaderType) => {

    return (
        <div className={style.container}>
            <img src={logo} alt="logo" className={style.logo} />
            <InputContainer
                onChange={props.onChange}
                onKeyPress={props.onKeyPress}
            />
        </div>
    );
};

