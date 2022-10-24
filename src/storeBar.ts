import { createSlice } from "@reduxjs/toolkit"

interface Bar {
    color: string
}

const initialState: Bar = {
    color: "#000"
}

export const bar = createSlice({
    name: "status-bar-color",
    initialState,
    reducers: {
        setCor: (state, actions) => {
            state.color = actions.payload
        }
    }
})

export const { setCor } = bar.actions
export default bar.reducer;