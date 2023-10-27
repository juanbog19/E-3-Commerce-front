import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL_BANNERS = "http://localhost:3001/banners";

export const getBanners = createAsyncThunk(
    "banners/getBanners",
 async () => {
  try {
    const resp = await axios.get(URL_BANNERS, {
      headers: {
        Accept: 'application/json',
      },
    });
    return resp.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const getBannerById = createAsyncThunk(
    "banners/getBannerById",
 async (id) => {
  try {
    const resp = await axios.get(`${URL_BANNERS}/${id}`, {
      headers: {
        Accept: 'application/json',
      },
    });
    return resp.data;
  } catch (error) {
    return Promise.reject(error.response.data.message);
  }
});

export const postBanner = createAsyncThunk(
    "banners/postBanner",
 async (obj) => {
  try {
    const resp = await axios.post(URL_BANNERS, obj, {
      headers: {
        Accept: 'application/json',
      },
    });
    return resp.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const editBanner = createAsyncThunk(
    "banners/editBanner",
 async ({ id, obj }) => {
  try {
    const resp = await axios.put(`${URL_BANNERS}/${id}`, obj, {
      headers: {
        Accept: 'application/json',
      },
    });
    return resp.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const deleteBanner = createAsyncThunk(
    "banners/deleteBanner",
 async (id) => {
  try {
    const resp = await axios.delete(`${URL_BANNERS}/${id}`, {
      headers: {
        Accept: 'application/json',
      },
    });
    return resp.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
///////////////////////////////////////////////////////////////////////////////////////
const bannersSlice = createSlice({
  name: "banners",
  initialState: {
    banners: [],
    banner: null,
    loading: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBanners.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getBanners.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.banners = action.payload;
      })
      .addCase(getBanners.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(getBannerById.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getBannerById.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.banner = action.payload;
      })
      .addCase(getBannerById.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      })
      .addCase(postBanner.fulfilled, (state, action) => {
        state.banners.push(action.payload);
      })
      .addCase(editBanner.fulfilled, (state, action) => {
        const updatedBanner = action.payload;
        const index = state.banners.findIndex((banner) => banner.id === updatedBanner.id);
        if (index !== -1) {
          state.banners[index] = updatedBanner;
        }
      })
      .addCase(deleteBanner.fulfilled, (state, action) => {
        const bannerId = action.payload;
        state.banners = state.banners.filter((banner) => banner.id !== bannerId);
      });
  },
});

export default bannersSlice.reducer;

