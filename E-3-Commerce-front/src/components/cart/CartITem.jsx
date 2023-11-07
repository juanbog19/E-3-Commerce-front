/* eslint-disable react/prop-types */
/*
El componente CartItem es un componente de React que muestra un elemento del carrito de compras. Recibe las siguientes 
propiedades: name (nombre del producto), price (precio del producto), quant (cantidad del producto en el carrito), 
id (id del producto) e img (imagen del producto). El componente muestra la información del producto, como el nombre, 
el precio unitario y la cantidad. También muestra botones para eliminar el producto del carrito o agregar más unidades. 
Finalmente, muestra el total del producto multiplicando el precio unitario por la cantidad. El componente utiliza el hook 
useDispatch de react-redux para enviar acciones al store y utiliza las acciones addItem y removeItem del slice cartSlice 
para agregar o eliminar elementos del carrito.
*/
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem, removeItem, clearStore } from "../../store/cartSlice"; 
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaTrashAlt,FaShoppingCart } from "react-icons/fa";

const CartItem = (props) => {
  const { id, img, brand, model, price} = props;
  
  const dispatch = useDispatch();
  const [cantUnidades, setCantUnidades] = useState(1)
  const { items } = useSelector((state)=>state.cart)

   

  const remove = () => {
    dispatch(removeItem(id));
    setCantUnidades(cantUnidades - 1);
    Swal.fire("Producto eliminado", "Click para continuar", "info");
  };

  const add = () =>{
    dispatch(addItem({ ...props, amount: 1 }));
    setCantUnidades(cantUnidades + 1);
    Swal.fire("Producto agregado", "Click para continuar", "info");
  }

  

  return (
    <li className="flex justify-between my-2 border-secondary">
           
      <div className="flex">
        {img ? (
          <img
            src={img}
            alt={model}
            className='w-20 h-20 shadow-lg mr-2'
          />
        ) : (
          <p>Missing img</p>
        )}

        <div>
        <Link to={`/detail/${id}`}>
          <h3 className="text-xl font-bold">{brand} {model}</h3>         
        </Link> 
        </div>
      </div>

      <div className="text-right grid content-end">
        <span className="text-semibold text-lg text-primary">Precio unitario {price}USD</span>

        <div className="flex">

          <div className="text-stone-600 text-xs">Unidades:{cantUnidades}</div>

          <div>

            <button
              className="flex font-semibold text-sm text-stone-900 hover:text-primary text-xs"
              onClick={remove}
            >
              Eliminar producto <FaTrashAlt/> 
            </button>

            <button
              className="flex font-semibold text-sm text-stone-900 hover:text-primary text-xs"
              onClick={add}
            >
              Agregar producto <FaShoppingCart/>
            </button>

          </div>
        </div>
        
      </div>     
    </li>
    
  );
};

export default CartItem;
