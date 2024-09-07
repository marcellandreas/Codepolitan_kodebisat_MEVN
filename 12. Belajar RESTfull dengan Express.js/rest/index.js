const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: true }));

app.get("/order", (req, res) => {
  res.send("ini adalah request header response");
});

app.post("/order", (req, res) => {
  console.log(req.body);
  const { item, qty } = req.body;
  res.send(`Item: ${item} dengan jumlah ${qty}`);
  res.send("ini adalah request header response");
});

app.listen(8080, () => {
  console.log(`server is running in http://localhost:8080`);
});
