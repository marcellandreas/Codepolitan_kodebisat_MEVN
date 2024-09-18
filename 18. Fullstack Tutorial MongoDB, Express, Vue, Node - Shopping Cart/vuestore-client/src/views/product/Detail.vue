<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img :src="product.imageUrl" :alt="product.name" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3 id="price">Rp. {{ product.price }}</h3>
      <p class="rating">⭐ {{ product.averageRating }}</p>
      <button id="add-to-cart">Add to Cart</button>
      <p class="description">
        {{ product.description }}
      </p>
    </div>
  </div>
  <NotFound v-else />
</template>

<script>
import { products } from "../../data-seed";
import NotFound from "../errors/404.vue";

export default {
  components: { NotFound },

  data() {
    return {
      products,
    };
  },

  computed: {
    product() {
      return this.products.find((p) => {
        return p.id === this.$route.params.id;
      });
    },
  },
  mounted() {
    console.log(this.products);
  },
};
</script>

<style scoped>
/* Body reset and modern typography */
body {
  font-family: "Roboto", sans-serif;
  background-color: #f4f4f9;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

/* Container styling */
#page-wrap {
  margin: 24px auto;
  padding: 24px;
  max-width: 800px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Image wrapper */
#img-wrap {
  text-align: center;
  margin-bottom: 4px;
}

img {
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
  transform: scale(1.5);
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}

/* Product details */
#product-details {
  padding: 16px;
  position: relative;
}

h1 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
}

.rating {
  margin-top: -8px;
  font-size: 16px;
  color: #f5a623;
}

#price {
  font-size: 20px;
  color: #2c3e50;
  font-weight: bold;
  position: absolute;
  top: 24px;
  right: 16px;
}

.description {
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.6;
}

/* Add to cart button */
#add-to-cart {
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
  margin-bottom: 16px;
}

#add-to-cart:hover {
  background-color: #2ecc71;
}

/* Responsive Design */
@media screen and (max-width: 600px) {
  #page-wrap {
    padding: 16px;
  }

  h1 {
    font-size: 20px;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  #price {
    top: 12px;
    right: 12px;
    font-size: 18px;
  }

  #add-to-cart {
    font-size: 14px;
  }
}
</style>
