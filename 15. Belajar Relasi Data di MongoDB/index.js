const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/relation_db")
  .then((res) => {
    console.log("terkoneksi dengan mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

userSchema = new mongoose.Schema({
  name: String,
  addresses: [
    {
      _id: false,
      street: String,
      city: String,
      country: String,
    },
  ],
});

const User = mongoose.model("user", userSchema);

// Relasi Data One To Few
// const makeUser = async () => {
//   const user = new User({
//     name: "JOhn Doe",
//   });

//   user.addresses.push({
//     street: "Jalan Raya Jakarta",
//     city: "Jakarta",
//     country: "Indonesia",
//   });

//   const res = await user.save();

//   return res;
// };

// makeUser();

// const addAddress = async (id) => {
//   const user = await User.findById(id);
//   user.addresses.push({
//     street: "Jalan Sudirman",
//     city: "Surabaya",
//     country: "Indonesia",
//   });

//   return await user.save();
// };

// addAddress("66e5c1d63075c4ddda7b3fd1");
