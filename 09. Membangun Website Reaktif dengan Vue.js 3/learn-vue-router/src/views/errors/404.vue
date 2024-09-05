<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <h1 class="error-code">404</h1>
      <h2 class="error-message">Oops! Page Not Found</h2>
      <p class="error-description">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <router-link to="/" class="back-home-btn">Go Back to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f6f9;
}

.not-found-content {
  text-align: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.error-code {
  font-size: 120px;
  margin: 0;
  color: #ff6b6b;
}

.error-message {
  font-size: 36px;
  margin: 10px 0;
  color: #333;
}

.error-description {
  font-size: 18px;
  margin-bottom: 20px;
  color: #777;
}

.back-home-btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #3498db;
  border-radius: 5px;
  text-decoration: none;
}

.back-home-btn:hover {
  background-color: #2980b9;
}
</style>
