import { createSlice } from '@reduxjs/toolkit';
import {getUsers, putUser,updatedsUser,createUsersVerify, loginUser, logoutUser } from '../actions/userActions';

const loadUserFromLocalStorage = () => {
  try {
    const userJSON = localStorage.getItem('user');
    return JSON.parse(userJSON) || null;
  } catch (error) {
    return null;
  }
};
const loggedIn = JSON.parse(localStorage.getItem('logged'));


const initialState = {
  users: [],
  usersCopy: [],
  userData:[],
  userLogin:[],
  user:loadUserFromLocalStorage(),
  loggedInUserId: "",
  logged: loggedIn !== null ? loggedIn : false,
  userPhoto: localStorage.getItem('userPhoto'),
  success: localStorage.getItem('success'),
  userId: localStorage.getItem('userId'),
};


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
   // filterUsers : (state, action)=>{
//
    //  const {search, member} = action.payload
    //  member == "all"?z
    //    state.usersCopy = state.users.filter(user=> user.name.toLowerCase().includes(search?.toLowerCase()) || user.surname.toLowerCase().includes(search?.toLowerCase()))
    //    : 
    //    state.usersCopy = state.users.filter(user=> user.isMember === (member == "true"? true : false) && ( user.name.toLowerCase().includes(search.toLowerCase()) || user.surname.toLowerCase().includes(search.toLowerCase())) ) ;
    //},
    updatedUser:(state,action)=>{
      state.user=action.payload,
      localStorage.setItem('user', JSON.stringify(action.payload));
      //console.log(user)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.error = "";
        state.usersCopy = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.error = 'Error occurred while fetching sports data.';
      })
      .addCase(putUser.fulfilled, (state, action) => {
        state.error = "";
        state.users = action.payload;
        state.usersCopy = action.payload;
      })
      .addCase(createUsersVerify.fulfilled, (state,action)=>{
        state.userData=action.payload;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        localStorage.removeItem('logged');
        state.success = action.payload.success;
        state.userId = action.payload.userId;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload.success && action.payload.logged) {
          state.userLogin = action.payload;
          state.loggedInUserId = action.payload.userId;
          state.logged = action.payload.logged;
          localStorage.setItem('logged', JSON.stringify(true));
          localStorage.setItem('userPhoto', action.payload.userPhoto);
          localStorage.setItem('success', JSON.stringify(action.payload.success));
          localStorage.setItem('userId', action.payload.userId);
        }
      })
      
      
        
      .addCase(updatedsUser.fulfilled, (state, action) => {
        state.userData = action.payload;
      });
  },
});

export const { updatedUser } = usersSlice.actions;
export default usersSlice.reducer;