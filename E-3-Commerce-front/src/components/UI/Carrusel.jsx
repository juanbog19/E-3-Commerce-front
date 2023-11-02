import { useState, useEffect } from 'react';


const Banner = ({data}) => {  

 //console.log('log de banner',data);

  const [currentIndex, setCurrentIndex] = useState(0);

 
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % data.length;
    setCurrentIndex(newIndex);
  };

  
  useEffect(() => {
    if (data) {
      const interval = setInterval(nextSlide, 3000);   //tiempo entre anuncios

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, data]);

  if (!data) {
    
    return <div>No hay banners disponibles.</div>;
  }

   return (
    <div className='max-w h-[240px] w-full relative group bg-black block'>
      {data.length 
      ? <div style={{ backgroundImage: `url(${data[currentIndex].img.url})` }} className='w-full h-full duration-500 bg-center bg-cover'></div>
      : 'No hay banners disponibles'
      }
    </div>
  );
};

export default Banner;
