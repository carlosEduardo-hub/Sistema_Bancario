import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import "./styles.css";
import { Link } from "react-router-dom";


const RegisterPage = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao cadastrar");
    }
  };

  return (
    <div id="register">
      <h1 id="heading">Venda Main Bank</h1>
      <form onSubmit={handleSubmit} className="form">
        <p>Cadastro</p>
        <div className="field">
          <input
            placeholder="Nome"
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            type="text" />
        </div>
        <div className="field">
          <input
            placeholder="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            type="text" />
        </div>
        <div className="field">
          <input
            placeholder="Password"
            value={password}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            type="password" />
        </div>
        <div className="btn">
          <button type="submit" className="button">Cadastrar</button>
          <span>Já possui uma conta? Faça o <Link className="link" to="/login">Login</Link></span>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
// {/* <form onSubmit={handleSubmit}>
//   <input
//     type="text"
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//     placeholder="Nome"
//   />
//   <input
//     type="email"
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//     placeholder="Email"
//   />
//   <input
//     type="password"
//     value={password}
//     onChange={(e) => setPassword(e.target.value)}
//     placeholder="Senha"
//   />
//   <button type="submit">Registrar</button>
// </form> */}