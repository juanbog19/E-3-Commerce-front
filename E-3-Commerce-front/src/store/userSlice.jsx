import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosURL from "../tools/axiosInstance";


export const loginUser = createAsyncThunk("user/login",
  async ({ userData, tokenId }) => {
  try {
    const response = await axiosURL.get('login', userData, { googleToken: tokenId }, {
      headers: {
        Accept: 'application/json',
      }
    }); 
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

export const signUpUser = createAsyncThunk("user/signup", async ({ userData, tokenId }) => {
  try {
    const response = await axiosURL.post('signup', userData, { googleToken: tokenId }, {
      headers: {
        Accept: 'application/json',
      }
    }); 
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
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
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
      .addCase(signUpUser.fulfilled, (state, action) => {
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
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.error = action.error.message;
      });
  },
});

export const { setToken, setError } = userSlice.actions;

export default userSlice.reducer;
