import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    orders: [],
};

const UserProfileSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    setUser: (state, action) => {
        state.user = action.payload;
    },
    setOrders: (state, action) => {
        state.orders = action.payload;
    },
    },
});

export const { setUser, setOrders } = UserProfileSlice.actions;

export default UserProfileSlice.reducer;