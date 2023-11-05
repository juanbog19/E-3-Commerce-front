import React from "react";
import { Link } from 'react-router-dom';
import CartButton from "../cart/CartButton";
import PhonePulse from "../../assets/PhonePulse.jpg";
import About from "../../components/pages/About";
import Home from "../../components/pages/Home";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link className="flex items-center" to="/">
            <img src={PhonePulse} className="h-8 mr-3" alt="PhonePulse" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">PhonePulse</span>
          </Link>
          <div className="flex md:order-2">
            <Link className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" to="/login">Area de Clientes</Link>
            <div className="ml-3 flex items-center justify-center">
              <Link to='/checkout'>
                <FaShoppingCart className="text-2xl text-gray-700"></FaShoppingCart>             
              </Link>
            </div>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/">Inicio</Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/about">Acerca de</Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-gray dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="#">Contáctanos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
