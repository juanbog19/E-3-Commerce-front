import React, { useState } from "react";

const ThemeSelector = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const ThemeSelector = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={ThemeSelector} className="text-primary hover:text-secondary">
      Toggle Dark Mode
    </button>
  );
};

export default ThemeSelector.reducer;