import {createSlice} from '@reduxjs/toolkit';
const initialState = {
    amount : 0,
    cart : [],
    // quantity : 1
}
const cartSlice = createSlice({
    name : 'product',
    initialState,
    reducers : {
        addCart : (state , action)=>{
            const {id} = action.payload
        const item = state.cart.findIndex(item => item.id === id)
        if (item >=0) {
            state.cart[item].amount +=1
        }   
        else {
            const finalCart = action.payload
            state.cart.push(finalCart)
            state.amount+=1;
        }
        },
        deleteCart : (state , action)=>{
            state.cart = state.cart.filter((item) => item.id !== action.payload)
            state.amount -= 1;
        },
        clearCart : (state)=>{
            state.cart = [];
            state.amount = 0;
        }

    }
})
export const {addCart , clearCart , deleteCart} = cartSlice.actions;
export default cartSlice.reducer;