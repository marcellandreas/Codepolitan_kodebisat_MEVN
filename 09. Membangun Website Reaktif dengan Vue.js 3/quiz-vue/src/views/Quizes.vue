<script setup>
import { ref, watch } from "vue";
import srcQuiz from "../data/quizes.json";

import QuizCard from "../components/QuizCard.vue";
import { useRoute, useRouter } from "vue-router";

const quizes = ref(srcQuiz);
const router = useRouter();
const search = ref("");

watch(search, () => {
  quizes.value = srcQuiz.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<template>
  <div>
    <header>
      <h1 id="title">Quiz</h1>
      <input
        v-model.trim="search"
        type="text"
        id="search-input"
        placeholder="Search for quizzes..."
      />
    </header>

    <div v-if="quizes.length === 0" class="no-data">
      <img
        src="../assets/no-results.svg"
        alt="No Results"
        class="no-data-image"
      />
      <p class="no-data-text">
        We couldn't find any quizzes that match your search.
      </p>
    </div>

    <section id="quiz-container">
      <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
    </section>
  </div>
</template>

<style scoped>
header {
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 30px;
}

#title {
  font-weight: bold;
}

#search-input {
  border: none;
  background-color: #c9c9d8;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
}

#quiz-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.card {
  width: 270px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}

.card-body {
  padding: 0 10px;
}

.card-body h2 {
  font-weight: bold;
}

.no-data {
  text-align: center;
  margin-top: 50px;
  color: #b3b3b3;
}

.no-data-image {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.no-data-text {
  font-size: 18px;
  font-weight: 500;
}
</style>
