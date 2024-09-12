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

// Movie.insertMany([
//   {
//     title: "Avengers: Infinity War",
//     genre: "Action",
//     director: "Anthony Russo, Joe Russo",
//     year: 2018,
//     rating: 8.4,
//   },
//   {
//     title: "222",
//     genre: "Action",
//     director: "Anthony Russo, Joe Russo",
//     year: 2018,
//     rating: 8.4,
//   },
//   {
//     title: "Joker",
//     genre: "Crime",
//     director: "Todd Phillips",
//     year: 2019,
//     rating: 8.4,
//   },
//   {
//     title: "Parasite",
//     genre: "Drama",
//     director: "Bong Joon Ho ",
//     year: 2019,
//     rating: 8.6,
//   },
//   {
//     title: "Spider-Man: Into the Spider-Verse",
//     genre: "Animation",
//     director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
//     year: 2018,
//     rating: 8.4,
//   },
// ])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.find({ year: { $gt: 2018 }, genre: "Drama" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// find by id

// Movie.findOne({ _id: "66e27d2d19db492fb7e705e4" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.findById("66e27d2d19db492fb7e705e4")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// update one
// Movie.updateMany({ title: "Parasite" }, { year: 2025 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.updateMany({ year: { $lt: 2019 } }, { year: 2025 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.findByIdAndUpdate(
//   "66e27d60288eb747fecf7cf5",
//   { title: "Joker 22" },
//   { new: true }
// )
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// MOvie delete

// Movie.deleteOne({ title: "Avengers: Infinity War" })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Movie.findByIdAndDelete("66e27d2e19db492fb7e705e6")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// movie.save();

// console.log(movie);
