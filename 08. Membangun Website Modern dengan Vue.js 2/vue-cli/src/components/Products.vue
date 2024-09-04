<template>
  <div>
    <Navbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle-slide="toggleSlider"
      @delete-item="deleteItem"
    ></Navbar>
    <PriceSlider
      class="pt-5 container m-auto"
      :sliderStatus="sliderStatus"
    ></PriceSlider>

    <ProductsList
      :products="products"
      :maximum="maximum"
      @add-item="addItem"
    ></ProductsList>
    <Footer class="mt-5"></Footer>
  </div>
</template>

<script>
import ProductsList from "./ProductsList.vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import PriceSlider from "./PriceSlider.vue";
export default {
  name: "products-pre",
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
    "sliderState",
  ],
  components: {
    ProductsList,
    PriceSlider,
    Navbar,
    Footer,
  },
  methods: {
    toggleSlider: function () {
      this.$emit("toggle");
    },
    addItem: function (item) {
      this.$emit("add", item);
    },
    deleteItem: function (index) {
      this.$emit("delete", index);
    },
  },
};
</script>
