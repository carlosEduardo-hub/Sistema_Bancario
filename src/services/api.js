import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createSession = async (email, password) => {
  return api.post("/sessions", { email, password });
};

export const registerUser = async (name, email, password) => {
  return api.post("/register", { name, email, password });
};

export const getUsers = async () => {
  return api.get("/users");
};
