// Se importan las funciones y librerías necesarias.
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
// Se importan los reducers creados para cada slice.
import bannerSlice from "./bannerSlice";
import productSlice from "./productsSlice";
import filtersSlice from "./filterSlice";
import orderingSlice from "./orderingSlice";
import brandsSlice from "./brandsSlice";
//import userSlice from './../features/userSlice';

// Configuración de Redux Persist.
const configReducer = {
  key: "celphone-market",
  storage,
};

// Se combinan los reducers en uno solo.
const reducers = combineReducers({
  banners: bannerSlice,
  brands: brandsSlice,
  products: productSlice,
  filters: filtersSlice,
  ordering: orderingSlice,
});

// Se aplica la persistencia al reducer combinado.
const persitedReducer = persistReducer(configReducer, reducers);

// Configuración final del store de Redux.
const store = configureStore({
  reducer: persitedReducer,
  middleware: [thunk],
});

export default store;