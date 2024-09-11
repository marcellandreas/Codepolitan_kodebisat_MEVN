# Belajar Menggunakan MongoDB di JavaScript

## Apa itu MOngoose (Library that connect you to mongoDB from JavaScript)

`Mongoose` adalah sebuah `Object Data Modeling (ODM)` library untuk `Node.js` yang digunakan dengan MongoDB. Mongoose menyediakan sebuah skema untuk data yang disimpan di MongoDB dan membuat interaksi dengan database menjadi lebih mudah dan terstruktur. Berikut adalah beberapa fitur dan kegunaan Mongoose:

1. **Skema dan Model:**

- Mongoose memungkinkan Anda mendefinisikan skema untuk data yang disimpan di MongoDB, yang membantu memastikan data Anda konsisten dan valid. Skema ini juga mendefinisikan model yang dapat digunakan untuk membuat, membaca, memperbarui, dan menghapus dokumen.

2. **Validasi:**

- Mongoose menyediakan mekanisme validasi untuk memastikan bahwa data yang disimpan sesuai dengan skema yang ditentukan. Anda dapat menambahkan aturan validasi untuk berbagai jenis data, seperti string, angka, dan tanggal.

3. **Middleware:**

Mongoose memungkinkan Anda menggunakan middleware (pre dan post hooks) yang bisa dijalankan sebelum atau setelah operasi tertentu seperti save, find, dan remove. Ini memungkinkan Anda untuk melakukan operasi tambahan seperti logika bisnis atau manipulasi data.

4. **Query Building:**

Mongoose mempermudah pembuatan query yang kompleks dengan metode chaining dan dukungan untuk operasi MongoDB seperti agregasi dan pencarian.

5. **Population:**

Mongoose menyediakan fitur population yang memungkinkan Anda untuk melakukan join antar koleksi, yaitu mengisi referensi dokumen yang ada dengan data dari dokumen lain.
Instance Methods dan Static Methods:

Anda dapat menambahkan metode khusus pada skema untuk instance atau model, sehingga memperluas fungsionalitas yang tersedia untuk dokumen atau model Anda.

`Contoh penggunaan dasar Mongoose:`

```javascript
const mongoose = require("mongoose");

// Koneksi ke database MongoDB
mongoose.connect("mongodb://localhost/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definisi skema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: Number,
});

// Definisi model
const User = mongoose.model("User", userSchema);

// Membuat dokumen baru
const newUser = new User({
  name: "John Doe",
  email: "johndoe@example.com",
  age: 30,
});

// Menyimpan dokumen ke database
newUser
  .save()
  .then(() => console.log("User saved!"))
  .catch((err) => console.error("Error:", err));
```
