const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Selamat Datang di server VueStore",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on HTTP://localhost:${PORT}`);
});
