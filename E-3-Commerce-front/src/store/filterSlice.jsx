import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3001";

export const fetchFilteredProducts = createAsyncThunk (
  "filters/fetchFilteredProducts",
   async ( {filters, dispatch} ) => {
    try {
      const response = await axios.get( `${baseURL}/productsFilter`, {
        params: filters, // ajustar cómo se pasan los filtros a la URL según tu backend
        
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
