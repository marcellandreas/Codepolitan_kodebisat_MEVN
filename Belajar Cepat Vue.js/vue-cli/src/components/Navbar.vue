<template>
  <nav
    class="navbar navbar-light bg-primary navbar-expand-lg fixed-top shadow-sm"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <p class="h2">my<span class="text-white">Store</span></p>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarResponsive">
        <div class="navbar-text ml-auto d-flex align-items-center">
          <button
            v-if="cart.length >= 0 && !isCheckoutPage"
            class="btn btn-success btn-sm mr-2"
            @click="$emit('toggle-slide')"
            title="Toggle View"
          >
            <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
          </button>

          <div class="dropdown" v-if="cart.length > 0 && !isCheckoutPage">
            <button
              class="btn btn-success btn-sm dropdown-toggle"
              id="dropdownCart"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="badge badge-pill badge-light">{{ cartQty }}</span>
              <font-awesome-icon
                icon="shopping-cart"
                class="mx-2"
              ></font-awesome-icon>
              <pricee :value="Number(cartTotal)"></pricee>
            </button>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownCart"
            >
              <h6 class="dropdown-header">Keranjang Belanja</h6>
              <div v-for="(item, index) in cart" :key="index">
                <div
                  class="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span>
                    <span
                      class="badge badge-pill badge-warning align-text-top mr-1"
                      >{{ item.qty }}</span
                    >
                    {{ item.product.name }}
                  </span>
                  <span class="font-weight-bold">{{
                    (item.qty * item.product.price) | currencyFormat
                  }}</span>
                  <a
                    href="#"
                    class="badge badge-danger text-white ml-2"
                    @click.stop="$emit('delete-item', index)"
                    >-</a
                  >
                </div>
                <div class="dropdown-divider"></div>
              </div>
              <router-link
                class="btn btn-sm btn-outline-info text-dark float-right"
                to="/checkout"
                >Go to Checkout
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Pricee from "./Pricee.vue";

export default {
  name: "navbar-pre",
  components: {
    FontAwesomeIcon,
    Pricee,
  },
  props: ["cart", "cartQty", "cartTotal"],
  filters: {
    currencyFormat: function (value) {
      return "Rp" + Number.parseFloat(value).toFixed(2);
    },
  },
  computed: {
    isCheckoutPage() {
      return this.$route.path === "/checkout";
    },
  },
};
</script>

<style>
.navbar-brand img {
  height: 40px;
  width: auto;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=UTF8,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba%288, 8, 8, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-text .btn {
  margin-right: 10px;
}

.dropdown-menu {
  width: 300px;
}

.dropdown-item span {
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 767.98px) {
  .navbar-text {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-text .btn {
    margin-bottom: 10px;
  }

  .dropdown-menu {
    width: auto;
  }
}
</style>
