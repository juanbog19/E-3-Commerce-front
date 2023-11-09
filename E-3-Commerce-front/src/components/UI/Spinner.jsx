import { useState, useEffect } from 'react';
import PhonePulse from '../../assets/PhonePulse.svg';

function Spinner() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoadingText, setShowLoadingText] = useState(true);

  useEffect(() => {
    // Simulate an API call or some loading process
    setTimeout(() => {
      setIsLoading(false);

      // Hide the loading text after 0.5 seconds
      setTimeout(() => {
        setShowLoadingText(false);
      }, 200);
    }, 1500);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? (
        <img src={PhonePulse} alt="Loading spinner" className="w-32 h-32 animate-spin" />
      ) : (
        showLoadingText && <p>Cargando...</p>
      )}
    </div>
  );
}

export default Spinner;
