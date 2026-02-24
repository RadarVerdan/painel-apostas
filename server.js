const express = require("express");
const path = require("path");

const app = express();
const PORT = Number(process.env.PORT) || 8080;

// Servir arquivos estáticos (index.html etc.)
app.use(express.static(__dirname));

// Healthcheck (Railway gosta disso)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Rota principal: sempre manda o index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Se pedir qualquer outra rota, manda o index também (evita 404 quebrando front)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Rodando na porta:", PORT);
});
