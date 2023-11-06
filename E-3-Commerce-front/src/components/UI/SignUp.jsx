import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../store/userSlice";
//import GoogleSignUpButton from "./GoogleSignUpButton";
import Swal from "sweetalert2";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.user.loading);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleSignUp = async (data) => {
    try {

      // Validar las contraseñas
      if (data.password !== data.confirmPassword) {
        throw new Error("Las contraseñas no coinciden");
      }

      // Enviar la solicitud de registro
      await dispatch(signUpUser(data));

      // Si el registro es exitoso, mostrar una alerta y redirigir
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: '¡Te has registrado correctamente!',
        confirmButtonText: 'Aceptar'
      });

      navigate("/home"); // Redirigir a la página de inicio
    } catch (error) {
      // Si ocurre un error, mostrar una alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message,
        confirmButtonText: 'Aceptar'
      });
    }
  };

  return (
    <div className="mt-20 flex justify-center">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-300">
        <form className="space-y-6" onSubmit={handleSubmit(handleSignUp)}>
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
                required: "El usuario es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9_]{1,15}$/,
                  message: "Debe de contener de 1 a 15 caracteres"
                }
                // Puedes agregar más reglas de validación aquí
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="Ingresa tu usuario"
            />
            {errors.username && (
              <span className="text-red-500 text-xs mt-1">{ errors.username?.message }</span>
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
                required: "El correo electrónico es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Correo electrónico inválido",
                },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="nombre@dominio.com"
            />
            {errors.email && (
              <span className="text-red-500 text-xs mt-1">{ errors.email?.message }</span>
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
                required: "La contraseña es requerida",
                minLength: {
                  value: 8,
                  message: "Este campo es requerido y debe tener minimo 8 caracteres",
                },
                maxLength: {
                  value: 15,
                  message: "Este campo es requerido y debe tener maximo 15 caracteres",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/,
                  message: "Este campo es requerido y debe tener al menos 1 Mayuscula, 1 minuscula, al menos 1 digito, sin espacios en blanco y al menos 1 caracter especial",
                },
                // Puedes agregar más reglas de validación aquí
              })}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              required
            />
            {errors.password && (
              <span className="text-red-500 text-xs mt-1">
                { errors.password?.message }
              </span>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Confirmar contraseña:
            </label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "La confirmación de contraseña es requerida",
                validate: (value) => value === watch("password") || "Las contraseñas no coinciden",
              })}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs mt-1">{ errors.password?.message }</span>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            {loading ? "Registrando..." : "Registrarse"}
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
