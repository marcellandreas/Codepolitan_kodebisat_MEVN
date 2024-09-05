<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Navigation />
  <main>
    <RouterView />
  </main>
</template>
