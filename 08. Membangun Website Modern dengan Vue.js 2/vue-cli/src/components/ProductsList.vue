<template>
  <div class="w-100 min-vh-100 row gap pt-5 m-auto">
    <div
      class="col-12 col-sm-6 col-md-4 col-lg-3 card-why card bg-white shadow-sm p-0 m-0 position-relative"
      v-for="(item, index) in showItem"
      :key="item.id"
      :data-index="index"
    >
      <div class="image-top">
        <img :src="item.image" :alt="item.name" class="product-image" />
      </div>
      <div class="card-body position-relative">
        <h3 class="text-dark product-name">{{ item.name }}</h3>
        <p class="text-muted product-description">{{ item.description }}</p>
        <div class="price-tag">
          <Pricee :value="Number(item.price)"></Pricee>
        </div>
        <button class="btn btn-add-to-cart" @click="$emit('add-item', item)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Pricee from "./Pricee.vue";

export default {
  name: "products-list",
  components: {
    Pricee,
  },
  props: ["products", "maximum"],
  computed: {
    showItem: function () {
      let max = this.maximum;
      return this.products.filter(function (item) {
        return item.price <= max;
      });
    },
  },
  methods: {
    before: function (el) {
      el.className = "d-none";
    },
    enter: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    leave: function (el) {
      var delay = el.dataset.index * 100;
      setTimeout(function () {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    },
  },
};
</script>

<style scoped>
.w-100 {
  width: 100%;
}

.min-vh-100 {
  min-height: 100vh;
}

.gap {
  gap: 16px;
  justify-content: center;
}

.card-why {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
  padding: 16px;
  position: relative; /* Important for absolute positioning */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-why:hover {
  transform: scale(1.05); /* Membesar sedikit */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Efek bayangan */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px); /* Menggeser dari bawah */
  }
  to {
    opacity: 1;
    transform: translateY(0); /* Kembali ke posisi semula */
  }
}

.card-why {
  animation: fadeIn 0.5s ease forwards; /* Menggunakan animasi fadeIn */
}

.image-top {
  width: 100%;
  height: 200px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
  color: #333;
}

.product-description {
  font-size: 14px;
  color: #666;
  margin: 8px 0;
  display: -webkit-box; /* Untuk dukungan WebKit */
  -webkit-box-orient: vertical; /* Orientasi kotak vertikal */
  overflow: hidden; /* Sembunyikan overflow */
  -webkit-line-clamp: 2; /* Batasi menjadi 2 baris */
  text-overflow: ellipsis; /* Tampilkan ellipsis (...) */
}

.price-tag {
  font-weight: bold;
  color: #b12704;
  margin-top: auto;
}

.btn-add-to-cart {
  background-color: #ff9900;
  color: white;
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  border: none;
  width: 100%;
  position: absolute; /* Make the button stick to the bottom */
  bottom: 0; /* Align it to the bottom of the card */
  left: 0; /* Ensure full width */
  right: 0;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-add-to-cart:hover {
  background-color: #e68a00; /* Ganti warna saat hover */
  transform: translateY(-3px); /* Menggeser sedikit ke atas */
}

@media (max-width: 768px) {
  .card-why {
    min-height: 350px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .card-why {
    min-height: 370px;
  }
}
</style>
