import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosURL from "../tools/axiosInstance";




export const getAllOrders = createAsyncThunk(
  "orders/getAllOrders",
  async () => {
    try {
      const response = await axiosURL.get('/orders'); 
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const getOrderById = createAsyncThunk(
  "orders/getOrderById",
  async (id) => {
    try {
      const response = await axiosURL.get(`/orders/user/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const postOrder = createAsyncThunk(
    "orders/postOrder",
    async ({ order, amount, id_user, id_products }) => {
      try {
        const response = await axiosURL.post('/orders', { order, amount, id_user, id_products },{
          headers: {
            'Content-Type': 'application/json',
          }
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    }
  );

export const editOrder = createAsyncThunk(
    "orders/editOrder",
    async ({ id, order, amount }) => {
      try {
        const response = await axiosURL.put(`/orders/${id}`, { order, amount }); 
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    }
  );
  
  export const deleteOrder = createAsyncThunk(
    "orders/deleteOrder",
    async (id) => {
      try {
        const response = await axiosURL.delete(`/orders/${id}`); 
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    }
  );

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    order: null,
    loading: false,
    error: null,
  },
  reducers: {
    cleanOrders(state){
      state.orders = [];
      state.loading = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.orders = action.payload;
      })
      .addCase(getAllOrders.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })

      .addCase(getOrderById.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.loading = true;
        state.orders = action.payload;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postOrder.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders.push(action.payload);
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(editOrder.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(editOrder.fulfilled, (state, action) => {
        state.loading = "succeeded";
        const updatedOrder = action.payload;
        const index = state.orders.findIndex((order) => order.id === updatedOrder.id);
        if (index !== -1) {
          state.orders[index] = updatedOrder;
        }
      })
      .addCase(editOrder.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteOrder.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = "succeeded";
        const orderId = action.payload;
        state.orders = state.orders.filter((order) => order.id !== orderId);
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export const cleanOrders = orderSlice.actions.cleanOrders;

export default orderSlice.reducer;
