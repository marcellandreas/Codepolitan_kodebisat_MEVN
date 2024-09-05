<script setup>
import products from "../data/products.json";
import { RouterLink } from "vue-router";
</script>

<template>
  <main>
    <h1>Home</h1>
    <div class="products">
      <div class="product-card" v-for="product in products" :key="product.id">
        <RouterLink :to="`/products/${product.id}`">
          <h2>{{ product.name }}</h2>
          <p>Price: ${{ product.price }}</p>
          <p>Year: {{ product.year }}</p>
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.product-card h2 {
  font-size: 1.5em;
  margin: 10px 0;
  color: #333;
}

.product-card p {
  color: #666;
  margin: 5px 0;
}

.product-card a {
  text-decoration: none;
  color: inherit;
}
</style>
