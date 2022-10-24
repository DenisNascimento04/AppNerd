// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import UserReducer from '../store';
import ModalReducer from './modal';

const store = configureStore({
    reducer: {
        usuario: UserReducer,
        // modal: ModalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;