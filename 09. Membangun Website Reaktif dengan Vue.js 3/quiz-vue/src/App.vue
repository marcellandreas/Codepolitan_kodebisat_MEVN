<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
html,
body {
  background-color: #191414; /* Hitam */
  color: #ffffff; /* Putih untuk teks default */
  margin: 0;
  padding: 0;
  height: 100%;
}

main {
  max-width: 100%;
  margin: 0 auto;
  background-color: #191414;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

h1,
h2,
h3,
p {
  color: #ffffff;
}
</style>
