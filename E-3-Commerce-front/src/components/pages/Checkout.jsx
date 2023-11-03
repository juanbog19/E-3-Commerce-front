import CartIcon from "../cart/CartIcon";
import CartItem from "../cart/CartITem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearStore } from "../../store/cartSlice";

const Checkout = () =>{

    //EMI SLICE
    const items = useSelector( ( state ) => state.cart.items );
    const total = useSelector( ( state ) => state.cart.total );
    const dispatch = useDispatch();
    

    const cantItems = items.length;
    const hasItems = cantItems > 0 ? true : false;

    const limpiar = () => {
        dispatch(clearStore());
        
      };



    return(
        <div className="mt-20">
            <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">Tu carrito</h1>

        
        {/* SI NO HAY PRODUCTOS AGREGADOS AL CARRITO */}
        {!hasItems && (
                <div className="text-center mt-10 bg-white border border-gray-200 shadow sm:p-6 md:p-8 dark:border-gray-300">
                <h2 className="text-stone-600 mb-2">Tu carrito de compras esta vacío</h2>

                <div className="w-40 mx-auto mb-3 text-stone-00">
                    <CartIcon />
                </div>

                <Link
                    className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                    to="/"
                >
                    Inicio
                </Link>
                </div>
            )}


        {/* SI HAY PRODUCTOS AGREGADOS AL CARRITO */}
        {hasItems && (
                <div className="flex bg-white p-4">
                
                <ul className="w-3/4 bg-white p-4 mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
                    {items.map(( item ) => (
                    <CartItem
                        key={ item.id }
                        id={ item.id }
                        brand={item.brand}
                        model={ item.model }
                        price={ item.price }
                        img={ item.img }
                    />
                    ))}
                </ul>

                <div className="flex items-center justify-center w-1/4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
                    <div>
                        <p className="mb-5">Resumen de compra</p>
                        <p className="text-stone-600 text-xs">Cantidad de productos: { cantItems } </p>
                        <p className="font-semibold text-lg">
                        Total: <span className="text-primary">{total} USD</span>{" "}
                        </p>
                        <div>
                        <button onClick={limpiar} className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" >
                        Vaciar carrito
                    </button>
                        </div>

                    </div>
                    
                                        
                </div>
                </div>
            )}

        </div>
    )
};

export default Checkout;