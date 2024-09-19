<template>
  <nav id="nav-bar">
    <div id="logo">MyBrand</div>
    <div id="toggle-button" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div :class="['nav-links', { active: menuActive }]">
      <router-link id="products-link" :to="{ name: 'product' }"
        >Product</router-link
      >
      <router-link id="cart-link" :to="{ name: 'cart' }">
        <button>Cart</button>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuActive: false, // untuk menandai apakah menu aktif atau tidak
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive; // Toggle menu
    },
  },
};
</script>

<style scoped>
/* Navbar container */
#nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 75px;
  background-color: #34495e;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Logo styling */
#logo {
  font-size: 24px;
  font-weight: bold;
  color: #ecf0f1;
  letter-spacing: 2px;
}

/* Toggle button styling (hamburger icon) */
#toggle-button {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  cursor: pointer;
}

#toggle-button span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: #ecf0f1;
}

/* Navigation links container */
.nav-links {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
}

/* Link styles */
.nav-links a {
  color: #ecf0f1;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  background-color: #41b883;
  border: none;
  border-radius: 8px;
}

#products-link {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid whitesmoke;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
}

/* Button styling for Cart */
button {
  background-color: #41b883;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #2ecc71;
  border-radius: 8px;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  #nav-bar {
    padding: 0 16px;
  }

  #toggle-button {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 75px;
    right: 0;
    background-color: #34495e;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 16px;
    display: none; /* Awalnya disembunyikan */
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    text-align: left;
  }

  button {
    width: 100%;
  }
}
</style>
