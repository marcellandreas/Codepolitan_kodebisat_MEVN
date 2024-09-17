<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>

    <div v-for="item in cartItems" :key="item.id" class="product-container">
      <img :src="item.imageUrl" :alt="item.name" class="product-image" />

      <div class="details-wrap">
        <h3>{{ item.name }}</h3>
        <p class="price">Rp. {{ item.price }}</p>
      </div>

      <button class="remove-button">Remove</button>
    </div>

    <div id="total-section">
      <div id="total-price">Total: Rp. {{ totalPrice }}</div>
      <button id="checkout-button">Checkout</button>
    </div>
  </div>
</template>

<script>
import { cartItems } from "../../data-seed";

export default {
  data() {
    return {
      cartItems,
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
};
</script>

<style scoped>
/* General styling */
body {
  font-family: "Roboto", sans-serif;
  background-color: #f4f4f9;
  margin: 0;
  padding: 0;
  color: #333;
}

/* Cart Page styling */
#page-wrap {
  max-width: 800px;
  margin: 24px auto;
  padding: 16px;
  background-color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Title */
h1 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 24px;
  border-bottom: 2px solid #41b883;
  padding-bottom: 12px;
  color: #41b883;
}

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

/* Total and Checkout */
#total-section {
  margin-top: 24px;
  text-align: right;
}

#total-price {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}

#checkout-button {
  width: 100%;
  background-color: #41b883;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#checkout-button:hover {
  background-color: #2e8b57;
}

/* Responsive Design */
@media screen and (max-width: 600px) {
  .product-container {
    flex-direction: column;
    text-align: center;
  }

  .details-wrap {
    padding: 8px 0;
  }

  .product-image {
    width: 80px;
    height: 80px;
  }

  #checkout-button {
    font-size: 14px;
  }

  h1 {
    font-size: 24px;
  }
}
</style>
