import { Link } from 'react-router-dom';
import PhonePulse from "../../assets/PhonePulse.jpg";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 z-20 w-full bg-white border-b border-gray-200 ">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link className="flex items-center" to="/">
            <img src={PhonePulse} className="h-8 mr-3" alt="PhonePulse" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">PhonePulse</span>
          </Link>
          <div className="flex md:order-2">
            <Link className="px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" to="/login">Area de Clientes</Link>
            <div className="flex items-center justify-center ml-3">
              <Link to='/checkout'>
                <FaShoppingCart className="text-2xl text-gray-700"></FaShoppingCart>             
              </Link>
            </div>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/">Inicio</Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/tienda">Tienda</Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/about">Acerca de</Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/contacto">Contáctanos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
