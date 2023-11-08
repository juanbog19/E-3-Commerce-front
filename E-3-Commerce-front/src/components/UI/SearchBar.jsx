import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { searchProductsByModel, getAllProducts } from '../../store/productsSlice';
import { FaRedo, FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";

const SearchBar = () => {

  const [model, setModel] = useState('');


  const dispatch = useDispatch();
  console.log(model);

  const handleInputChange = (event) => {
    setModel(event.target.value);
  };

  const handleOnClick = () => {
    if (!model) {
      Swal.fire('Por favor digita algo antes de buscar.', "Click para continuar", "info");      
    } else {
      dispatch(searchProductsByModel(model));
      setModel('');
    }
  };

  const handlerReset = () => {
    setModel('');
    dispatch(getAllProducts())
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleOnClick();
    }
  };

  return (
    <div className="flex justify-center mt-20 border-black">
      <input value={model} onChange={handleInputChange} onKeyPress={handleKeyPress} type='search' placeholder='Buscar un producto...' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400 mt-5 mr-5" />
      <button
        className="mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={handleOnClick}
      >
        <FaSearch></FaSearch>
      </button>
      <button className=" mt-5 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handlerReset}>
        <FaRedo></FaRedo>
      </button>

    </div>
  )
}

export default SearchBar;