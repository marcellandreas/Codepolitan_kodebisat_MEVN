<template>
  <nav class="navbar">
    <div class="container-nav">
      <h1 class="navbar-title">My Memo App</h1>
      <button @click="$emit('toggleForm')" class="navbar-button">
        Add Memo
      </button>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  background-color: #141414;
  padding: 20px 0;
  color: white;
}

.container-nav {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-title {
  font-size: 24px;
  font-weight: bold;
}

.navbar-button {
  border: none;
  background: #e50914;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s ease;
}

.navbar-button:hover {
  background: #f40612;
}
</style>
