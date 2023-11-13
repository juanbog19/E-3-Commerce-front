import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, setError, signInGoogle } from "../../store/userSlice";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const { loading, errorLogin } = useSelector((state) => state.user);

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleLogin = (event) => {
    event.preventDefault()

    dispatch(loginUser(user)).then((result) => {
      if (result.payload) {
        setUser({
          email: '',
          password: ''
        })
        Swal.fire({
          icon: "success",
          title: "Bienvenido/a",
          text: "¡Inicio de sesión exitoso!",
          showConfirmButton: false,
          timer: 1700
        });
        setTimeout(() => {
          navigate('/');
        }, 1700);
        dispatch(setError(null));
      }
    })
  }

  useEffect(() => {
    dispatch(setError(null));
  }, []);

  //!Login con Google

  function handleCredentialResponse(response) {
    try {

      const body = { id_token: response.credential };
      dispatch(signInGoogle(body)).then((result) => {
        console.log(':::::::::::', result.payload)
        if (result.payload) {
          Swal.fire({
            icon: "success",
            title: "Bienvenido/a",
            text: "¡Inicio de sesión exitoso!",
            showConfirmButton: false,
            timer: 1700
          });
          navigate('/');
        }
      })
    } catch (error) {
      console.error(error);
    }
  }

  // const handleLogout = () => {
  //   google.accounts.id.disableAutoSelect()
  //   google.accounts.id.revoke(localStorage.getItem('email'), done => {
  //     localStorage.clear()
  //     location.reload()
  //   })
  // }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: "643982581450-o9f2pmvt7bok0gd79ot2so3fadojh30g.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInGoogle"),
      { theme: "outline", size: "large" }
    )
  }, [])

  return (
    <div className="flex justify-center mt-20">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
        <form className="space-y-6" onSubmit={handleLogin}>
          <h5 className="flex justify-center text-xl font-medium text-gray-900 dark:text-black">
            Bienvenido/a de nuevo
          </h5>
          <div>
            <div id='signInGoogle' className="flex justify-center"></div>
            {/* <button id='signoutGoogle' onClick={handleLogout}>Salir</button> */}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Correo electrónico:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="nombre@dominio.com"
              required
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
              onChange={handleChange}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300"
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-700">
                Mantener sesión activa
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-700">
            <div className="flex flex-col items-center">
              <p>¿No tienes cuenta?</p>
              <Link
                className="text-purple-700 hover:underline dark:text-purple-500"
                to={'/signup'}
              >
                Registrate
              </Link>
            </div>
          </div>
          {errorLogin && (
            <div className="flex items-center text-center justify-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role='alert'>{errorLogin}</div>
          )}
        </form>
      </div >
    </div >
  );
};
export default Login;