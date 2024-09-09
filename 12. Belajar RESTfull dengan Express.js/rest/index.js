const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extends: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
  {
    username: "Michael",
    text: `Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way`,
  },
  {
    username: "Kelly",
    text: `I talk a lot, so I’ve learned to tune myself out`,
  },
  {
    username: "Kevin",
    text: `I JUST WANT TO LIE ON THE BEACH AND EAT HOT DOGS.`,
  },
  {
    username: "Dwight",
    text: `IDENTITY THEFT IS NOT A JOKE, JIM! MILLIONS OF FAMILIES SUFFER EVERY YEAR.`,
  },
  {
    username: "Ryan",
    text: `I’M SUCH A PERFECTIONIST THAT I'D KINDA RATHER NOT DO IT AT ALL THAN DO A CRAPPY VERSION.`,
  },
  {
    username: "Jim",
    text: `EVERYTHING I HAVE I OWE TO THIS JOB… THIS STUPID, WONDERFUL, BORING, AMAZING JOB.`,
  },
];

app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

app.get("/comments/create", (req, res) => {
  res.render("comments/create", { comments });
});

app.post("/comments", (req, res) => {
  const { username, text } = req.body;
  // comments.push({ ...comment });
  comments.push({ username, text });
  // res.send("it's works");
  res.redirect("/comments");
});

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
