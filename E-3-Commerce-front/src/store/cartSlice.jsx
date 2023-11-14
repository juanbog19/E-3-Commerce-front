import { createSlice, current } from "@reduxjs/toolkit";

const initialState = { items: [], total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      const totalPrice = newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          brand: newItem.brand,
          model: newItem.model,
          price: newItem.price,
          quant: 1,
          img: newItem.image,
        });
      } else {
        existingItem.quant += typeof newItem.amount === 'number' ? newItem.amount : 1;
      }

      state.total = state.total + totalPrice;
      //console.log(current(state.items));
    },
    removeItem(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      const itemToUpdate = state.items[index];
      state.total = state.total - itemToUpdate.price;

      if (itemToUpdate.quant === 1) {
        state.items.splice(index, 1);
      } else {
        itemToUpdate.quant--;
      }
    },
    clearStore(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { addItem, removeItem, clearStore } = cartSlice.actions;

export default cartSlice.reducer;