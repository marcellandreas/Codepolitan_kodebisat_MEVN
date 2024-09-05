<!-- menggunakan fungsi Router Link -->
<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <RouterLink class="link-router" to="/">MyRouterApp</RouterLink>
    </div>
    <div class="navbar-links">
      <RouterLink active-class="active" class="link-router" to="/"
        >Home</RouterLink
      >
      <RouterLink active-class="active" class="link-router" to="/about"
        >About</RouterLink
      >
    </div>
    <div class="navbar-toggle" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <div :class="['navbar-menu', { open: isMenuOpen }]">
      <RouterLink
        active-class="active"
        class="link-router"
        to="/"
        @click="toggleMenu"
        >Home</RouterLink
      >
      <RouterLink
        active-class="active"
        class="link-router"
        to="/about"
        @click="toggleMenu"
        >About</RouterLink
      >
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    return { isMenuOpen, toggleMenu };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
}

.navbar-logo .link-router {
  color: #fff;
  text-decoration: none;
  font-size: 1.5em;
}

.navbar-links .link-router {
  margin: 0 15px;
  color: #fff;
  text-decoration: none;
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.navbar-toggle .bar {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 3px 0;
}

.navbar-menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 20px;
  background-color: #333;
  padding: 10px;
  border-radius: 5px;
}

.navbar-menu.open {
  display: flex;
}

.navbar-menu .link-router {
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
}

.active {
  font-weight: 900;
  color: white;
  background-color: cadetblue;
  padding: 8px;
  border-radius: 6px;
}

/* Media Queries untuk layar yang lebih kecil */
@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .navbar-toggle {
    display: flex;
  }
}
</style>
