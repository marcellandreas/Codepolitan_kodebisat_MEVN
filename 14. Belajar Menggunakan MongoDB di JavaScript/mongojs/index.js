const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")
  .then(() => {
    console.log("terkoneksi dengan mongoDB");
  })
  .catch((err) => {
    console.log("belum terkoneksi dengan mongoDB", err);
  });

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  director: String,
});

const Movie = mongoose.model("Movie", movieSchema);

const movie = new Movie({
  title: "kisah online",
  year: 2025,
  score: 9.8,
  director: "Catherina Vallencia",
});

movie.save();

console.log(movie);
