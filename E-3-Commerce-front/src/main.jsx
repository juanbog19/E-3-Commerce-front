// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store/index.jsx";


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
// )

/**
Este código importa las dependencias necesarias, como React, React DOM, React Router DOM y Redux, y configura la persistencia de datos en el almacenamiento local del navegador. Luego, crea el componente raíz de la aplicación y lo renderiza en el elemento HTML con el id "root". La aplicación se envuelve en un componente de enrutamiento de React Router, un componente de proveedor de Redux y un componente de puerta de persistencia de Redux. Esto permite que la aplicación tenga acceso al estado global de Redux y que los datos persistan incluso después de recargar la página.
*/
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store/index.jsx";

let persistor = persistStore(store);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);

