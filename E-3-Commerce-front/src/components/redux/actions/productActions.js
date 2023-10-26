import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const urlProduct = "http://localhost:3001/product"; //corroborar que el endpoint sea el correcto

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async () => {
    try {
      const resp = await axios.get(urlProduct, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const getProductId = createAsyncThunk(
  "product/getProductId",
  async (id) =>{
    try {
     const resp = await axios.get(`http://localhost:3001/product/detail/${id}`, {
      headers: {
        Accept: 'application/json',
      },
    });
    return resp.data;
    } catch (error){
      return Promise.reject(error.response.data.message);
    }
  }
);

export const postProduct = createAsyncThunk(
  "product/postProduct",
  async (obj) => {
    try {
      const resp = await axios.post(urlProduct, obj, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const putProduct = createAsyncThunk(
  "product/putProduct",
  async (obj) => {
    try {
      const resp = await axios.put(urlProduct, obj, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    try {
      const resp = await axios.delete(urlProduct, { data: { id: id } }, {
        headers: {
          Accept: 'application/json',
        },
      });
      return resp.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

