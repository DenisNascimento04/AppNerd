import { createSlice } from "@reduxjs/toolkit"

interface User {
    cart: [
        {
            id: number,
            num: number
        }
    ]
}

const initialState: User = {
    cart: [
        {
            id: 999,
            num: 0
        }
    ]
}

export const usuario = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        pushProduto: (state, actions) => {
           state.cart.push(actions.payload);
        },
        deleteProduto: (state, actions) => {
            var idx = state.cart.findIndex((item) => item.id === actions.payload)
            state.cart = state.cart.slice(idx, idx+1);
        }
       
    }
})

export const { pushProduto, deleteProduto } = usuario.actions
export default usuario.reducer;