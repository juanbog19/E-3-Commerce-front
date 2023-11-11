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
    <div className="flex justify-center ml-4 space-x-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
      
      <div className="flex flex-col items-center mb-20 p-4 bg-secondary rounded-lg">

        
          <legend className="text-primary">Ordenamiento</legend>
            <select className="p-2 bg-white text-black rounded-lg" onChange={handleOrder}>
              <option value='A-Z'>Precio de menor a mayor</option>
              <option value='Z-A'>Precio de mayor a menor</option>
            </select>

            <br></br>
            <br></br>
            <br></br>
        <br></br>
        

        <legend className="text-primary">Marca</legend>
        <select className="p-2 bg-white text-black rounded-lg" onChange={(event) => handleBrand(event)} defaultValue="all">
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


        <legend className="text-primary">CPU</legend>
        <select className="p-2 bg-white text-black rounded-lg" onChange={(event) => handleProcessor(event)} defaultValue="all">
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
