# Membuat Skema Dan Model Mongoose

```javascript
const mongoose = require("mongoose");
```

Di sini, `mongoose` dipanggil ke dalam proyek. Mongoose itu semacam alat yang kita pakai buat ngatur data ke `MongoDB`, jadi dia memudahkan kita bikin dan pakai database.

```javascript
mongoose
  .connect("mongodb://127.0.0.1:27017/movie_db")
  .then(() => {
    console.log("terkoneksi dengan mongoDB");
  })
  .catch((err) => {
    console.log("belum terkoneksi dengan mongoDB", err);
  });
```

- Nah, di sini kita nyambungin aplikasi ke MongoDB. URL `mongodb://127.0.0.1:27017/movie_db` itu petunjuk tempat MongoDB ada (localhost di port 27017), dan kita pakai database yang namanya `movie_db`.
- Kalau sukses terkoneksi, program bakal ngasih pesan "terkoneksi dengan mongoDB". Kalau gagal, bakal muncul pesan error "belum terkoneksi dengan mongoDB".

```javascript
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  director: String,
});
```

Di sini kita bikin "cetakan" atau skema untuk data film yang mau disimpan di database. Jadi setiap film harus punya judul (`title`), tahun (`year`), skor (`score`), dan nama sutradara (`director`). Tiap-tiap properti juga punya tipe data yang sudah ditentukan, misalnya `title` harus berupa `String`, dan `year` berupa `Number`.

```javascript
const Movie = mongoose.model("Movie", movieSchema);
```

Ini kita bikin model namanya `Movie` yang pakai cetakan/skema `movieSchema` tadi. Model ini yang nanti dipakai buat berinteraksi dengan koleksi data di database MongoDB.

```javascript
const movie = new Movie({
  title: "kisah online",
  year: 2025,
  score: 9.8,
  director: "Catherina Vallencia",
});
```

kita buat contoh data untuk movie yang telah di buat

```javascript
movie.save();
```

Di sini kita simpan data film tadi ke MongoDB, jadi nanti bakal disimpan di database `movie_db` di koleksi `movies`.

```javascript
console.log(movie);
```

buat nge-print data film yang baru kita buat tadi ke layar`.

###

```javascript
Movie.find({ year: { $gt: 2018 } })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
```

```javascript
Movie.find({ year: { $gt: 2018 }, genre: "Drama" })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
```

```javascript
Movie.findOne({ _id: "66e27d2d19db492fb7e705e4" })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
```

## delete SYNSTAX

```javascript
Movie.deleteOne({ title: "Avengers: Infinity War" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

```javascript
Movie.deleteMany({ title: "Avengers: Infinity War" })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

```javascript
Movie.findByIdAndDelete("66e27d2e19db492fb7e705e6")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```
