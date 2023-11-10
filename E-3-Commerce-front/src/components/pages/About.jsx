import iphone from '../../assets/iphone_14pro.png';

const About = () => {
  return (
    <div className=" flex mt-20 ml-4 mr-4 mb-20 space-x-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300 mt-40 mr-40 ml-40">

      
      <div>

      <h1 className="flex justify-center text-4xl font-semibold ">PhonePulse</h1>

      <p className="mt-5 mb-5 text-xl ">
      En PhonePulse, somos apasionados por conectarlos con el pulso de lo mas
      reciente y destacado en el mundo de los teléfonos celulares. Entendemos 
      que los consumidores tecnológicamente conscientes de hoy en día buscan
      tanto caldiad como asequibilidad, y ahi es donde entramos en acción.        
      </p>

      <h1 className="flex justify-center text-4xl font-semibold ">Nuestra misión</h1>

      <p className="mt-5 mb-5 text-xl ">
      Nuestra misión es simple pero poderosa: proporcionarles un destino único
      donde puedan descubrir ofertas increíbles en teléfonos celulares nuevos.
       Creemos que todos deberían tener acceso a la tecnología
      de vanguardia sin quebrantar su bolsillo, y estamos comprometidos en hacerlo
      realidad.
      </p>
      </div>
      

      <div>
        <img src={iphone} alt='imagen iphone 14 pro' />
      </div>


    </div>
  );
};

export default About;
