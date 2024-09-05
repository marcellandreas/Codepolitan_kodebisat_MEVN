<script setup>
const { quizQuestionsLength, numberOfCorrectAnswer } = defineProps([
  "quizQuestionsLength",
  "numberOfCorrectAnswer",
]);
</script>

<template>
  <section class="results">
    <p>Score:</p>
    <h1>{{ numberOfCorrectAnswer }}/{{ quizQuestionsLength }}</h1>
    <RouterLink to="/" class="btn">Go Back</RouterLink>
  </section>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 50px 20px;
  background-color: #f0f4f8;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 50px auto;
}

p {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
  font-family: "Arial", sans-serif;
}

h1 {
  font-size: 72px;
  color: #4caf50;
  margin-bottom: 30px;
  font-family: "Roboto", sans-serif;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  font-family: "Arial", sans-serif;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #45a049;
}

@media (max-width: 600px) {
  .results {
    padding: 30px 15px;
  }

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 20px;
  }

  .btn {
    font-size: 16px;
  }
}
</style>
