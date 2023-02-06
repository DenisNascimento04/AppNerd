// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import UserReducer from '../store';
import CartReducer from './cart'; 

const store = configureStore({
    reducer: {
        usuario: UserReducer,
        cart: CartReducer
        // modal: ModalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;