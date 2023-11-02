import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3001/";

export const loginUser = createAsyncThunk("user/login", async ({ userData, tokenId }) => {
  try {
    const response = await axios.post(`${baseURL}login`, { userData, googleToken: tokenId }, {
      headers: {
        'Content-Type': 'application/json',
      }
    }); 
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
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        if (action.payload.token) {
          state.token = action.payload.token;
          state.error = null;
        } else {
          state.token = null;
          state.error = 'Error de autenticación';
        }
      })
      .addCase(loginUser.rejected, signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message;
      });
  },
});

export const { setToken, setError } = userSlice.actions;

export default userSlice.reducer;
