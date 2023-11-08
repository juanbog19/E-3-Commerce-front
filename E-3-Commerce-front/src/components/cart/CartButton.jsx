import { NavLink } from "react-router-dom";
import CartIcon from "../../assets/svg/CartIcon";


const CartButton = () => {
    
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