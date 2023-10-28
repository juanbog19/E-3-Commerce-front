import Login from '../UI/Login'; // Importa el componente Login
import SignUp from '../UI/SignUp'; // Importa el componente SignUp

const UsersLogin = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <div>
        <h2>Iniciar sesión</h2>
        <Login />
      </div>
      <div>
        <h2>Registrarse</h2>
        <SignUp />
      </div>
    </div>
  );
};

export default UsersLogin;
