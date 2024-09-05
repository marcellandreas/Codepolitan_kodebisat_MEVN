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
    return quiz.title.toLowerCase().includes(search.value.toLocaleLowerCase());
  });
});
</script>

<template>
  <header>
    <h1 id="title">Quiz</h1>
    <input v-model.trim="search" type="text" id="search-input" />
  </header>

  <p v-if="quizes.length == 0">Data tidak ada</p>
  <section id="quiz-container">
    <!-- <div v-for="quiz in quizes" :key="quiz.id" class="card">
        <img :src="quiz.img" :alt="quiz.title" />
        <div class="card-body">
          <h2 class="card-title">{{ quiz.title }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </div>
      </div> -->
    <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
  </section>
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
</style>
