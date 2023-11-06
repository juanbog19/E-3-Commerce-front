import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosURL from '../../tools/axiosInstance'

const SignUp = () => {
  const navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    "username": "",
    "password": "",
    "email": ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setNewUser(prevState => ({
        ...prevState,
        [name]: value
    }))
}

const handleSubmit = async (event) => {
  event.preventDefault()
  try {

    const response = await axiosURL.post('/users', newUser)

    setNewUser({
      "username": "",
      "password": "",
      "email": ""
    })

    navigate('/')
    
  } catch (error) {
    console.log('Error al enviar la solicitud:', error)
    console.log('Detalle del error:', error.response.data)
  }
}

  return (
    <div className="flex justify-center mt-20">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="flex justify-center text-xl font-medium text-gray-900 dark:text-black">
            Crear una cuenta
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Usuario:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="Ingresa tu usuario"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Correo electrónico:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="nombre@dominio.com"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            Registrarse
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-700">
            <div className="flex flex-col items-center">
              <p>¿Ya tienes una cuenta?</p>
              <Link
                className="text-purple-700 hover:underline dark:text-purple-500"
                to={`/login`}
              >
                Acceder
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default SignUp;