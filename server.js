const express = require("express");
const path = require("path");

const app = express();

// Railway passa a porta em process.env.PORT
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Rodando na porta:", PORT);
});
