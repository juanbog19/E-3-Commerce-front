import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

 const URL_SEARCH = "http://localhost:3001/products"


export const searchSlice = createAsyncThunk(
    'search/searchSlice',
async (model) => {
    const response = await fetch(`${URL_SEARCH}/?model=${model}`);
     const data = await response.json();
  return data;
});
///////////////////////////////////////////////////////////////////////////////////////

const searchSlice = createSlice({
  name: 'search',
  initialState: {
     data: [],
     status: 'idle',
     error: null
     },
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
