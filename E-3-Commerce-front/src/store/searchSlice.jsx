import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosURL from "../tools/axiosInstance";


/* export const searchSlice = createAsyncThunk(
    'search/searchSlice',
async (model) => {
    const response = await fetch(`products/?model=${model}`);
     const data = await response.json();
  return data;
}); */

export const searchSlice = createAsyncThunk(
  'search/searchSlice',
  async (model) => {
    try {
      const response = await axiosURL.get(`products/?model=${model}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
///////////////////////////////////////////////////////////////////////////////////////

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchSlice.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchSlice.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(searchSlice.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
