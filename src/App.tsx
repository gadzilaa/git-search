import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { getUserTC } from './state/userAndRepos-reducer';
import { Body } from './components/Body/Body';
import { useAppDispatch } from './state/store';

function App() {

    const dispatch = useAppDispatch();
    const [input, getInput] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        getInput(e.currentTarget.value)
    }
    const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && input) {
            dispatch(getUserTC(input))
        }
    }

    return (
        <div className="App">
            <Header
                onChange={onChangeHandler}
                onKeyPress={onEnterPressHandler}
            />
            <Body />
        </div>
    );
}

export default App;
