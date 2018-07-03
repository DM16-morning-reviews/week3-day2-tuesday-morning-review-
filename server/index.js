const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const port = 3001;

let characters = [];

app.use(bodyParser());

axios.get("https://swapi.co/api/people").then(res => {
  characters = res.data.results;
});

app.listen(port, () => {
  console.log(`Port is running on: ${port}`);
});
