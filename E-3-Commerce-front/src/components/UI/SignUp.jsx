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
  // const loading = useSelector((state) => state.user.loading);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   watch,
  // } = useForm();

  // const handleSignUp = async (data) => {
  //   try {

  //     // Validar las contraseñas
  //     if (data.password !== data.confirmPassword) {
  //       throw new Error("Las contraseñas no coinciden");
  //     }

  //     // Enviar la solicitud de registro
  //     await dispatch(signUpUser(data));

  //     // Si el registro es exitoso, mostrar una alerta y redirigir
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Registro exitoso',
  //       text: '¡Te has registrado correctamente!',
  //       confirmButtonText: 'Aceptar'
  //     });

  //     navigate("/home"); // Redirigir a la página de inicio
  //   } catch (error) {
  //     // Si ocurre un error, mostrar una alerta de error
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Error',
  //       text: error.message,
  //       confirmButtonText: 'Aceptar'
  //     });
  //   }
  // };

  const { loading, errorLogin } = useSelector((state) => state.user);

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setNewUser(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSignup = (event) => {
    event.preventDefault()

    dispatch(signUpUser(newUser)).then((result) => {
      if (result.payload) {
        setNewUser({
          username: '',
          email: '',
          password: ''
        })
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

  //console.log(newUser)


  return (
    <div className="flex justify-center mt-20">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
        <form className="space-y-6" onSubmit={handleSignup}>
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
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="Ingresa tu usuario"
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
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="nombre@dominio.com"
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