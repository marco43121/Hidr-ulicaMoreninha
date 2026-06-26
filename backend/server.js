
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

let pool = null;

if (process.env.DATABASE_URL) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
}

async function buscarTabela(nomeTabela) {
  if (!pool) return [];

  const resultado = await pool.query(
    `SELECT * FROM ${nomeTabela} ORDER BY id DESC`
  );

  return resultado.rows;
}

app.get("/api/transpaletes", async (req, res) => {
  try {
    const dados = await buscarTabela("transpaletes");
    res.json(dados);
  } catch (erro) {
    console.error(erro);
    res.json([]);
  }
});

app.get("/api/locacoes-paleteiras", async (req, res) => {
  try {
    const dados = await buscarTabela("locacoes_paleteiras");
    res.json(dados);
  } catch (erro) {
    console.error(erro);
    res.json([]);
  }
});

app.get("/api/galeria/reparo-hidraulico", async (req, res) => {
  try {
    const dados = await buscarTabela("reparo_hidraulico");
    res.json(dados);
  } catch (erro) {
    console.error(erro);
    res.json([]);
  }
});

app.get("/api/galeria/climatizacao", async (req, res) => {
  try {
    const dados = await buscarTabela("climatizacao");
    res.json(dados);
  } catch (erro) {
    console.error(erro);
    res.json([]);
  }
});

app.get("/api/galeria/rodas-rolamentos", async (req, res) => {
  try {
    const dados = await buscarTabela("rodas_rolamentos");
    res.json(dados);
  } catch (erro) {
    console.error(erro);
    res.json([]);
  }
});

module.exports = app;
