import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/userSlice";
import GoogleLoginButton from "./GoogleLoginButton";
import Swal from "sweetalert2";

const Login = () => {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  const { register, handleSubmit, errors } = useForm();

  const handleLogin = async (data) => {
    try {
      await dispatch(loginUser(data));
      Swal.fire({
        icon: "success",
        title: "¡Inicio de sesión exitoso!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: error,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="mt-20 flex justify-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
        <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
          <h5 className="flex justify-center text-xl font-medium text-gray-900 dark:text-black">
            Bienvenido/a de nuevo
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Correo electrónico:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              ref={register({
                required: "Este campo es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "Ingresa un correo electrónico válido",
                },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="nombre@dominio.com"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
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
              ref={register({
                required: "Este campo es requerido",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
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
            {loading ? "Cargando..." : "Ingresar"}
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-700">
            <div className="flex flex-col items-center">
              <p>¿No tienes cuenta?</p>
              <Link
                className="text-purple-700 hover:underline dark:text-purple-500"
                to={`/signup`}
              >
                Registrate
              </Link>
            </div>

            <div>
              <h2>Iniciar sesión</h2>
              {/* Renderiza el botón de inicio de sesión con Google */}
              <GoogleLoginButton/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
