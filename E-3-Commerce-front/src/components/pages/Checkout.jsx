import CartIcon from "../cart/CartIcon";
import CartItem from "../cart/CartITem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Checkout = () =>{

    //EMI SLICE
    const items = useSelector( ( state ) => state.cart.items );
    const total = useSelector( ( state ) => state.cart.total );
    

       const cantItems = items.length;
    const hasItems = cantItems > 0 ? true : false;





    return(
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl text-gray-700 uppercase text-center mb-3">CARRITO DE COMPRAS</h1>

        
        {/* SI NO HAY PRODUCTOS AGREGADOS AL CARRITO */}
        {!hasItems && (
                <div className="text-center mt-10">
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
                <div className="bg-white p-4">
                <p className="text-right">Price</p>
                <ul>
                    {items.map(( item ) => (
                    <CartItem
                        key={ item.id }
                        id={ item.id }
                        name={ item.model }
                        price={ item.price }
                        // quant={ item.quant }
                        img={ item.image }
                    />
                    ))}
                </ul>

                <div className="text-right">
                    <p className="m-0 text-stone-600 text-xs">Cantidad de productos: { cantItems } </p>
                    <p className="m-0 mb-2 font-semibold text-lg">
                    Total: <span className="text-primary">{total} USD</span>{" "}
                    </p>
                    {/* {isLoggedIn && (
                    <Button label="Proceder al pago" onClick={ toggleModal } />
                    )}
                    {!isLoggedIn && <Button label="Login" to="/login" />} */}
                </div>
                </div>
            )}

        </div>
    )
};

export default Checkout;