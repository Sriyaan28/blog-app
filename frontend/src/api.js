import axios from "axios";

export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_URL || "https://blog-app-theta-ruby.vercel.app";
//export const BACKEND_BASE_URL = "http://localhost:4000"

export const api = axios.create({
  baseURL: BACKEND_BASE_URL,
  withCredentials: true,
});
