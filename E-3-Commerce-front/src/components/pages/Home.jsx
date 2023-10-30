import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Card from "../UI/Card";
import Filters from "../UI/Filters";
import Ordenamiento from "../UI/Ordenamiento";
import SearchBar from "../UI/SearchBar";

const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`relative ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="flex items-center justify-between">
        <SearchBar />
        <div className="absolute right-4 top-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 text-primary hover:text-secondary"
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>
      <Ordenamiento />
      <Card />
      <div className="text-center">
        <div className="image-container">
        <img
          src="https://i5.walmartimages.com.mx/mg/gm/3pp/asr/630dab4b-abca-4516-80a3-0b42bea87173.8628b4e2e9ac75322b696448053b949d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
          alt="Image"
        />
      <img
          src="https://m.media-amazon.com/images/I/61iPfUf-zpL._AC_SX679_.jpg"
          alt="Image"/>
      <Filters />
      <Footer />
      </div>
    </div> 
    </div> 
  );
};

export default Home;