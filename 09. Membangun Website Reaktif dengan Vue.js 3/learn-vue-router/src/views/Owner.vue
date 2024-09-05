<script setup>
import { useRoute } from "vue-router";
import products from "../data/products.json";

const router = useRoute();

const { owner } = products.find(
  (product) => product.id === parseInt(router.params.ids)
);
</script>

<template>
  <main class="product-container">
    <h1>Owner Details</h1>
    <p>{{ owner.name }}</p>
    <p>{{ owner.email }}</p>
  </main>
</template>
