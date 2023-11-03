import {useParams, Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import {getProductsId} from '../../store/productsSlice';
import { FaArrowLeft } from "react-icons/fa";


const Detail = () => {
 
  const {id} =useParams();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProductsId(id))
  },[dispatch, id])

  const product = useSelector((state)=>state.products.product);
  console.log('aqui mi product', product)

  // if (!product) {   
  //   return <div>Cargando...</div>;
  // }
  // const imageLink = product.image; 

  return (
    <div className="flex justify-center ml-4 mr-4 mt-20 space-x-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
      {product &&(
      <div className="flex">

        <div  className="w-1/3">
          <a href={product.image} target="_blank" rel="noopener noreferrer">
            <img src={product.image} alt={product.brand.name} />
          </a>
        </div>



       <div className="w-2/3 mt-10">        
       <h1 className="font-semibold text-lg">{product.brand.name} {product.model}</h1>   
       <div>
         <p>{product.special_features}</p>
       </div>    
       <div>
         <p>RAM: {product.memory}GB</p>
       </div>

       <div>
         <p>Almacenamiento: {product.storage}GB</p>
       </div>

       <div>
         <p>CPU: {product.cpu}</p>
       </div>

       <div>
         <p>Bateria: {product.battery}mAh</p>
       </div>

       <div>
         <p>Tamaño: {product.size}"</p>
       </div>       

       <div className="font-semibold">
         <p>{product.price}USD</p>
       </div>

       </div>
       
    </div>  
    
      )}

      <Link to='/'>
        <button className="flex text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          <FaArrowLeft></FaArrowLeft> </button>
      </Link>
      
      </div>    
  )
}

export default Detail;




















