import React from "react";
import { Link } from 'react-router-dom';
import CartButton from "../cart/CartButton";
import PhonePulse from "../../assets/PhonePulse.jpg";
import "./navbar.css";
import About from "../../components/pages/About";
import Home from "../../components/pages/Home";

const NavBar = () => {
  return (
    <header className="pt-0">
      <nav className="flex items-center justify-between bg-accent p-6 mb-2 font-mono font-normal border-b-2 border-[#374151]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Link to='/'>
              <img src={PhonePulse} alt="PhonePulse Logo" style={{ width: "18%", height: "auto" }}/>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/About">
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
                About
              </button>
            </Link>

            <Link to="/">
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
                Inicio
              </button>
            </Link>

            <Link to="/login">
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
                Iniciar Sesion
              </button>
            </Link>
          </div>

          <CartButton />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
