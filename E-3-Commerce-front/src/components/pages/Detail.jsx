import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsId} from '../../store/productsSlice'
//import axios from "axios";

//const URL_PRODUCTS = "http://localhost:3001/products";
//`${URL_PRODUCTS}/${id}`

const Detail = () => {
    //const {marca, modelo, img, price} = celphone
    //Types:{detail.type && detail.type.join(', ')}
    const {id}= useParams();
    const dispatch = useDispatch();
    const products = useSelector((state)=> state.products.products)
    

    useEffect(()=>{
     //axios.get(`http://localhost:3001/products/${id}`)
    dispatch(getProductsId(id))
    },[dispatch,id])

  return (
    <div>
        <div>
            <p>Marca:{products.brand}</p>
        </div>
        <img src={products.image} alt={products.brand}/>
        <div>
            <p>Modelo:{products.model}</p>
        </div>
        <div>
            <p>Precio:{products.price}</p>
        </div>
    </div>
  )
}

export default Detail;