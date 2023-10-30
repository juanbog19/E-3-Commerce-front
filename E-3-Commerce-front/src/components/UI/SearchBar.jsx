import { useDispatch } from "react-redux";
import { useState } from "react";
import { searchProductsByModel, getAllProducts } from '../../store/productsSlice';

const SearchBar = () => {

  const [model, setModel] = useState('');

  const dispatch = useDispatch();
  console.log(model);

  const handleInputChange = (event) => {
    setModel(event.target.value);
  };

  const handleOnClick = () => {
    if (!model) {
      alert('Por favor digita algo antes de buscar.');
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
    <div className="border-black mt-20 flex justify-center">
      <input value={model} onChange={handleInputChange} onKeyPress={handleKeyPress} type='search' placeholder='Buscar un producto...' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-2.5 dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400" />
      <button
        className='ml-2 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800'
        onClick={handleOnClick}
      >
        Buscar
      </button>
      <button className='ml-2 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800' onClick={handlerReset}>
        Reset
      </button>

    </div>
  )
}

export default SearchBar;