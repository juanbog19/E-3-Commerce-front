import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';

//COMPLETAR LINK EN LOGIN Y SIGN UP
const NavBar = () => {
    return (
        <div>

            <div>
                <h2>Logo</h2>
            </div>      

            <div>
                <Link to="/tienda">Tienda</Link>
                <Link to="/servicio-tecnico">Servicio Técnico</Link>
            </div>

            <div>
                <Link to=''>Log in</Link> 
            </div> 

            <div>
                <Link to=''>Sign up</Link> 
            </div>

            <div>
                <Link>aca iría el icono del carrito</Link>
            </div>

            <div>
                <SearchBar/>
            </div>           

        </div>
    )
}

export default NavBar;