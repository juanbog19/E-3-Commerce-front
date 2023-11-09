import { useSelector } from 'react-redux';

const Filters = ({ onOrderChange,onBrandChange,onProcessorChange }) => {

  const { products } = useSelector((state) => state.products);
  console.log(products);

  //Obtengo las option para mapear en el renderizado
  const brands = products && products.map((p) => p.brand && p.brand.name);
  const uniqueBrands = [...new Set(brands)];

  const processor = products && products.map((p)=>p.cpu);
  const uniqueProcessor = [ ...new Set(processor)]

  const handleOrder = (e) => {
    onOrderChange(e.target.value);
  }; 

  const handleBrand = (e)=>{
    onBrandChange(e.target.value)
  };

  const handleProcessor = (e) => {
    onProcessorChange(e.target.value)
  };

  return (
    <div className="flex justify-center ml-4 space-x-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
      
      <div className="flex flex-col items-center mb-20 p-4 bg-secondary rounded-lg">

        
          <legend className="text-primary">Ordenamiento</legend>
            <select className="p-2 bg-white text-black" onChange={handleOrder}>
              <option value='A-Z'>Precio de menor a mayor</option>
              <option value='Z-A'>Precio de mayor a menor</option>
            </select>

            <br></br>
            <br></br>
            <br></br>
        <br></br>
        

        <legend className="text-primary">Marca</legend>
        <select className="p-2 bg-white text-black" onChange={(event) => handleBrand(event)} defaultValue="all">
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
        <select className="p-2 bg-white text-black" onChange={(event) => handleProcessor(event)} defaultValue="all">
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
