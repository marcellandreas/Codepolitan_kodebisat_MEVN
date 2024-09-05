<script setup>
import { useRouter } from "vue-router";

const { quiz } = defineProps(["quiz"]);
// const props = defineProps(["quiz"]);
const router = useRouter();
const goToQuiz = () => {
  router.push({ name: "quiz", params: { id: quiz.id } });
};
</script>

<template>
  <div class="card" @click="goToQuiz">
    <img :src="quiz.img" :alt="quiz.title" />
    <div class="card-body">
      <h2 class="card-title">{{ quiz.title }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
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
