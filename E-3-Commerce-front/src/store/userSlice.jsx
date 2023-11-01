import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3001/"
export const loginUser = createAsyncThunk("user/login", async (userData) => {
  try {
    const response = await axios.post( `${baseURL}`, userData); 
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const signUpUser = createAsyncThunk("user/signup", async (userData) => {
  try {
    const response = await axios.post(`${baseURL}users`, userData); 
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
    error: null,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled,signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
