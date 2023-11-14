import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setError, signUpUser } from "../../store/userSlice";
//import GoogleSignUpButton from "./GoogleSignUpButton";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";


const SignUp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loading, errorLogin } = useSelector((state) => state.user);

  // const [newUser, setNewUser] = useState({
  //   username: '',
  //   email: '',
  //   password: ''
  // })

  // const handleChange = (event) => {
  //   const { name, value } = event.target

  //   setNewUser(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }))
  // }

  const handleSignup = (data) => {

    dispatch(signUpUser(data)).then((result) => {
      if (result.payload) {
        Swal.fire({
          icon: "success",
          title: "Bienvenido/a",
          text: "¡Registro exitoso!",
          showConfirmButton: false,
          timer: 1700
        });
        navigate('/');
        dispatch(setError(null))
      }
    })
  }

  useEffect(() => {
    dispatch(setError(null));
  }, []);

  return (
    <div className="flex justify-center mt-20">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
        <form className="space-y-6" onSubmit={handleSubmit(handleSignup)}>
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
              {...register("username", {
                required: {
                  value: true,
                  message: "El usuario es obligatorio.",
                },
                pattern: {
                  value: /^(?!\s*$).+/i,
                  message: "EL usuario debe ser un usuario valido.",
                },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="Ingresa tu usuario"
            />
            {errors.username && (
              <span className="text-red-500 text-xs">{errors.username.message}</span>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Correo electrónico:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "El correo electrónico es obligatorio"
                },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                  message: "El correo electrónico no tiene un formato válido.",
                },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="nombre@dominio.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs">{errors.email.message}</span>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Contraseña:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es obligatoria.",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
                  message: "La contraseña debe tener mínimo ocho caracteres, al menos una letra, un número y un carácter especial.",
                },
              })}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
            />
            {errors.password && (
              <span className="text-red-500 text-xs">{errors.password.message}</span>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-700">
            <div className="flex flex-col items-center">
              <p>¿Ya tienes una cuenta?</p>
              <Link
                className="text-purple-700 hover:underline dark:text-purple-500"
                to={'/login'}
              >
                Acceder
              </Link>
            </div>
          </div>
          {errorLogin && (
            <div className="flex items-center justify-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50" role='alert'>{errorLogin}</div>
          )}
        </form>
      </div>
    </div>
  );
};
export default SignUp;