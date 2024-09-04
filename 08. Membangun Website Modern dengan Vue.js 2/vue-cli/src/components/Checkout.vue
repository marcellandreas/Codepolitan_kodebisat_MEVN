<template>
  <div>
    <Navbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle-slide="toggleSlider"
      @delete-item="deleteItem"
    ></Navbar>
    <div class="container pt-5">
      <h1>Checkout</h1>
      <section class="section-not-cart" v-if="!cart.length">
        Tidak ada barang yang dicheckout
      </section>
      <table class="table table-hover section-cart" v-if="cart.length">
        <caption class="text-right h3">
          <b>Total:</b>
          <Pricee
            class="d-block text-success font-weight-light"
            :value="Number(cartTotal)"
          ></Pricee>
        </caption>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Item</th>
            <th scope="col" class="text-center">Qty</th>
            <th scope="col" class="text-right">Price</th>
            <th scope="col" class="text-right">Sub-total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cart" :key="item.product.id">
            <td class="text-center">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button
                  @click="$emit('add', item.product)"
                  class="btn btn-info"
                >
                  +
                </button>
                <button
                  @click="$emit('delete', index)"
                  class="btn btn-outline-info"
                >
                  -
                </button>
              </div>
            </td>
            <th scope="row">{{ item.product.name }}</th>
            <td class="text-center">{{ item.qty }}</td>
            <td class="text-right">
              {{ Number(item.product.price) }}
            </td>
            <td class="text-right">
              {{ Number(item.product.price * item.qty) }}
            </td>
          </tr>
        </tbody>
      </table>
      <router-link class="btn btn-sm btn-outline-info text-dark" to="/"
        >Back to Menu</router-link
      >
    </div>
    <Footer class="mt-5"></Footer>
  </div>
</template>

<script>
import Pricee from "./Pricee.vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
export default {
  name: "checkout-pre",
  props: ["cart", "cartTotal"],
  components: {
    Pricee,
    Navbar,
    Footer,
  },
};
</script>

<style>
.section-not-cart {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 20px 0 50px 0;
  margin-bottom: 12px;
}

.section-cart {
  min-height: 50vh;
}
</style>
