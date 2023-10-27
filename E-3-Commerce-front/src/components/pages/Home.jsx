import React, { useState } from "react";
import "./styles.css";
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
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="flex items-center justify-between">
        <h1>SEARCH DINAMICO</h1>
        <SearchBar />
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
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
          src="https://m.media-amazon.com/images/I/61b0o90kTRL._AC_SX679_.jpg"
          alt="Image"
        />
      </div>
      <img
          src="https://m.media-amazon.com/images/I/61iPfUf-zpL._AC_SX679_.jpg"
          alt="Image"/>
      <Filters />
      <Footer />
      </div>
      </div> 
  );
};

export default Home;