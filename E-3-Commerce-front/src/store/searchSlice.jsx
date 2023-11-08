/*
Voy a explicar las partes principales del código:

1. `import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';`
   - Este bloque de código importa dos funciones de la biblioteca `@reduxjs/toolkit`. `createAsyncThunk` se utiliza para crear funciones asíncronas que pueden despachar acciones en Redux. `createSlice` se utiliza para definir un "slice" (o rebanada) del estado de Redux junto con las acciones que pueden modificar ese estado.

2. `import axios from "../tools/axiosInstance";`
   - Importa una instancia personalizada de Axios desde un archivo llamado `axiosInstance` que se encuentra en un directorio llamado "tools". Axios es una librería para realizar peticiones HTTP.

3. `export const searchProductsByModel = (model) => async (dispatch) => {...}`
   - Aquí se define una función llamada `searchProductsByModel` que acepta un parámetro `model`. Esta función es asíncrona y utiliza una función flecha que devuelve otra función. Esta estructura es comúnmente conocida como una función asíncrona de flecha flecha.

   - Dentro de esta función, se despacha una acción llamada `setLoading(true)` para indicar que la búsqueda está en proceso. Luego, se intenta realizar una petición GET a la API utilizando Axios para obtener información sobre productos basados en el modelo proporcionado.

   - Si la petición es exitosa, se despachan las acciones `setModel(response.data)` para actualizar el estado con los datos del modelo y `setError(null)` para indicar que no hay errores.

   - Si ocurre un error durante la petición, se captura y se despacha la acción `setError(error.message)` para almacenar el mensaje de error.

   - Finalmente, independientemente de si la petición fue exitosa o no, se despacha `setLoading(false)` para indicar que la búsqueda ha terminado.

4. `const searchBarSlice = createSlice({...});`
   - Define un slice llamado `searchBarSlice` utilizando la función `createSlice`. Este slice tiene un estado inicial que contiene tres propiedades: `model`, `loading` y `error`.

5. `reducers: {...}`
   - Dentro del slice, se definen tres reducers (`setModel`, `setLoading` y `setError`) que son funciones que actualizan el estado cuando se despachan.

   - `setModel` actualiza la propiedad `model` del estado con el valor proporcionado.

   - `setLoading` actualiza la propiedad `loading` del estado con el valor proporcionado.

   - `setError` actualiza la propiedad `error` del estado con el valor proporcionado.

6. `export const { setModel, setLoading, setError } = searchBarSlice.actions;`
   - Exporta las acciones creadas dentro del slice para que puedan ser utilizadas en otros lugares del código.

7. `export default searchBarSlice.reducer;`
   - Exporta el reducer del slice para que pueda ser incluido en el store de Redux de la aplicación.

En resumen, este código define una función asíncrona llamada `searchProductsByModel` que realiza una petición HTTP para buscar productos por modelo. Utiliza Redux Toolkit para gestionar el estado de una barra de búsqueda, incluyendo la actualización del modelo, el estado de carga y los errores. También exporta las acciones y el reducer para ser utilizados en otros módulos de la aplicación.*/

import { createSlice } from '@reduxjs/toolkit';
import axiosURL from "../tools/axiosInstance";


/* export const searchSlice = createAsyncThunk(
  'search/searchSlice',
  async (model) => {
    try {
      const response = await axiosURL.get(`products/?model=${model}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
); */

export const searchProductsByModel = (model) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axiosURL.get(`/products/${model}`);
    dispatch(setModel(response.data));
    dispatch(setError(null));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

///////////////////////////////////////////////////////////////////////////////////////

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    model: '',
    loading: false,
    error: null,
  },
  reducers: {
    setModel(state, action) {
      state.model = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setModel, setLoading, setError } = searchSlice.actions;

export default searchSlice.reducer;
