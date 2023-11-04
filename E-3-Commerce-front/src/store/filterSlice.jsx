import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosURL from "../tools/axiosInstance";

export const fetchFilteredProducts = createAsyncThunk (
  "filters/fetchFilteredProducts",
  async ({ filterBy, filterValue }, { dispatch } ) => {
    try {
      const response = await axiosURL.get( 'productsFilter', {
        params: {
          filterBy,
          filterValue,
        }, // ajustar cómo se pasan los filtros a la URL según tu backend
        
      });
      dispatch( setFilteredProducts( response.data ));
    } catch (error) {
      console.error("Error loading missing products:", error);
    }
  }
);

const initialState = {
  cpu: '',
  memory: '',
  storage: '',
  size: '',
  brand: '',
  filteredProducts: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { filterType, filterValue } = action.payload;
      state[filterType] = filterValue;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setFilter, setFilteredProducts } = filtersSlice.actions;
export default filtersSlice.reducer;
