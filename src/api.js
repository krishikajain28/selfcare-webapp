// placeholder axios instance (for when you add a backend later)
import axios from "axios";
const base = import.meta.env.VITE_API_BASE || "http://localhost:5000";
const api = axios.create({
  baseURL: base,
  headers: { "Content-Type": "application/json" },
});
export default api;
