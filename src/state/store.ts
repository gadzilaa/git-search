import { useDispatch } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import userReducer from './userAndRepos-reducer';
import appReducer from './status-reducer';
import thunk from 'redux-thunk';


export const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<any>()

//@ts-ignore
window.store = store