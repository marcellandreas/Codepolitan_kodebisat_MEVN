const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");
const app = express();
const User = require("./models/user");

mongoose
  .connect("mongodb://127.0.0.1/auth-demo")
  .then(() => {
    console.log("terhubung ke database");
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    secret: "notasecreet",
    resave: false,
    saveUninitialized: false,
  })
);

const auth = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByCredentials(username, password);
  if (user) {
    req.session.user_id = user._id;
    res.redirect("/admin");
  } else {
    res.redirect("/login");
  }
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  //   const hastedPassword = bcrypt.hashSync(password, 10);

  //   const user = new User({
  //     username,
  //     password: hastedPassword,
  //   });
  const user = new User({ username, password });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/");
  //   res.send(req.body);
});

app.post("/logout", auth, (req, res) => {
  //   req.session.user_id = null;
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

app.get("/admin", auth, (req, res) => {
  //   res.send("Halaman Admin hanya bisa diakses ketika user adalah admin");
  res.render("admin");
});

app.get("/profile/settings", auth, (req, res) => {
  res.send("Profile Settings: " + req.session.user_id);
});

app.listen(3000, () => {
  console.log("app listening on port http://localhost:3000");
});
