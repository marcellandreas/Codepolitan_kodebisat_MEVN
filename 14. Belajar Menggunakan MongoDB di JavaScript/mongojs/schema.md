# Mengenai Schema

`schema` adalah struktur yang mendefinisikan bentuk dari dokumen yang akan disimpan di dalam koleksi `MongoDB`

## Tipe Data yang Didukung dalam Mongoose Schema

Beberapa tipe data yang umum digunakan di Mongoose Schema:

- **String**: Untuk data teks.
- **Number:** Untuk data numerik.
- **Date**: Untuk data tanggal dan waktu.
- **Boolean**: Untuk nilai `true` atau `false`.
- **Array**: Untuk menyimpan beberapa nilai dalam satu field.
- **ObjectId**: Untuk mereferensikan dokumen lain di dalam MongoDB.
- **Mixed**: Untuk tipe data yang dapat berupa apa saja (tidak ditentukan secara khusus).

```javascript
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
    min: 0,
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
```
