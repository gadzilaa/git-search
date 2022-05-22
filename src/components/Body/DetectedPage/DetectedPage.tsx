import React from 'react';
import style from './DetectedPage.module.css';
import empty from '../../../assets/Empty.png';
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../../state/store";
import { StatusContainer } from '../StatusContainer/StatusContainer';
import { UserRepositoryType } from '../../../api/git-api';
import { Profile } from './Profile/Profile';
import { Repositories } from './Repositories/Repositories';


export const DetectedPage = () => {
    const repos = useSelector<AppRootStateType, null | UserRepositoryType[]>(state => state.user.repos);

    return (
        <div className={style.container}>
            <Profile />
            {
                repos ? <Repositories repos={repos} />
                    : <StatusContainer img={empty} title={'Repository list is empty'} />
            }


        </div>
    );
};

