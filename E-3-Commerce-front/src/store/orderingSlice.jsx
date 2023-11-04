import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosURL from "../tools/axiosInstance";


export const fetchOrderedProducts = createAsyncThunk(
  "ordering/fetchOrderedProducts",
  async ({ filterBy, filterValue, orderBy, orderValue }, thunkAPI) => {
    try {
      const response = await axiosURL.get('productsFilter', {
        params: {
          filterBy,
          filterValue,
          orderBy,
          orderValue,
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const orderingSlice = createSlice({
  name: "ordering",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderedProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrderedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchOrderedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // action.payload contiene el mensaje de error
      });
  },
});

export default orderingSlice.reducer;

