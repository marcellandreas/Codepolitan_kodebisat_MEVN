<script setup>
import QuizContent from "@/components/QuizContent.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json";

const route = useRoute(); //untuk mendapatkan nilai parameter dari url

const quizId = parseInt(route.params.id);

const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);

// dengan menggunakan computed

const questionPage = computed(() => {
  return `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`;
});

// dengan menggunakan watch
// const questionPage = ref(
//   `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`
// );

// watch(
//   () => currentQuestionIndex.value,
//   () => {
//     questionPage.value = `${currentQuestionIndex.value + 1} / ${
//       quiz.questions.length
//     }`;
//   }
// );
</script>

<template>
  <QuizHeader :questionPage="questionPage" />
  <QuizContent :question="quiz.questions[currentQuestionIndex]" />
  <button
    @click="currentQuestionIndex++"
    :disabled="currentQuestionIndex === quiz.questions.length - 1"
  >
    Next
  </button>
</template>

<style scoped></style>
