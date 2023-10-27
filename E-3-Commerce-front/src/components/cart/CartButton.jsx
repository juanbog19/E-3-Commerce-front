import { NavLink } from "react-router-dom";
import CartIcon from "../../assets/svg/CartIcon";


const CartButton = () => {

    //const cant = items.legnth;
    //const hasItem = cant > 0 ? true : false

    
    return (
        <NavLink
        to="/cart"
        >
        <span className="w-6 h-6">
        <CartIcon />
        </span>
        </NavLink>
    )
}

export default CartButton;