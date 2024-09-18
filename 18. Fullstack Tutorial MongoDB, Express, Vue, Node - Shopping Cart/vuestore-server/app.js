const express = require("express");

const app = express();
const path = require("path");

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static(path.join(__dirname, "./public/img")));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //  useFindAndModify: false,
  })
  .then((res) => {
    console.log("Database conneted!!");
  })
  .catch((err) => {
    console.log("Cannot connect to database!!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Selamat Datang di server VueStore",
  });
});

require("./app/routes/product.route")(app);
require("./app/routes/order.route")(app);

app.listen(PORT, () => {
  console.log(`Server is running on HTTP://localhost:${PORT}`);
});
