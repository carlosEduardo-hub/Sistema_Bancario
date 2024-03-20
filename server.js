const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.use(cors());

// Chave secreta para assinar o token JWT
const secretKey = "venda_mais"; // Manter em segredo,só está aqui para fins de demonstração

// Simulação de usuários
const users = [
  { id: 1, email: "usuario1@example.com", password: "senha123" },
  { id: 2, email: "usuario2@example.com", password: "senha456" }
];

// Endpoint para autenticação
app.post("/api/sessions", (req, res) => {
  const { email, password } = req.body;

  // Verifica se existe um usuário com o email e senha fornecidos
  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    return res.status(401).json({ error: "Credenciais inválidas" });
  }

  // Gera o token JWT com o ID do usuário
  const token = jwt.sign({ userId: user.id }, secretKey);

  // Retorna informações do usuário e o token JWT
  res.json({ user: { id: user.id, email: user.email }, token });
});

// Endpoint para obter usuários (simulação)
app.get("/api/users", (req, res) => {
  // Retorna todos os usuários (simulação)
  res.json(users.map(user => ({ id: user.id, email: user.email })));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
