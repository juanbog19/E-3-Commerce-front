import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import CartButton from "../cart/CartButton";

//COMPLETAR LINK EN LOGIN Y SIGN UP
const NavBar = () => {
    return (
    <header className="pt-0">
        <nav className="flex items-center justify-between bg-accent p-6 mb-2 font-mono font-normal border-b-2 border-[#374151]">
        <div className="flex items-center mr-5">
            <div>
                <h2>Logo</h2>
            </div>      
            
            <div>
                <Link to="/tienda">
                <button>Tienda</button>                    
                </Link>
                <Link to="/servicio-tecnico"><button>Servicio Técnico</button></Link>
            </div>

            <div>
                <Link to=''>Log in</Link> 
            </div> 

            <div>
                <Link to=''>Sign up</Link> 
            </div>
            
            <div>
                <SearchBar/>
            </div>           
            <CartButton />
        </div>
        </nav>
    </header>
    )
}

export default NavBar;