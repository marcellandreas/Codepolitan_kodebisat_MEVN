<template>
  <div class="w-100 min-vh-100 row gap pt-5 m-auto">
    <div
      class="col-12 col-sm-6 col-md-4 col-lg-3 card-why card bg-info p-0 m-0 position-relative"
      v-for="(item, index) in showItem"
      :key="item.id"
      :data-index="index"
    >
      <div class="position-absolute button-plus-product">
        <button class="btn btn-info" @click="$emit('add-item', item)">+</button>
      </div>
      <div class="image-top">
        <img :src="item.image" :alt="item.name" class="" />
      </div>
      <div class="card-body card-why position-relative">
        <h3 class="text-dark text-body h-25">{{ item.name }}</h3>
        <p class="mb-0">{{ item.description }}</p>
        <div class="position-absolute h5 price-tag">
          <Pricee :value="Number(item.price)"></Pricee>
        </div>
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

<style>
.bg-danger {
  background-color: #dc3545;
}

p {
  margin: 0 !important;
  padding: 0 !important;
}

.w-100 {
  width: 100%;
}

.min-vh-100 {
  min-height: 100vh;
}

.gap {
  gap: 8px;
  justify-content: center;
}

.card-why {
  min-height: 300px !important;
  display: flex;
  flex-direction: column;
  padding: 10px !important;
  margin: 0 !important;
  border-radius: 20px !important;
}

.image-top {
  border-radius: 20px 20px 0 0;
  min-height: 300px;
  background: #fff;
  background-size: cover;
  background-position: center center;
}

.image-top img {
  height: 100%;
  width: 100%;
  border-radius: 20px 20px 0 0;
}

.button-plus-product {
  right: 12px;
  top: 12px;
  position: absolute;
}
.button-plus-product .btn {
  border-radius: 0 16px 0 0 !important;
}

.price-tag {
  bottom: 12px;
  padding: 4px;
  right: 12px;
  border-radius: 4px 4px 12px 4px;
  background: white;
}

@media (max-width: 768px) {
  .card-why {
    min-height: 250px;
    justify-content: center;
    align-items: center;
  }
  .gap {
    gap: 8px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .card-why {
    min-height: 280px;
  }
}
</style>
