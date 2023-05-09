import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import busketSlice from './basketSlice'

export const store = configureStore({
    reducer: {
        productsSlice,
        busketSlice
    }
})