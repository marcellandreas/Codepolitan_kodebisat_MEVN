<script setup>
import { useRouter } from "vue-router";

const { quiz } = defineProps(["quiz"]);
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
      <p class="question-count">{{ quiz.questions.length }} questions</p>
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
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  background-color: #191414; /* Hitam */
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 0;
}

.card-body {
  padding: 15px;
  background-color: #191414;
}

.card-body h2 {
  font-weight: bold;
  color: #1db954;
  margin: 0 0 10px 0;
  font-size: 18px;
}

.card-body .question-count {
  color: #b3b3b3;
  font-size: 14px;
  margin-top: 5px;
}

@media (max-width: 768px) {
  .card {
    width: 100%;
    margin-right: 0;
  }
}
</style>
