//index.js
const express = require("express");
const app = express();
const process = require("process");
const port = 3000;

app.get("/", (req, res) => {
  res.send(`Hello! - ${process.versions.node}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
