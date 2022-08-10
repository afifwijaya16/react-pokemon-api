const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/", async (req, res) => {
  res.send("hello word");
});

app.get("/list", async (req, res) => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
  // console.log(data.results);
  res.send(data.results);
});

app.get("/detail/:id", async (req, res) => {
  const pokeId = req.params.id;
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokeId}`
  );
  console.log(data);
  res.send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
