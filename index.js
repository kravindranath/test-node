//index.js
const express = require("express");
const app = express();
const process = require("process");
const port = 8080;

app.get("/", (req, res) => {
  const data = {
    message: "Hello, world!",
    status: "success",
    envName: process.env.NODE_ENV,
  };

  // Send JSON response
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
