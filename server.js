const express = require("express");
const path = require("path");

const app = express();

// Railway usa a porta do ambiente (OBRIGATÓRIO)
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (se tiver css/js no futuro)
app.use(express.static(path.join(__dirname)));

// Rota principal: abre o index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log("Server ON na porta:", PORT);
});
