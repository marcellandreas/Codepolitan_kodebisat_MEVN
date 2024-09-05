<script setup>
import { useRoute, RouterView } from "vue-router";
import products from "../data/products.json";

const router = useRoute();

const product = products.find(
  (product) => product.id === parseInt(router.params.ids)
);
</script>

<template>
  <main class="product-container">
    <h1>Product Details</h1>
    <div v-if="product" class="product-card">
      <h2>{{ product.name }}</h2>
      <p><strong>Price:</strong> ${{ product.price }}</p>
      <p><strong>Year:</strong> {{ product.year }}</p>
    </div>
    <div v-else>
      <p>Product not found.</p>
    </div>
    <RouterView />
  </main>
</template>

<style scoped>
.product-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.product-card {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-card h2 {
  margin-bottom: 15px;
  color: #333;
}

.product-card p {
  margin: 10px 0;
  color: #555;
}

.product-card p strong {
  color: #000;
}
</style>
