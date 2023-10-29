
//Al igual que el componente Login.jsx debemos agregarle lo mismo y en este estara la auth de terceros.

import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    

  };

return (
  <div className='mt-20 flex justify-center'>
          <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
        <form className="space-y-6" action="#">
          <h5 className="flex justify-center text-xl font-medium text-gray-900 dark:text-black">Crear una cuenta</h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Usuario:</label>
            <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black" placeholder="Ingresa tu usuario" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Correo electrónico:</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black" placeholder="nombre@dominio.com" required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Contraseña:</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black" required />
          </div>
          <button type="submit" onClick={handleSignUp} className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Registrarse</button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-700">
            <div className='flex flex-col items-center'>
              <p>¿Ya tienes una cuenta?</p>
              <Link className="text-purple-700 hover:underline dark:text-purple-500" to={`/login`}>Acceder</Link>
            </div>
          </div>
        </form>
      </div>
  </div>
)
}
export default SignUp;
