import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import SearchBar from '../UI/SearchBar';
import Footer from './Footer';
import Card from '../UI/Card';
import Paginated from '../UI/Paginated';
import Filters from '../UI/Filters';
import { getAllProducts } from '../../store/productsSlice';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const { products } = useSelector((state) => state.products);
 // console.log(allProducts);
 
   
   //prueda filtrado para demo 1
   const [brandType, setBrandType] = useState("all");
  //  const [ramType, setRamType] = useState("all");
  //  const [storageType, setStorageType] = useState("all");
  //  const [sizeType, setSizeType] = useState("all");
   const [processorType, setProcessorType] = useState("all");
   
   const handleBrand = (brand) => {
     setBrandType(brand)
   };
 
  //  const handleRam = (ram) => {
  //    setRamType(ram)
  //  };
 
  //  const handleStorage = (storage) => {
  //    setStorageType(storage)
  //  };
 
  //  const handleSize = (size) => {
  //    setSizeType(size)
  //  };
 
   const handleProcessor = (processor) => {
     setProcessorType(processor)
   };
 
   const copyProducts = products
   //console.log('esto es products:', products);
   const filteredProducts = Array.isArray(copyProducts) && copyProducts.filter((product) => {
     const brand =  product.brand;
     //console.log('es brand',brand);
     const brandName = brand && brand.name;
    //  const ram = product.memory;
    //  const storage = product.storage;
    //  const size = product.size;
     const cpu = product.cpu
 
     const brandCondition = brandType === "all" || brandName === brandType;
    //  const ramCondition = ramType === 'all' || ram === ramType;
    //  const storageCondition = storageType === 'all' || storage === storageType;
    //  const sizeCondition = sizeType === 'all' || size === sizeType;
     const cpuCondition = processorType === 'all' || cpu === processorType;
 
     return brandCondition && cpuCondition;
   });
 
  //console.log(products);

  const [currentPage, setCurrentPage] = useState(1) //lo seteo en 1 porque siempre arranco por la primer pagina
  const productsPerPage = 6//cantidad de Brand que debe haber por pagina
  const indexOfLastProduct = currentPage * productsPerPage // 1 * 6 = 6
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage // 6 - 6 = 0
  const renderProducts = filteredProducts ? filteredProducts : products
  const currentProduct = Array.isArray(renderProducts) ? renderProducts.slice(indexOfFirstProduct, indexOfLastProduct) : [];

  const paginado = (pageNumber) => { //establece el numero de pagina  
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage])

  //prueba ordenamiento para demo 1
  const [orderBy, setOrderBy] = useState("A-Z");
  const handleOrderChange = (newOrder) => {
    setOrderBy(newOrder);
  };

  if (orderBy === "A-Z") {
    currentProduct.sort((a, b) =>
      a.price > b.price ? 1 : -1
    );
  } else if (orderBy === "Z-A") {
    currentProduct.sort((a, b) =>
      a.price < b.price ? 1 : -1
    );
  }

  console.log(currentProduct);


 

  return (
    <div >
      <div>
        <SearchBar />
      </div>

      <div className='flex'>
      <div>
        <Filters 
        onBrandChange={handleBrand}
        onOrderChange={handleOrderChange}        
        onProcessorChange={handleProcessor}      
        />
      </div>

      <div className='flex flex-wrap justify-around'>
        {currentProduct.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            image={product.image}
            brand={product.brand?.name}
            model={product.model}
            price={product.price}
            memory={product.memory}
            storage={product.storage}
            size={product.size}
          />
        ))}

        {
          currentProduct.length <= 0 &&
          <div className="mt-4 flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:text-red-400 dark:border-red-800" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div><span className="font-medium">¡Oops!</span> No hay productos disponibles.</div>
          </div>
        }
      </div>
      </div>
      <div>
        <Paginated productsPerPage={productsPerPage} allProducts={products.length} paginado={paginado} currentPage={currentPage}/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );

};

export default Home;
