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
    <div className="border-black">
      <input value={model} onChange={handleInputChange} onKeyPress={handleKeyPress} type='search' placeholder='Buscar...' className="px-12 py-2 border-black rounded-lg" />
      <button
        className='{px-3 py-2 ml-1 text-black-100 rounded-lg bg-b000ff hover:bg-secondary}'
        onClick={handleOnClick}
      >
        Buscar
      </button>
      <button className='px-3 py-2 ml-1 text-black-100 rounded-lg bg-b000ff hover:bg-secondary' onClick={handlerReset}>
        Reset
      </button>

    </div>
  )
}

export default SearchBar;