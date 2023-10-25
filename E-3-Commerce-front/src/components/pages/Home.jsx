import { useState, useEffect } from "react";
//import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//import { Link } from "react-router-dom";
import axios from "axios";
import axiosURL from "../../tools/axiosInstance";
import BrandCard from "./../UI/BrandCard";
import Spinner from './../svg/Spinner';
import HasError from "./../svg/HasError";
import Footer from "./Footer";
import Pagination from "../UI/Pagination";
import Filters from "../UI/Filters";
import Banner from "../UI/Banner";
import { getBanner } from '../../store/bannerSlice';
import SearchBar from "../UI/SearchBar";   //  Por buenas praxis, se cambia la ubicacion fuera de NavBar


const Home = () => {
  const isProductPage = location.pathname.startsWith('/products') || location.pathname.startsWith('/beers')
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [orderBy, setOrderBy] = useState("A-Z");


  const dispatch = useDispatch();
  const { data } = useSelector(state => state.banner.banner);
  const { brandsSearch } = useSelector(state => state.brandsSearch)
  const renderBrands = brandsSearch.length > 0 ? brandsSearch : brands;

  //console.log(brands.map((b)=>b.img.url));
  // console.log(brandsSearch[0].img.url);

  const [currentPage, setCurrentPage] = useState(1) //lo seteo en 1 porque siempre arranco por la primer pagina
  const brandsPerPage = 8//cantidad de Brand que debe haber por pagina
  const indexOfLastBrand = currentPage * brandsPerPage // 1 * 6 = 6
  const indexOfFirstBrand = indexOfLastBrand - brandsPerPage // 6 - 6 = 0
  //const currentBrand = displayBrand.slice(indexOfFirstBrand, indexOfLastBrand) //para dividir la cantidad de Brands opor pagina
  const currentBrands = Array.isArray(renderBrands) ? renderBrands.slice(indexOfFirstBrand, indexOfLastBrand) : [];
  //console.log(currentBrands);

  const paginado = (pageNumber) => { //establece el numero de pagina  
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage])

  useEffect(() => {
    dispatch(getBanner())
  }, [])

  useEffect(() => {
    // let isCancelled = false;
    const controller = new AbortController();
    setLoading(true);
    axiosURL
      .get("/api/brands?populate=*", {
        signal: controller.signal,
      })
      .then((response) => {
        // if ( !isCancelled ) {
        // console.log(response);
        setBrands(response.data.data);
        setLoading(false);
        // }
      }).catch((error) => {
        // console.log(error);
        if (axios.isCancel(error)) {
          // console.log( 'request canceled' );
          return;
        }
        setHasError(true);
        setLoading(false);
      });
    return () => {
      // isCancelled = true;
      controller.abort();
    }
  }, []);

  if (loading) {
    return (
      <div className="w-24 mx-auto">
        <Spinner />
      </div>
    );
  }

  if (hasError) {
    return (
      <div>
        <h1 className="mb-3 text-2xl text-center text-gray-700 uppercase">404</h1>
        <h2 className="mb-2 text-center text-stone-600">Please, try to resubmit your search.</h2>
        <HasError />
      </div>
    );
  }


  const handleOrderChange = (newOrder) => {
    setOrderBy(newOrder);
  };

  if (orderBy === "A-Z") {
    currentBrands.sort((a, b) =>
      a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
    );
  } else if (orderBy === "Z-A") {
    currentBrands.sort((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
    );
  }


  return (
    <>
      <div>
        <div className="mb-4">
          <Banner data={data} />
        </div>
        <div>
          <div className="flex justify-center">

            <div>{isProductPage ? null : <SearchBar />}</div>
          </div>

          <Filters onOrderChange={handleOrderChange} />
        </div>
        <div className="flex flex-wrap justify-around">
          {currentBrands.map((brand) => (
            <BrandCard key={brand.id} data={brand} />
          ))

          }

          {currentBrands.length <= 0 && <p>No beer data available</p>}
        </div>

        <div>
          <Pagination brandsPerPage={brandsPerPage} allBrands={renderBrands.length} paginado={paginado} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home;