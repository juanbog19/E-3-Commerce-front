import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlUsers= "http://localhost:3001/users";
//const urlUsersPost ="http://localhost:3001/users/verify";

//http://localhost:3001/login


export const getUsers=createAsyncThunk(
    "users/getUsers",
    async()=>{
        try{

            
   const res = await axios.get(urlUsers , {

                headers: {
                  Accept: 'application/json',
                },
              });
            return res.data
        
    } catch(error){
     throw new Error(error.response.data.message)
    }
   }  
);




// export const createUsersVerify = createAsyncThunk(
//   "users/createUsersVerify",
//   async ({ verificationCode }) => {
//       try {
//           const res = await axios.post(urlUsersPost, { verificationCode }, {
//               headers: {
//                   Accept: 'application/json',
//               },
//           });
//           return res.data;
//       } catch (error) {
//           throw new Error(error.response.data.message);
//       }
//   }
// );


  


export const loginUser = createAsyncThunk(
  "users/login",
  async ({ email, password }) => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      const { success, logged, userId, userPhoto } = data;

      if (success && logged && userId) {
        localStorage.setItem('userPhoto', userPhoto);
        localStorage.setItem('logged', logged);
        localStorage.setItem('success', success);
        localStorage.setItem('userId', userId);
        return { userId, logged, success, userPhoto };
      } else {
        throw new Error("The user has been deactivated, please contact an administrator.");
      }
    } catch (error) {
      console.error(error)
      throw new Error("The user has been deactivated, please contact an administrator");
    }
  }
);


// export const logoutUser = createAsyncThunk(
//   "users/logout",
//   async ({ userId }) => {
//     try {
//       const response = await fetch("http://localhost:3001/users/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userId }),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to logout - HTTP Status: ${response.status}`);
//       }

//       const data = await response.json();
//       const { success, logged } = data;

//       if (success) {
//         localStorage.setItem("logged", logged);
//         localStorage.setItem("userId", userId);
//         localStorage.setItem("success", success);
//         return { userId, logged: false, success };
//       } else {
//         throw new Error("Error al cerrar sesión.");
//       }
//     } catch (error) {
//       throw new Error("Error al cerrar sesión.");
//     }
//   }
// );


export const createUsers=createAsyncThunk(
    "users/createUsers",
    async(payload)=>{
        try{


            const res= await axios.post(urlUsers, payload , {

                headers: {
                  Accept: 'application/json',
                },
              });
            return res.data
        }
        
        catch(error){

          console.log(error.message);
            throw new Error("ya existe ese mail")
        }
    }
);


export const putUser = createAsyncThunk(
    "users/putUsers",
    async(obj)=>{
        try{


            const res= await axios.put(urlUsers, obj , {

                headers: {
                  Accept: 'application/json',
                },
              });
            return res.data
        } catch(error){
            throw new Error(error.response.data.message)
        }
    }
);

export const updatedsUser=createAsyncThunk(
    "users/updatedsUser",
    async(id) =>{
        try{


            const res= await axios.get(urlUsers,{data:{id:id}} , {

                headers: {
                  Accept: 'application/json',
                },
              })
            return res.data
        }catch(error){
            throw new Error(error.response.data.message)
        }
    }
);




