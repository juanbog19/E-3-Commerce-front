import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosURL from "../tools/axiosInstance";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async () => {
    try {
      const request = await axiosURL.get("/users");
      const response = await request.data;
      return response;
    } catch (error) {
      throw error.response.data.error;
    }
  }
);

export const getUsersId = createAsyncThunk(
  "users/getUsersId",
  async (id) =>{
    try {
     const resp = await axiosURL.get(`users/${id}`, {
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
    users:null,
    selectedUser:null,
    loggedin: false,
    errorLogin: null,
    token: null,
    hasPurchased:false,
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
      state.hasPurchased = false;
    },
    setHasPurchased(state, action) {
      state.hasPurchased = action.payload;
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
      .addCase(getUsers.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = "failed";
        state.errorLogin = action.error.message;
      })

      .addCase(getUsersId.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getUsersId.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.selectedUser = action.payload;
      })
      .addCase(getUsersId.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
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

export const { setToken, setError , setHasPurchased} = userSlice.actions;

export const authLogout = userSlice.actions.logout;

export default userSlice.reducer;