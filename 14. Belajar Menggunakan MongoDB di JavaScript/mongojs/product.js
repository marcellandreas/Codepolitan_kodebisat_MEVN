const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/ShopApp")
  .then(() => {
    console.log("terkoneksi dengan mongoDB");
  })
  .catch((err) => {
    console.log("belum terkoneksi dengan mongoDB", err);
  });

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    required: true,
    type: Number,
    min: 0,
  },
  color: {
    required: true,
    type: String,
  },
  // array
  size: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
    maxLength: 150,
  },
  condition: {
    type: String,
    enum: ["baru", "bekas"],
    default: "baru",
  },
  stock: {
    type: Number,
    required: true,
    min: [0, "nilai tidak boleh minus"],
  },
  // objek
  availability: {
    online: {
      type: Boolean,
      required: true,
    },
    offline: {
      type: Boolean,
      required: true,
    },
  },
});

productSchema.methods.outStock = function () {
  this.stock = 0;
  this.availability.online = false;
  this.availability.offline = false;
  return this.save();
};

productSchema.statics.closeStore = function () {
  return this.updateMany({
    stock: 0,
    "availability.online": false,
    "availability.offline": false,
  });
};

const Product = mongoose.model("Product", productSchema);

const changeStock = async (id) => {
  const foundProduct = await Product.findById(id);
  await foundProduct.outStock();
  console.log("berhasil diubah");
};

Product.closeStore()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// changeStock("66e2e524c5590d7afc98b85d");

Product.findOneAndUpdate(
  { name: "Kemeja Flanel" },
  {
    name: "Kemeja Flanel",
    brand: "Hollister",
    price: 1750000,
    color: "biru muda",
    size: ["S", "M", "L"],
    description:
      "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
    condition: "baru",
    stock: -25,
    availability: {
      online: true,
      offline: true,
    },
  },
  { new: true, runValidators: true }
)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.errors.stock.properties.message);
  });
// const tShirt = new Product({
//   name: "Kemeja Flanel",
//   brand: "Hollister",
//   price: 750000,
//   color: "biru muda",
//   size: ["S", "M", "L"],
//   description:
//     "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
//   condition: "baru",
//   stock: 25,
//   availability: {
//     online: true,
//     offline: true,
//   },
// });

// tShirt
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
