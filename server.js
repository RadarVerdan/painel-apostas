const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// Rota raiz obrigatória
app.get("/", (req, res) => {
  res.status(200).send("Servidor OK");
});

// Healthcheck explícito
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Rodando na porta:", PORT);
});
