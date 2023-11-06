import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, fetchFilteredProducts } from '../../store/filterSlice';
import { useState } from 'react';

const Filters = ({ onOrderChange,onBrandChange,onProcessorChange }) => {

   /* const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters);

    const handleChange = (event) => {
    const { name, value } = event.target;
        dispatch(setFilter({ filterType: name, filterValue: value }));

            // Llamar a la acción para cargar los productos filtrados
        dispatch(fetchFilteredProducts(filters));
    }; */

   

  const { products } = useSelector((state) => state.products);
  console.log(products);

  //Obtengo las option para mapear en el renderizado
  const brands = products && products.map((p) => p.brand && p.brand.name);
  const uniqueBrands = [...new Set(brands)];

  const processor = products && products.map((p)=>p.cpu);
  const uniqueProcessor = [ ...new Set(processor)]

  // const memory = products.map((p) => p.memory);
  // const uniqueMemory = [...new Set(memory)];

  // const storage = products.map((p) => p.storage);
  // const uniqueStorage = [...new Set(storage)];

  // const size = products.map((p) => p.size);
  // const uniqueSize = [...new Set(size)];



  // const dispatch = useDispatch();
  // const filters = useSelector((state) => state.filters);

  //Handler para cada selector
  // const handleBrand = (event) => {
  //   const { value } = event.target; //value seleccionado 
  //   dispatch(setFilter({ filterBy: 'brand', filterValue: value })); //setteo para acceder a las rutas
  //   dispatch(fetchFilteredProducts(filters)); //obtengo resultado del filtrado
  // };

  // const handleRam = (event) => {
  //   const { value } = event.target;
  //   dispatch(setFilter({ filterType: 'memory', filterValue: value }));
  //   dispatch(fetchFilteredProducts(filters));
  // };

  // const handleStorage = (event) => {
  //   const { value } = event.target;
  //   dispatch(setFilter({ filterType: 'storage', filterValue: value }));
  //   dispatch(fetchFilteredProducts(filters));
  // };

  // const handleSize = (event) => {
  //   const { value } = event.target;
  //   dispatch(setFilter({ filterType: 'size', filterValue: value }));
  //   dispatch(fetchFilteredProducts(filters));
  // };

  // const handleProcessor = (event) => {
  //   const { value } = event.target;
  //   dispatch(setFilter({ filterType: 'cpu', filterValue: value }));
  //   dispatch(fetchFilteredProducts(filters));
  // };

  const handleOrder = (e) => {
    onOrderChange(e.target.value);
  }; 

  const handleBrand = (e)=>{
    onBrandChange(e.target.value)
  };

  const handleRam = (e) => {
    onRamChange(e.target.value)
  };

  const handleStorage = (e) => {
    onStorageChange(e.target.value)
  };

  const handleSize = (e) => {
    onSizeChange(e.target.value)
  };

  const handleProcessor = (e) => {
    onProcessorChange(e.target.value)
  };

  return (
    <div className="flex justify-center ml-4 space-x-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
      
      <div className="flex flex-col items-center mb-20 ">

        
          <legend>Ordenamiento</legend>
            <select onChange={handleOrder}>
              <option value='A-Z'>Precio de menor a mayor</option>
              <option value='Z-A'>Precio de mayor a menor</option>
            </select>

            <br></br>
            <br></br>
        

        <legend>Marca</legend>
        <select onChange={(event) => handleBrand(event)} defaultValue="all">
          <option value="all">Todas las marcas</option>
          {uniqueBrands.map((b, index)=>(
            <option key={index} value={b} >
                {b}
            </option>
          ))}
        </select>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>


        <legend>CPU</legend>
        <select onChange={(event) => handleProcessor(event)} defaultValue="all">
          <option value="all">Todos los procesadores</option>
          {uniqueProcessor.map((sz, index) => (
            <option key={index} value={sz}>
              {sz}
            </option>
          ))}
        </select>
      </div>
      

      
      

      {/* <div className="flex flex-col items-center">
        <legend>Memoria RAM</legend>
        <select onChange={(event) => handleRam(event)} defaultValue="all">
          <option value="all">Todas las capacidades</option>
          {uniqueMemory.map((m, index) => (
            <option key={index} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center">
        <legend>Almacenamiento</legend>
        <select onChange={(event) => handleStorage(event)} defaultValue="all">
          <option value="all">Todas las capacidades</option>
          {uniqueStorage.map((s, index) => (
            <option key={index} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center">
        <legend>Tamaño de pantalla</legend>
        <select onChange={(event) => handleSize(event)} defaultValue="all">
          <option value="all">Todos los tamaños</option>
          {uniqueSize.map((sz, index) => (
            <option key={index} value={sz}>
              {sz}
            </option>
          ))}
        </select>
      </div> */}
      

     

    </div>
  );
};

export default Filters;
