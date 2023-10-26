import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlBannner = "http://localhost:3001/banner";

export const getAllBanner=createAsyncThunk(
    "banner/allBanner",
    async()=>{
      try{
        const res = await axios.get(urlBannner, {
          headers: {
            Accept:'application/json',
          },
        });
        return res.data;
       }catch(error){
        throw error.response.data.message;
       }
    }
  );

  export const postBanner=createAsyncThunk(
    "banner/newBanner",
    async()=>{
        try{
            const resp = await axios.post(urlBannner,{
                headers:{
                    Accept:'application/json',
                },
            });
            return resp.data;
        }catch(error){
            throw error.response.data.message;
        }
    }
  );