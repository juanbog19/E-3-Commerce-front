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
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/cartSlice"; 
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaTrashAlt,FaShoppingCart } from "react-icons/fa";

const CartItem = (props) => {
  const { id, img, brand, model, price, quant} = props;
  
  const dispatch = useDispatch();


  const remove = () => {
    dispatch(removeItem(id));
    Swal.fire("Producto eliminado", "Click para continuar", "info");
  };

  const add = () =>{
    dispatch(addItem({ ...props, amount: 1 }));
    Swal.fire("Producto agregado", "Click para continuar", "info");
  }


  return (
    <li className="flex justify-between my-2 border-secondary">
      <div className="flex">
        {img ? (
          <img
            src={img}
            alt={model}
            className='w-20 h-20 mr-2 shadow-lg'
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

      <div className="grid content-end text-right">
        <span className="text-lg text-semibold text-primary">Precio unitario {price}USD</span>

        <div className="flex">

          <div className="text-xs text-stone-600">Unidades:{quant}</div>

          <div>

            <button
              className="flex text-sm font-semibold text-stone-900 hover:text-primary"
              onClick={remove}
            >
              Eliminar producto <FaTrashAlt/> 
            </button>

            <button
              className="flex text-sm font-semibold text-stone-900 hover:text-primary"
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
