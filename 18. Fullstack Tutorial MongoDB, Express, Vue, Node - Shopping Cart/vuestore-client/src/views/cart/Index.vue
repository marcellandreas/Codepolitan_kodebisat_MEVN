<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <ItemCart
      v-for="cartItem in cartItems"
      :key="cartItem.id"
      :cartItem="cartItem"
    />
    <div id="total-section">
      <div id="total-price">Total: Rp. {{ totalPrice }}</div>
      <button id="checkout-button">Checkout</button>
    </div>
  </div>
</template>

<script>
import { cartItems } from "../../data-seed";
import ItemCart from "../../components/CartItem.vue";

export default {
  components: { ItemCart },
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
