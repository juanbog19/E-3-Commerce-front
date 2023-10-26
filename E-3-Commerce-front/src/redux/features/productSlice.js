import { createSlice } from "@reduxjs/toolkit";
import { getProduct,getProductId } from "../actions/productActions";


const productSlice = createSlice({ // modificar para products
    name: "products",
    initialState: {
      products: [],
      productData:null,      
      loading:false,
      error:null,
    },
    reducers: {
      setProducts: (state, action) => {
        state.products = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
      .addCase(getProductId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductId.fulfilled, (state, action) => {
        state.loading = false;
        state.bedroomData = action.payload;
      })
      .addCase(getProductId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
        .addCase(getProduct.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getProduct.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.bedrooms = action.payload;
          state.reservedBedrooms = action.payload;
        })
        .addCase(getProduct.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });
  
  export const { setProducts } = productSlice.actions;
  
  export default productSlice.reducer;
  
  
  
  