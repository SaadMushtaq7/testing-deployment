const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/api", (req, res) => {
  res.send("This is to test if all the paths are deployed correctly");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

module.exports = app;