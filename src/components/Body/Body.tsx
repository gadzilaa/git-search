import React from 'react';
import userImg from '../../assets/Union.png';
import search from '../../assets/search.svg';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../state/store';
import { DetectedPage } from './DetectedPage/DetectedPage';
import { StatusContainer } from './StatusContainer/StatusContainer';
import { Loader } from './Loader/Loader';
import { STATUSEES } from '../../constans';

export const Body = () => {

    const user = useSelector<AppRootStateType>(state => state.user.user);
    const status = useSelector<AppRootStateType>(state => state.app.appStatus);

    if (status === STATUSEES.loading) {
        return <Loader />
    } else if (status === STATUSEES.epmty || status === STATUSEES.success) {
        return <>{user
            ? <DetectedPage />
            : <StatusContainer
                img={search}
                title={'Start with searching a GitHub user'}
            />}
        </>
    } else {
        return <StatusContainer img={userImg} title={'User not found'} />
    }
}
