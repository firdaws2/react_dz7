import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import prod from './products.json'
import axios from "axios";

const initialState = {
    products: prod,
    load: true
}


const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {}
})

export const getProducts = createAsyncThunk('products', async() => {
    const {data} = await axios.get('https://fakerapi.it/api/v1/products?_quantity=10')
    return data
})

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state, action) => {
                state.load = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.load = false
                state.products = action.payload
            })
            .addCase(getProducts.rejected, (state, action) => {
                alert("ERROR")
            })
    }
})

export default productsSlice.reducer;
export const productsSelect = state => state.productsSlice;

