import React from 'react';
import style from './Profile.module.css';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../../state/store';
import followerImg from '../../../../assets/shared.png';
import followingImg from '../../../../assets/provate.png';
import { UserType } from '../../../../api/git-api';


export const Profile = () => {

    const user = useSelector<AppRootStateType, UserType | null>(state => state.user.user);

    return (
        <div className={style.container}>

            <div>
                <img src={user?.avatar_url} alt="avatar" className={style.avatar} />
                <div className={style.name}>{user?.name}</div>
                <div className={style.login}>
                    <a href={user?.html_url} target='_blank' rel="noreferrer" >{user?.login}</a>
                </div>
                <div className={style.follow}>
                    <span className={style.text}>
                        <img src={followerImg} alt="followers" />
                        {user?.followers} followers</span>
                    <span className={style.follow}>
                        <img src={followingImg} alt="following" />{user?.following} following</span>
                </div>


            </div>

        </div>
    );
};

