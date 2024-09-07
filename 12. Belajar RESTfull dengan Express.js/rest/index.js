const express = require("express");

const app = express();

app.get("/order", (req, res) => {
  res.send("ini adalah request header response");
});

app.post("/order", (req, res) => {
  res.send("ini adalah request header response");
});

app.listen(8080, () => {
  console.log(`server is running in http://localhost:8080`);
});
