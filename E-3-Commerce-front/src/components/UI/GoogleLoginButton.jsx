import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginUser, setToken, setError } from '../../store/userSlice';

const GoogleLoginButton = () => {

  const dispatch = useDispatch();

  const responseGoogle = (response) => {
    // Manejar la respuesta de Google
    const { tokenId } = response;
    dispatch(loginUser(tokenId))
      .then((data) => {
        if (data.token) {
          dispatch(setToken(data.token));
        } else {
          dispatch(setError("Error de autenticación"));
        }
      })
      .catch((error) => {
        dispatch(setError(error.message));
      });
    console.log(response);
  };

  const clientId = "579782132065-5lrtgi0vadgd456rvurshopd7ghu8qju.apps.googleusercontent.com";
  return (
    <div>
      <GoogleLogin
        clientId= {clientId}
        buttonText="Iniciar sesión con Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default GoogleLoginButton;