const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/relation_db")
  .then((res) => {
    console.log("terkoneksi dengan mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["spring", "summer", "fall", "winter"],
  },
});

const farmSchema = new mongoose.Schema({
  name: String,
  city: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
  ],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// Product.insertMany([
//   {
//     name: "Mellon",
//     price: 9,
//     season: "summer",
//   },
//   {
//     name: "Watermellon",
//     price: 11,
//     season: "summer",
//   },
//   {
//     name: "Kiwi",
//     price: 12,
//     season: "summer",
//   },
// ]);

// const makeFarm = async () => {
//   const farm = new Farm({
//     name: "farm",
//     city: "anytown",
//   });

//   const melon = await Product.findOne({ name: "Watermellon" });
//   farm.products.push(melon);
//   await farm.save();
//   console.log(farm);
// };

// makeFarm();

const addProduct = async (id) => {
  const farm = await Farm.findById(id);
  const Watermellon = await Product.findOne({ name: "Watermellon" });
  farm.products.push(Watermellon);
  await farm.save();

  console.log(farm);
};

addProduct("66e70525124f41a42bd65956");
