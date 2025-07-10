import { createSlice } from "@reduxjs/toolkit";

const  cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
       addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) => i.card.info.id === item.card.info.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
        removeItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (i) => i.card.info.id === item.card.info.id
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (i) => i.card.info.id !== item.card.info.id
          );
        } else {
          existingItem.quantity -= 1;
        }
      }
    },
        clearCart:(state) => {
            state.items.length=0;
        },
    },
});

export const{addItem,removeItem,clearCart} = cartSlice.actions

export default cartSlice.reducer