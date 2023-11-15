import { useDispatch, useSelector } from 'react-redux';
import { resetPage } from '../../store/paginationSlice';

const Filters = ({ onOrderChange,onBrandChange,onProcessorChange }) => {

  const dispatch = useDispatch()

  const { products } = useSelector((state) => state.products);
  console.log(products);

  //Obtengo las option para mapear en el renderizado
  // const brands = products?.map((p) => p.brand && p.brand.name);
  const brands = (Array.isArray(products) ? products : []).map((p) => p.brand && p.brand.name);
  const uniqueBrands = [...new Set(brands)];

  // const processor = products && products.map((p)=>p.cpu);
  const processor = (Array.isArray(products) ? products : []).map((p) => p.cpu);
  const uniqueProcessor = [ ...new Set(processor)]

  const handleOrder = (e) => {
    onOrderChange(e.target.value);
  }; 

  const handleBrand = (e) => {
    dispatch(resetPage())
    const selectedBrand = e.target.value;
    onBrandChange(selectedBrand);
  };

  const handleProcessor = (e) => {
    dispatch(resetPage())
    const selectedProcessor = e.target.value;
    onProcessorChange(selectedProcessor)
  };


  return (
    <div className="flex justify-center ml-4 space-x-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300 ">
      
      <div className="flex flex-col items-center p-4 mb-20 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-100">

        
          <legend className="my-3 text-sm font-medium text-black">Ordenamiento</legend>
            <select className="text-white bg-purple-700 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onChange={handleOrder}>
              <option value='A-Z'>Precio de menor a mayor</option>
              <option value='Z-A'>Precio de mayor a menor</option>
            </select>

            <br></br>
            <br></br>
            <br></br>
        <br></br>
        

        <legend className="my-3 text-sm font-medium text-black">Marca</legend>
        <select className="text-white bg-purple-700 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onChange={(event) => handleBrand(event)} defaultValue="all">
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


        <legend className="my-3 text-sm font-medium text-black">CPU</legend>
        <select className="text-white bg-purple-700 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onChange={(event) => handleProcessor(event)} defaultValue="all">
          <option value="all">Todos los procesadores</option>
          {uniqueProcessor.map((sz, index) => (
            <option key={index} value={sz}>
              {sz}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
