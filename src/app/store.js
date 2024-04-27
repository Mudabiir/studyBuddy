import {configureStore} from '@reduxjs/toolkit';
import schedulerReducer from '../features/scheudulerSlice'

export const store = configureStore({
    reducer: schedulerReducer,
})