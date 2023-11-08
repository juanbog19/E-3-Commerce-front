import {useParams, Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import {getProductsId} from '../../store/productsSlice';
import { FaArrowLeft,FaMicrochip,FaMobileAlt,FaSdCard,FaBatteryFull,FaSimCard } from "react-icons/fa";


const Detail = () => {

  const {id} =useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProductsId(id))
  },[dispatch, id])

  const product = useSelector((state)=>state.products.product);
  // console.log('aqui mi product', product)

  return (
    <div className="flex justify-center mt-20 ml-4 mr-4 space-x-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
      {product &&(
      <div className="flex">

        <div  className="w-1/3">
          <a href={product.image} target="_blank" rel="noopener noreferrer">
            <img src={product.image} alt={product.brand.name} />
          </a>
        </div>



      <div className="w-2/3 mt-10">        

          <div className="flex justify-center">
              <h1 className="text-6xl font-semibold ">{product.brand.name} {product.model}</h1>         
          </div>
          
          <div className="flex justify-center mt-5 mb-5 text-4xl font-semibold text-primary">
                <p>{product.price}USD</p>
          </div>
          
          <div className="mt-5 mb-5 text-xl ">
            <p>{product.special_features}</p>
          </div>    
          <div className="flex justify-between border-b border-secondary">
            <div className="flex">
              <FaSdCard/>RAM
            </div>
            <p>{product.memory}GB</p>
          </div>

          <div className="flex justify-between border-b border-secondary">
            <div className="flex">
              <FaSimCard/>Almacenamiento
            </div>
            <p> {product.storage}GB</p>
          </div>

          <div className="flex justify-between border-b border-secondary">
            <div className="flex">
            <FaMicrochip/> Procesador
            </div>            
            <p> {product.cpu}</p>
          </div>

          <div className="flex justify-between border-b border-secondary">
            <div className="flex">
              <FaBatteryFull/>Batería
            </div>
            <p>{product.battery}mAh</p>
          </div>

          <div className="flex justify-between border-b border-secondary">
            <div className="flex">
              <FaMobileAlt/>Tamaño
            </div>
            <p> {product.size}</p>
          </div>       
      </div>
    </div>  
      )}

      <Link to='/tienda'>
        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          <FaArrowLeft></FaArrowLeft> </button>
      </Link>
      
      </div>    
  )
}

export default Detail;




















