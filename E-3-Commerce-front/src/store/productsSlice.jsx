import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import axios from "axios";

const URL_PRODUCTS = "http://localhost:3001/products";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    try {
      const resp = await axios.get(URL_PRODUCTS, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const searchProductsByModel = createAsyncThunk(
    "products/searchProductsByModel",
    async (model) => {
      try {
        const response = await axios.get(`${URL_PRODUCTS}/?model=${model}`, {
          headers: {
            Accept: 'application/json',
          },
        });
        return response.data;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    }
  );

export const getProductsId = createAsyncThunk(
  "products/getProductsId",
  async (id) =>{
    try {
     const resp = await axios.get(`${URL_PRODUCTS}/${id}`, {
      headers: {
        Accept: 'application/json',
      },
    });
    return resp.data;
    } catch (error){
      return Promise.reject(error.response.data.message);
    }
  }
);

export const postProducts = createAsyncThunk(
  "products/postProducts",
  async (obj) => {
    try {
      const resp = await axios.post(URL_PRODUCTS, obj, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const putProducts = createAsyncThunk(
  "products/putProducts",
  async ({id, obj}) => {
    try {
      const resp = await axios.put(`${URL_PRODUCTS}/${id}`, obj, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    try {
      const resp = await axios.delete(`${URL_PRODUCTS}/${id}`, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//////////////////////////////////////////////////////////////////////////////
const productSlice = createSlice({
  name: "products",
  initialState: {
    // Tu estado inicial aquí
    products: [],
    product: null,
    loading: "idle",
    error: null,
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.products = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })

      .addCase(searchProductsByModel.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(searchProductsByModel.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.products = action.payload;
      })
      .addCase(searchProductsByModel.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(getProductsId.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getProductsId.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.product = action.payload;
      })
      .addCase(getProductsId.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(postProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(putProducts.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        const index = state.products.findIndex((product) => product.id === updatedProduct.id);
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        const productId = action.payload;
        state.products = state.products.filter((product) => product.id !== productId);
      });
  },
});

export default productSlice.reducer;
