import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession, registerUser } from "../services/api";
import { toast } from "sonner";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await createSession(email, password);
  
      console.log("login", response.data);
  
      const loggedUser = response.data.user;
      const token = response.data.token;
  
      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);
  
      api.defaults.headers.Authorization = `Bearer ${token}`;
  
      setUser(loggedUser);
      navigate("/dashboard");
      toast.success("Login realizado com sucesso");
    } catch (error) {
      console.error("Erro no login:", error);
      if (error.response && error.response.data && error.response.data.error) {
        toast.error('Erro no Login!');
      } else {
        alert("Erro no login. Por favor, tente novamente mais tarde.");
      }
    }
  };
  

  const logout = () => {
    console.log("logout");

    localStorage.removeItem("user");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/login");
  };

  const register = async (name, email, password) => {
    try {
      const response = await registerUser(name, email, password);
      console.log("Cadastro bem-sucedido:", response.data);
      navigate("/login"); // Redirecionar para a página de login após o registro bem-sucedido
      toast.success("Cadastro bem-sucedido!");
    } catch (error) {
      console.error("Erro ao registrar:", error);
      toast.error('Erro ao cadastrar!');
    }
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
};
