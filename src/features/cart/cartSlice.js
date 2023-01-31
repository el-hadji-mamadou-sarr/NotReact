import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {data} from "../../data/Data";

const initialState ={
    cartItems: [],
    amount:4,
    total:0,
    isLoading:true
};
const url ="https://course-api.com/react-useReducer-cart-project";
export const getCartItems = createAsyncThunk('cart/cartItems',()=>{
    return fetch(url).then((res)=>res.json().then(console.log(res)))
                     .catch((err)=>console.log(err))
})


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart: (state)=>{
            state.amount = 0;
        },
        increaseCart:(state)=>{
            state.amount +=1;
        },
        removeItems:(state, action)=>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item)=>
                item.id !== itemId
            )
        }

    },
    extraReducers: (builder)=>{
        builder.addCase(getCartItems.pending,(state) => {
            state.isLoading = true;
        })
        builder.addCase(getCartItems.fulfilled,(state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        })
        builder.addCase(getCartItems.rejected,(state, action) => {
            state.isLoading = false;
        })
    }
})
export const {clearCart, increaseCart, removeItems} = cartSlice.actions;
export default cartSlice.reducer;