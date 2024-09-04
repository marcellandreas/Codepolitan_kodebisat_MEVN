<script setup>
import { ref, watch } from "vue";
import srcQuiz from "./data/quizes.json";

import QuizCard from "./components/QuizCard.vue";

const quizes = ref(srcQuiz);

const search = ref("");

watch(search, () => {
  quizes.value = srcQuiz.filter((quiz) => {
    return quiz.title.toLowerCase().includes(search.value.toLocaleLowerCase());
  });
});
</script>

<template>
  <main>
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
      <QuizCard v-for="quiz in quizes" :key="quiz.id" v-bind:quiz="quiz" />
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
}

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
</style>
