import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosURL from "../tools/axiosInstance";


export const loginUser = createAsyncThunk("user/login",
  async (user) => {
    try {
      const request = await axiosURL.post('/test/login', user);
      const response = await request.data
      //console.log(response)
      //localStorage.setItem('user', JSON.stringify(response))
      return response
    } catch (error) {
      throw error.response.data.msg; // -> Aqui se accede mas a fondo
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
    loading: false,
    user: null,
    errorLogin: null,
    token: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    setError(state, action) {
      state.errorLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.errorLogin = null;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.errorLogin = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.errorLogin = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        if (action.payload.token) {
          state.token = action.payload.token;
          state.errorLogin = null;
        } else {
          state.token = null;
          state.errorLogin = 'Error de autenticación';
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.errorLogin = action.error.message
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