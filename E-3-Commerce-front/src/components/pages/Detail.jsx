import {useParams } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import {getProductsId} from '../../store/productsSlice';


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
    <div>
      {product &&(
      <div>
       <p>Marca: {product.brand.name}</p>
       <a href={product.image} target="_blank" rel="noopener noreferrer">
         <img src={product.image} alt={product.brand.name} />
       </a>
       <div>
         <p>Modelo: {product.model}</p>
       </div>
       <div>
         <p>Precio: {product.price}</p>
       </div>
    </div>  
      )}
      </div>    
  )
}

export default Detail;




















