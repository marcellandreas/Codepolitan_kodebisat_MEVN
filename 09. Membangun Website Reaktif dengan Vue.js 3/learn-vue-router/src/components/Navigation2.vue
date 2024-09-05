<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <a href="/">MyRouterApp</a>
    </div>
    <div class="navbar-links">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </div>
    <div class="navbar-toggle" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <div :class="['navbar-menu', { open: isMenuOpen }]">
      <a href="/" @click="toggleMenu">Home</a>
      <a href="/about" @click="toggleMenu">About</a>
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

.navbar-logo a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5em;
}

.navbar-links a {
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

.navbar-menu a {
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
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
