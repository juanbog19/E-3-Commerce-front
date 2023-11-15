import CartIcon from "../cart/CartIcon";
import CartItem from "../cart/CartITem";
import PaypalPayment from "../UI/Paypal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearStore } from "../../store/cartSlice";
import { FaShoppingCart } from "react-icons/fa";

const Checkout = () =>{

    //EMI SLICE
    const items = useSelector( ( state ) => state.cart.items );
    const total = useSelector( ( state ) => state.cart.total );
    const isAuthenticated = useSelector( (state) => state.user.loggedin);
    console.log(items);
    
    const dispatch = useDispatch();

    const itemsTotal = items ? items.map((i)=>i.quant) : [];
    const initialValue = 0;
    const quantTotal = itemsTotal.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
    );

    console.log(':::::::::::::', quantTotal);
    
    
    console.log(quantTotal);
    const cantItems = items.length;
    const hasItems = cantItems > 0 ? true : false;

    const limpiar = () => {
        dispatch(clearStore());        
    };

    return(
        <div className="mt-20">
            <h1 className="mb-3 text-2xl text-center text-gray-700 uppercase">Tu carrito</h1>

        
        {/* SI NO HAY PRODUCTOS AGREGADOS AL CARRITO */}
        {!hasItems && (
                <div className="mt-10 text-center bg-white border border-gray-200 shadow sm:p-6 md:p-8 dark:border-gray-300">
                <h2 className="mb-2 text-stone-600">Tu carrito de compras esta vacío</h2>

                <div className="w-40 mx-auto mb-3 text-stone-00">
                    <CartIcon />
                </div>

                <Link
                    className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    to="/tienda"
                >
                    Tienda
                </Link>
                </div>
            )}


        {/* SI HAY PRODUCTOS AGREGADOS AL CARRITO */}
        {hasItems && (
                <div className="flex p-4 bg-white">
                
                <ul className="w-3/4 p-4 mx-auto bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
                    {items.map(( item ) => (
                    <CartItem
                        key={ item.id }
                        id={ item.id }
                        brand={item.brand}
                        model={ item.model }
                        price={ item.price }
                        img={ item.img }
                        quant={ item.quant }
                        
                    />
                    ))}
                </ul>

                <div className="flex items-center justify-center w-1/4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
                    <div>
                        <p className="mb-5">Resumen de compra</p>
                        {/* <p className="text-xs text-stone-600">Cantidad de modelos: { cantItems } </p> */}
                        <p className="text-xs text-stone-600">Cantidad de productos: { quantTotal } </p>
                        <p className="text-lg font-semibold">
                        Total: <span className="text-primary">{total} USD</span>{" "}
                        </p>
                        <div>
                        <button onClick={limpiar} className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5 mr-2 mb-2" >
                        Vaciar carrito 
                        <FaShoppingCart></FaShoppingCart>
                    </button>
                    <div>
                        {
                            !isAuthenticated ? (
                                <div className="flex mt-5">                            
                                    <Link
                                    to='/login'>
                                        <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                            Continuar compra
                                        </button>                               
                                    </Link>
                                    <p className="text-lg text-semibold text-primary">Debes iniciar sesión para completar la compra</p>
                                </div>
                            ) : (
                                <div>
                                    <PaypalPayment total={total} clearStore={limpiar} />
                                </div>
                            )
                        }
                    </div>
                   
                    </div>

                    </div>
                    
                </div>

                </div>
            )}
            
          

        </div>
    )
};

export default Checkout;