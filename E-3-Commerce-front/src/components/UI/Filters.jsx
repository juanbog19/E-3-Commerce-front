import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "../../store/productsSlice";
import { useEffect, useState } from "react";

const Filters = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [brandState, setBrandsState] = useState("");
  const [cpuState, setCpuState] = useState("");
  const [memoryState, setmemoryState] = useState("");
  const [storageState, setStorageState] = useState("");
  const [sizeState, setSizeState] = useState("");

  // OPCIONES PARA SELECCIONAR DENTRO DE LOS FILTROS
  const brandValues = (products) => {
    const results = [];
    products.forEach((p) => {
      const brand = p.brand.name;
      if (!results.includes(brand)) {
        results.push(brand);
      }
    });
    return results;
  };

  const cpuValues = (products) => {
    const results = [];
    products.forEach((p) => {
      const cpu = p.cpu;
      if (!results.includes(cpu)) {
        results.push(cpu);
      }
    });
    return results;
  };

  const memoryValues = (products) => {
    const results = [];
    products.forEach((p) => {
      const mem = p.memory;
      if (!results.includes(mem)) {
        results.push(mem);
      }
    });
    return results;
  };

  const storageValues = (products) => {
    const results = [];
    products.forEach((p) => {
      const storage = p.storage;
      if (!results.includes(storage)) {
        results.push(storage);
      }
    });
    return results;
  };

  const sizeValues = (products) => {
    const results = [];
    products.forEach((p) => {
      const size = p.size;
      if (!results.includes(size)) {
        results.push(size);
      }
    });
    return results;
  };

  //Handler para cada selector
  const handleBrand = (event) => {
    const value = event.target.value; //value seleccionado+
    dispatch(setFilteredProducts({ filterBy: "brand", filterValue: value }));
  };

  const handleRam = (event) => {
    const { value } = event.target;
    dispatch(setFilteredProducts({ filterBy: "memory", filterValue: value }));
  };

  const handleStorage = (event) => {
    const { value } = event.target;
    dispatch(setFilteredProducts({ filterBy: "storage", filterValue: value }));
  };

  const handleSize = (event) => {
    const { value } = event.target;
    dispatch(setFilteredProducts({ filterBy: "size", filterValue: value }));
  };

  const handleProcessor = (event) => {
    const { value } = event.target;
    dispatch(setFilteredProducts({ filterBy: "cpu", filterValue: value }));
  };

  return (
    <div className="flex justify-center space-x-4 mb-4">
      <div className="flex flex-col items-center">
        <legend>Marca</legend>
        <select onChange={(event) => handleBrand(event)} defaultValue="all">
          <option value="all">Todas las marcas</option>
          {brandValues(products).map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center">
        <legend>Memoria RAM</legend>
        <select onChange={(event) => handleRam(event)} defaultValue="all">
          <option value="all">Todas las capacidades</option>
          {memoryValues(products).map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center">
        <legend>Almacenamiento</legend>
        <select onChange={(event) => handleStorage(event)} defaultValue="all">
          <option value="all">Todas las capacidades</option>
          {storageValues(products).map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center">
        <legend>Tamaño de pantalla</legend>
        <select onChange={(event) => handleSize(event)} defaultValue="all">
          <option value="all">Todos los tamaños</option>
          {sizeValues(products).map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center">
        <legend>CPU</legend>
        <select onChange={(event) => handleProcessor(event)} defaultValue="all">
          <option value="all">Todos los procesadores</option>
          {cpuValues(products).map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
