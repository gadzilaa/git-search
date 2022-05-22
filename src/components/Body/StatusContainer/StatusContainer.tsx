import React from 'react';
import style from '../StatusContainer/StatusContainer.module.css';


type StatusContainerType = {
    img: string
    title: string

}

export const StatusContainer = (props: StatusContainerType) => {
    return (
        <div className={style.container}>
            <div>
                <img src={props.img} alt='user not found' className={style.img} />
                <div className={style.title}>{props.title}</div>
            </div>
        </div>
    );
};
