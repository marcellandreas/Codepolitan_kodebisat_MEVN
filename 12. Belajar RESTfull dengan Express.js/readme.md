### Memahami Perbedaan Method GET dan POST

| GET                                                                                | POST                                                             |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Digunakan untuk menarik/menerima data                                              | Digunakan untuk mengirim data ke server                          |
| Data dikirimkan melalui query string                                               | Data dikirim melalui **body**, bukan **query string**            |
| Informasi yang dikirim terlihat di URL                                             | Informasi yang dikirim tidak terlihat di URL                     |
| Jumlah data yang dikirim terbatas                                                  | Dapat mengirimkan data dengan ukuran yang lebih besar            |
| Tidak aman untuk mengirim data sensitif                                            | Lebih aman untuk mengirim data sensitif                          |
| Biasanya digunakan untuk mengambil data dari server (misalnya menampilkan halaman) | Biasanya digunakan untuk membuat atau memperbarui data di server |

### REST (Representational State Transfer)

sebuah arsitektur sistem terdistribusi sederhananya adalah panduan komunikasi data untuk CRUD antara clint dan server
