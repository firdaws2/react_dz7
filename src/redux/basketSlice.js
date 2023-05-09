import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    busket: [],
}

const busketSlice = createSlice({
    name: 'busketSlice',
    initialState,
    reducers: {
        setBusket: (state, action) => {
            state.busket.push(action.payload)
        },
        removeFromBasket: (state, action) => {
            state.busket.splice(action.payload, 1);
        },
        changePrice : (state,action )=>{
            state.busket = state.busket.map(item=>{
                const price = + item.price.replace(/\$/,'')
                if(item._id === action.payload ){
                    return {...item,price: '$'+(price + price)}
                }else {
                    return item
                }
            })
        },
        minPrice : (state,action )=>{
            state.busket = state.busket.map(item=>{
                const price = item.price.replace(/\$/,'')
                if(item._id === action.payload ){
                    return {...item, price: '$'+(price - price)}
                }else {
                    return item
                }
            })
        },
    }
})
export default busketSlice.reducer;
export const {setBusket, minPrice, removeFromBasket,changePrice} = busketSlice.actions;

export const busketSelect = state => state.busketSlice;