import { Dispatch } from "redux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setAppStatusAC } from "./status-reducer";
import { gitHubApi, UserRepositoryType, UserType } from "../api/git-api";

const initialState = {
    user: null as null | UserType,
    repos: null as null | UserRepositoryType[]
};
export type InitialStateType = typeof initialState;

const userReducer = createSlice({
    name: 'user-toolkit',
    initialState,
    reducers: {
        getUserAC(state: InitialStateType, action: PayloadAction<UserType>) {
            state.user = action.payload
        },
        getRepositoriesAC(state: InitialStateType, action: PayloadAction<null | UserRepositoryType[]>) {
            state.repos = action.payload
        },
    }
})

export const { getUserAC, getRepositoriesAC } = userReducer.actions;
export default userReducer.reducer;


export const getUserTC = (username: string) => (dispatch: Dispatch<any>) => {
    dispatch(setAppStatusAC('loading'))
    gitHubApi.getUser(username).then((res) => {
        dispatch(getUserAC(res.data))
        dispatch(getRepositoriesTC(username))
    }).then(() => dispatch(setAppStatusAC('success')))
        .catch(() => {
            dispatch(setAppStatusAC('fail'))
        })
};

export const getRepositoriesTC = (username: string) => (dispatch: Dispatch) => {
    gitHubApi.getUserRepositories(username).then((res) => {
        if (res.data.length !== 0) {
            dispatch(getRepositoriesAC(res.data))
        } else {
            dispatch(getRepositoriesAC(null))
        }
    })
        .catch(() => {
            dispatch(setAppStatusAC('fail'))
        })
};
