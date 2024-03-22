import {configureStore} from '@reduxjs/toolkit'
// import cardreducer from './redux_conf'
import userReducer from './userReducer'
const store=configureStore({
    reducer:{
        // cart:cardreducer
        users: userReducer

    }
})
export default store