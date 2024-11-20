import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        item : []
    },
    reducers:{
        addItem : (state,action)=>{
            state.item.push(action.payload)
        },
        removeitem: (state, action) => {
            state.item = state.item.filter(
              (item) => item.id !== action.payload.id
            );
          },
    }
})
export const {addItem,removeitem} = cartSlice.actions;
export default cartSlice.reducer