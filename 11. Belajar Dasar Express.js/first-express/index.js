const express = require("express");

const app = express();

app.use((req, res) => {
  console.log("we got request");
  console.dir(req);
  res.send("<b>marcell</b>");
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080");
});
