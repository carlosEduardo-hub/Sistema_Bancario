import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

import "./styles.css";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", {email, password });

    login(email, password);
  };

  return (
    <div id="login">
      <h1 className="title">Venda Mais Bank</h1>
      <form className="form" onSubmit={handleSubmit}>
        <p>Login</p>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="password">Senha</label>
          <input
            required
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button className="button" type="submit">Entrar</button>
          <span>Não tem conta? Faça o <Link className="link" to="/">Cadastro</Link></span>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
