import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-3-commerce-back-production.up.railway.app/",
});

export default instance;
