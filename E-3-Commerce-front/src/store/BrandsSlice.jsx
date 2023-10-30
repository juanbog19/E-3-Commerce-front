import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL_BRANDS = "http://localhost:3001/brands";

export const getAllBrands = createAsyncThunk(
  "products/getAllBrands",
  async () => {
    try {
      const resp = await axios.get(URL_BRANDS, {
        headers: {
          Accept: "application/json",
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

const brandsSlice = createSlice({
  name: "brands",
  initialState: {
    // Tu estado inicial aquí
    brands: [],
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBrands.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getAllBrands.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.brands = action.payload;
      })
      .addCase(getAllBrands.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export default brandsSlice.reducer;