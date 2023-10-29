import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import SearchBar from '../UI/SearchBar';
import Footer from './Footer';
import Card from '../UI/Card';
import Paginated from '../UI/Paginated';
import Filters from '../UI/Filters';
import Ordenamiento from '../UI/Ordenamiento';
import { getAllProducts } from '../../store/productsSlice';

const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const { products } = useSelector((state) => state.products);
  //console.log(products);

  const [currentPage, setCurrentPage] = useState(1) //lo seteo en 1 porque siempre arranco por la primer pagina
  const productsPerPage = 8//cantidad de Brand que debe haber por pagina
  const indexOfLastProduct = currentPage * productsPerPage // 1 * 6 = 6
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage // 6 - 6 = 0
  const currentProduct = Array.isArray(products) ? products.slice(indexOfFirstProduct, indexOfLastProduct) : [];

  const paginado = (pageNumber) => { //establece el numero de pagina  
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage])


  return (
    <div >
      <div>
        <SearchBar />
      </div>

      <div>
        <Ordenamiento/>
      </div>      

      <div>
        <Filters/>
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

        {currentProduct.length <= 0 && <p>No hay productos disponibles</p>}
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
