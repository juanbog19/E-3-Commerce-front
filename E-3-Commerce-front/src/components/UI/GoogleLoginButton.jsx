import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginUser, setToken, setError } from '../../store/userSlice';
import Swal from "sweetalert2";

const GoogleLoginButton = () => {

  const dispatch = useDispatch();

  const responseGoogle = async (response) => {
    // Manejar la respuesta de Google
    try {
      const { tokenId } = response;
      const data = await dispatch(loginUser(tokenId));

      if (data.token) {
        dispatch(setToken(data.token));
        await Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          text: '¡Te has autenticado con Google exitosamente!',
        });
      } else {
        dispatch(setError("Error de autenticación"));
        await Swal.fire({
          icon: 'error',
          title: 'Error de autenticación',
          text: 'Hubo un problema al autenticarse con Google',
        });
      }
    } catch (error) {
      dispatch(setError(error.message));
      await Swal.fire({
        icon: 'error',
        title: 'Error de autenticación',
        text: error.message,
      });
    }
  };

  const clientId = "579782132065-5lrtgi0vadgd456rvurshopd7ghu8qju.apps.googleusercontent.com";
  return (
    <div>
      <GoogleLogin
        clientId= {clientId}
        buttonText="Iniciar sesión con Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        // cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default GoogleLoginButton;