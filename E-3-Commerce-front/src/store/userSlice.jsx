import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosURL from "../tools/axiosInstance";


export const loginUser = createAsyncThunk("user/login",
  async (user) => {
    try {
      const request = await axiosURL.post('/test/login', user);
      const response = await request.data
      return response
    } catch (error) {
      throw error.response.data.msg; // -> Aqui se accede mas a fondo
    }
  });

export const signUpUser = createAsyncThunk("user/signup",
  async (user) => {
    try {
      const request = await axiosURL.post('/users', user);
      const response = await request.data
      return response
    } catch (error) {
      throw error.response.data.error;
    }
  });

export const signInGoogle = createAsyncThunk("user/google",
  async (res) => {
    try {
      const request = await axiosURL.post('/auth/google', res, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const response = await request.data.usuario
      return response
    } catch (error) {
      throw error.response.data.msg
    }
  })

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,
    loggedin: false,
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
    logout(state){
      state.loggedin = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.loggedin = false;
        state.errorLogin = null;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.loggedin = false;
        state.errorLogin = null;
      })
      .addCase(signInGoogle.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.loggedin = false;
        state.errorLogin = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.loggedin = true;
        state.errorLogin = null;
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.loggedin = true;
        state.errorLogin = null;
      })
      .addCase(signInGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.loggedin = true;
        state.errorLogin = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.loggedin = false;
        state.errorLogin = action.error.message
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.loggedin = false;
        state.errorLogin = action.error.message
      })
      .addCase(signInGoogle.rejected, (state, action) => {
        state.loading = false;
        state.token = null;
        state.loggedin = false;
        state.errorLogin = action.error.message
      });
  },
});

export const { setToken, setError } = userSlice.actions;

export const authLogout = userSlice.actions.logout;

export const selectUserById = (state, userId) =>
  state.users.users.find((user) => user.id === userId);

export default userSlice.reducer;