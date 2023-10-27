import { createSlice } from "@reduxjs/toolkit";
import { getAllBanner, postBanner } from "../actions/bannerActions"; // Asegúrate de importar tus acciones correctamente

const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    banners: [], // Este te sirve pa almacenar los banner jeje 
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBanner.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      })
      .addCase(getAllBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postBanner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postBanner.fulfilled, (state, action) => {
        state.loading = false;
       
      })
      .addCase(postBanner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default bannerSlice.reducer;