const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")
  .then(() => {
    console.log("terkoneksi dengan mongoDB");
  })
  .catch((err) => {
    console.log("belum terkoneksi dengan mongoDB", err);
  });

const personSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
});

personSchema.virtual("fullName").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const Person = mongoose.model("person", personSchema);

const person = new Person({
  firstName: "Oline",
  lastName: "Manuel",
});

console.log(person.fullName, "a");
