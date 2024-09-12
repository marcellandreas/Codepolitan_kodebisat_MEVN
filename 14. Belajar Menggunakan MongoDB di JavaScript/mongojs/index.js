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

// const movie = new Movie({
//   title: "kisah online",
//   year: 2025,
//   score: 9.8,
//   director: "Catherina Vallencia",
// });

Movie.insertMany([
  {
    title: "Avengers: Infinity War",
    genre: "Action",
    director: "Anthony Russo, Joe Russo",
    year: 2018,
    rating: 8.4,
  },
  {
    title: "222",
    genre: "Action",
    director: "Anthony Russo, Joe Russo",
    year: 2018,
    rating: 8.4,
  },
  {
    title: "Joker",
    genre: "Crime",
    director: "Todd Phillips",
    year: 2019,
    rating: 8.4,
  },
  {
    title: "Parasite",
    genre: "Drama",
    director: "Bong Joon Ho ",
    year: 2019,
    rating: 8.6,
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animation",
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    year: 2018,
    rating: 8.4,
  },
])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// movie.save();

// console.log(movie);
