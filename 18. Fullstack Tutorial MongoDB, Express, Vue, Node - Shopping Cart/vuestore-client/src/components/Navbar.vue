<template>
  <nav id="nav-bar">
    <div id="logo">MyBrand</div>
    <div id="nav-links">
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
export default {};
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

/* Navigation links container */
#nav-links {
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
}

/* Link styles */
#nav-links a {
  color: #ecf0f1;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

#nav-links a:hover {
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
@media screen and (max-width: 600px) {
  #nav-bar {
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }

  #nav-links {
    margin-top: 16px;
    flex-direction: column;
    gap: 16px;
  }

  button {
    width: 100%;
  }
}
</style>
