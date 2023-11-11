import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice ({
    name: 'pagination',
    initialState: {
        currentPage: 1,
    },
    reducers: {
        setPage: (state, action) => {
            state.currentPage = action.payload
        },
        resetPage: (state) => {
            state.currentPage = 1;
          },
    },
});

export const { setPage, resetPage } = paginationSlice.actions;

export default paginationSlice.reducer;