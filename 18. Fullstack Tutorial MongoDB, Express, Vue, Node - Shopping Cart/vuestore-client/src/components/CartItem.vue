<template>
  <div class="product-container">
    <img :src="item.imageUrl" :alt="item.name" class="product-image" />

    <div class="details-wrap">
      <h3>{{ item.name }}</h3>
      <p class="price">Rp. {{ item.price }}</p>
    </div>

    <button class="remove-button">Remove</button>
  </div>
</template>

<script>
export default {
  props: ["cartItem"],
};
</script>

<style scoped>
/* Product container */
.product-container {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.2s ease;
}

.product-container:hover {
  background-color: #f9f9f9;
}

/* Product image */
.product-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

/* Product details */
.details-wrap {
  flex-grow: 2;
  padding: 0 16px;
}

h3 {
  font-size: 18px;
  margin: 0 0 8px 0;
}

.price {
  font-size: 16px;
  color: #27ae60;
}

/* Remove button */
.remove-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #c0392b;
}
</style>
