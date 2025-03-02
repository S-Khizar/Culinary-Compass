import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cart.find(cartItem => cartItem.id === item.id);



            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...item, quantity: 1 });
            }
        },
        removeToCart: (state, action) => {
            state.cart = state.cart.filter((prod) => prod.cartItemId !== action.payload);
        }

    }
})

export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
