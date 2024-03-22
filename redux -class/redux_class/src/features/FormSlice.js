// FormSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "empty",
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        submit: (state, action) => {
            // const { name } = action.payload;
            // state.name = name;

            state.name=action.payload.name

        },
    },
});

export default formSlice.reducer;
export const { submit } = formSlice.actions;
