import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../store/userSlice";
import Swal from "sweetalert2";

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    try {
      // Verificar que las contraseñas coincidan
      if (data.password !== data.confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Las contraseñas no coinciden",
        });
        return;
      }

      // Enviar la solicitud de registro
      await dispatch(signUpUser(data));

      // Mostrar SweetAlert de éxito
      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Bienvenido a EcommerceApp",
      });
    } catch (error) {
      // Mostrar SweetAlert de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
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
              {...register("username", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="Ingresa tu usuario"
              required
            />
            {errors.username && (
              <span className="text-red-500">Este campo es requerido</span>
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
              {...register("email", { required: true })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              placeholder="nombre@dominio.com"
              required
            />
            {errors.email && (
              <span className="text-red-500">Este campo es requerido</span>
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
              {...register("password", { required: true, minLength: 6 })}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              required
            />
            {errors.password && (
              <span className="text-red-500">
                Este campo es requerido y debe tener al menos 6 caracteres
              </span>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
              Confirmar contraseña:
            </label>
            <input
              type="password"
              {...register("confirmPassword", { required: true })}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-300 dark:placeholder-gray-400 dark:text-black"
              required
            />
            {errors.confirmPassword && (
              <span className="text-red-500">Este campo es requerido</span>
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
