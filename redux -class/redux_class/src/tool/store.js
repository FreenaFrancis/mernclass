import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import FormSlice from "../features/FormSlice";
// import FormSlice from '../features/FormSlice'

const store = configureStore({
    reducer:{
        counter: counterSlice,
        form: FormSlice
    }
});

export default store;
