import { Link } from "react-router-dom";

const ThankYouPage = () => {

    console.log('Rendering ThankYouPage');

    

    return(
        <div>




  
    <div className="flex items-center justify-center h-screen">
      <div className="p-4 rounded shadow-lg ring ring-gray-200">
        <div className="flex flex-col items-center space-y-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-4xl font-bold">Muchas gracias por tu compra</h1>
          <p>Nos gustaría que compartas tu experiencia, por favor dejanos tu comentario</p>
          
          <div className="flex">
            
                <button 
                
                className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >Tu experiencia</button>            
            

            <Link to='/tienda' >
                <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >Vovler a la tienda</button>           
            </Link>
          
          
            </div>      
        </div>
      </div>
    </div>
  










        </div>
    )
};

export default ThankYouPage;