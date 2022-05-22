import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StatusType } from '../constans';


const initialState: InitialStateType = {
    appStatus: 'empty'
};
type InitialStateType = {
    appStatus: StatusType
};

const appReducer = createSlice({
    name: 'app-toolkit',
    initialState,
    reducers: {
        setAppStatusAC(state: InitialStateType, action: PayloadAction<StatusType>) {
            state.appStatus = action.payload
        }
    }
})

export const { setAppStatusAC } = appReducer.actions;
export default appReducer.reducer;
