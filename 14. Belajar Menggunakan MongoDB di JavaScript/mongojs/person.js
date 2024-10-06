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

personSchema.pre("save", async function () {
  this.firstName = "catherina";
  this.lastName = "vallencia";
  console.log("persimpan dalam menyimpan data");
});
personSchema.post("save", async function () {
  console.log("data berhasil disimpan");
});

const Person = mongoose.model("person", personSchema);

const person = new Person({
  firstName: "Oline",
  lastName: "Manuel",
});

person
  .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
