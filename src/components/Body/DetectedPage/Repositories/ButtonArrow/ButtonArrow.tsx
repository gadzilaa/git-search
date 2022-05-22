import React from 'react';
import arrow from '../../../../../assets/previous.svg';
import disable from '../../../../../assets/disabledarrow.svg';
import style from '../Repositories.module.css';

type ButtonArrowType = {
    transform?: {
        transform: string
    }
}

export const ButtonArrow = ({ transform }: ButtonArrowType) => {
    return (
        <>
            <div className={style.arrow}>
                <img src={arrow} alt="next" style={transform} />
            </div>
            <div className={style.disabledArrow}>
                <img src={disable} alt="next" style={transform} />
            </div>
        </>

    )
};