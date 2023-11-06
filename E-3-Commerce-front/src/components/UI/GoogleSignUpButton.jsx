// import { GoogleLogin } from 'react-google-login';
// import { useDispatch } from 'react-redux';
// import { signUpUser } from '../../store/userSlice';
// //import Swal from "sweetalert2";


// const GoogleSignUpButton = () => {

//   const dispatch = useDispatch();
    
//   // const responseGoogle = async (response) => { 
//   //   const { tokenId } = response;

//     // try {
//     //   await dispatch(signUpUser({ userData: { googleToken: tokenId } }));

//       // Mostrar una alerta de éxito si el registro es exitoso
//   //     Swal.fire({
//   //       icon: 'success',
//   //       title: 'Registro exitoso',
//   //       text: '¡Te has registrado correctamente!',
//   //       confirmButtonText: 'Aceptar'
//   //     });
//   //   } catch (error) {
//   //     // Mostrar una alerta de error si hay un problema
//   //     Swal.fire({
//   //       icon: 'error',
//   //       title: 'Error',
//   //       text: error.message,
//   //       confirmButtonText: 'Aceptar'
//   //     });
//   //   }
//   // }
  
//   const clientId = "579782132065-5lrtgi0vadgd456rvurshopd7ghu8qju.apps.googleusercontent.com";
//   return (
//     <div>
//       <GoogleLogin
//         clientId= {clientId}
//         buttonText="Registar con Google"
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         // cookiePolicy={'single_host_origin'}
//       />
//     </div>
//   )
// }


export default GoogleSignUpButton;