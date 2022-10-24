import { PropsPerso } from './../services/types';
import { createSlice } from "@reduxjs/toolkit"
import { Modalize, ModalizeProps } from 'react-native-modalize';
import { forwardRef, RefObject, useRef } from 'react';

interface User {
    dataItem: PropsPerso | never[],
    modal: RefObject<Modalize> | null
}

const initialState: User = {
    dataItem: [],
    modal: null
}

export const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        open: (state, actions) => {
            state.modal?.current?.open()
        },
        close: (state, actions) => {
            state.modal?.current?.close()
        }
    }
})

export const { open, close } = modal.actions
export default modal.reducer;