<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <router-link to="/">Go back to Home</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
.not-found h1 {
  font-size: 100px;
  margin-bottom: 20px;
}
.not-found p {
  font-size: 20px;
}
.not-found a {
  color: #42b983;
  text-decoration: none;
}
</style>
