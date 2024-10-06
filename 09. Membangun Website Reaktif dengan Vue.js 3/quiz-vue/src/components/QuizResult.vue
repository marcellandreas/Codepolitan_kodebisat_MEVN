<script setup>
const { quizQuestionsLength, numberOfCorrectAnswer } = defineProps([
  "quizQuestionsLength",
  "numberOfCorrectAnswer",
]);
</script>

<template>
  <section class="results">
    <p class="score-text">Score:</p>
    <h1 class="score">{{ numberOfCorrectAnswer }}/{{ quizQuestionsLength }}</h1>
    <RouterLink to="/" class="btn">Go Back</RouterLink>
  </section>
</template>

<style scoped>
.results {
  text-align: center;
  padding: 50px 20px;
  background-color: #191414;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin: 50px auto;
  color: #ffffff;
}

.score-text {
  font-size: 24px;
  color: #b3b3b3;
  margin-bottom: 10px;
  font-family: "Arial", sans-serif;
}

.score {
  font-size: 72px;
  color: #1db954;
  margin-bottom: 30px;
  font-family: "Roboto", sans-serif;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #1db954;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 18px;
  font-family: "Arial", sans-serif;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn:hover {
  background-color: #17a34a;
  transform: scale(1.05);
}

@media (max-width: 600px) {
  .results {
    padding: 30px 15px;
  }

  .score {
    font-size: 48px;
  }

  .score-text {
    font-size: 20px;
  }

  .btn {
    font-size: 16px;
  }
}
</style>
