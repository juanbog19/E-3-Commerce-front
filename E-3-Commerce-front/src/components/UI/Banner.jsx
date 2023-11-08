import { useState, useEffect } from 'react';

const Banner = () => {  

  const slides= [
  "https://res.cloudinary.com/dm9glx5a7/image/upload/v1699382733/ecommerce/banner/1_vi40h9.png",
  "https://res.cloudinary.com/dm9glx5a7/image/upload/v1699382730/ecommerce/banner/2_l0srhy.png",
  "https://res.cloudinary.com/dm9glx5a7/image/upload/v1699380089/ecommerce/banner/PhonePulse_ym41va.gif"
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  
  useEffect(() => {
    if (slides.length > 0) {
      const interval = setInterval(nextSlide, 5000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, slides]);

  if (slides.length === 0) {
    
    return <div>No hay banners disponibles.</div>;
  }

  return (
    <div className='max-w h-[720px] w-full relative group bg-black block'>

      <div style={{ backgroundImage: `url(${slides[currentIndex]})` }} className='w-full h-full duration-500 bg-center bg-cover'></div>
      
    </div>
  );
};

export default Banner;
