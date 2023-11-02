import React from "react";
import { Link } from 'react-router-dom';
import CartButton from "../cart/CartButton";
import PhonePulse from "../../assets/PhonePulse.jpg";
import "./navbar.css";
import About from "../../components/pages/About";
import Home from "../../components/pages/Home";

// const NavBar = () => {
//   return (
//     <header className="pt-0">
//       <nav className="flex items-center justify-between bg-accent p-6 mb-2 font-mono font-normal border-b-2 border-[#374151]">
//         <div className="flex items-center justify-between w-full">
//           <div className="flex items-center">
//             <Link to='/'>
//               <img src={PhonePulse} alt="PhonePulse Logo" style={{ width: "18%", height: "auto" }}/>
//             </Link>
//           </div>

//           <div className="flex items-center space-x-4">
//             <Link to="/About">
//               <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
//                 About
//               </button>
//             </Link>

//             <Link to="/">
//               <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
//                 Inicio
//               </button>
//             </Link>

//             <Link to="/login">
//               <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
//                 Iniciar Sesion
//               </button>
//             </Link>
//           </div>

//           <CartButton />
//         </div>
//       </nav>
//     </header>
//   );
// }
const NavBar = () => {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link className="flex items-center" to="/">
            <img src={PhonePulse} className="h-8 mr-3" alt="PhonePulse" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">PhonePulse</span>
          </Link>
          <div className="flex md:order-2">
            <Link className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800" to="/login">Area de Clientes</Link>
            <div className="ml-3 flex items-center justify-center">
              <Link to='/checkout'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
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
