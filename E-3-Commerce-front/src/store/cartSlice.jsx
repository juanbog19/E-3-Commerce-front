/**
El siguiente código es una implementación de Redux Toolkit para un slice de carrito de compras. El slice define el estado inicial del carrito, que incluye una lista de elementos y el total de la compra. Luego, se definen las acciones que pueden modificar el estado del carrito.

La acción "addItem" agrega un nuevo elemento al carrito. Si el elemento ya existe en el carrito, se actualiza la cantidad y se recalcula el precio total. Si el elemento no existe, se agrega a la lista de elementos del carrito.

La acción "removeItem" elimina un elemento del carrito. Se busca el índice del elemento en la lista y se actualiza el precio total. Si la cantidad del elemento es 1, se elimina de la lista. Si la cantidad es mayor a 1, se decrementa la cantidad.

La acción "clearStore" reinicia el estado del carrito, asignando el estado inicial al estado actual.

Es importante destacar que el código utiliza la función "current" de Redux Toolkit para acceder al estado actual en el log de la consola.
*/
import { createSlice, current } from "@reduxjs/toolkit";
const initialState = { items: [], total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      const totalPrice = newItem.price ;

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
        // existingItem.quant = existingItem.quant += newItem.amount;
        existingItem.quant += newItem.amount;

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