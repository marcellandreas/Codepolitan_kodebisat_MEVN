<script setup>
import QuizContent from "@/components/QuizContent.vue";
import QuizHeader from "@/components/QuizHeader.vue";
import QuizResult from "@/components/QuizResult.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json";

const route = useRoute(); //untuk mendapatkan nilai parameter dari url
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);

const numberOfCorrectAnswer = ref(0);
const currentQuestionIndex = ref(0);

// initial value

const showResult = ref(false);

console.log("nilai: ", numberOfCorrectAnswer);
// dengan menggunakan computed

const questionPage = computed(() => {
  return `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`;
});

const barPercentage = computed(() => {
  return `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`;
});

// const onSelectOption = (option) => {
//   if (option.correct) {
//     numberOfCorrectAnswer.value++;
//   }

//   //   cek nilai
//   if (currentQuestionIndex.value === quiz.questions.length - 1) {
//     showResult.value = true;
//     return;
//   }

//   currentQuestionIndex.value++;
// };

function onSelectOption(option) {
  if (option.correct) {
    numberOfCorrectAnswer.value++;
  }

  if (currentQuestionIndex.value === quiz.questions.length - 1) {
    showResult.value = true;
    return;
  }

  currentQuestionIndex.value++;
}

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
  <QuizHeader :questionPage="questionPage" :barPercentage="barPercentage" />
  <QuizContent
    v-if="!showResult"
    :question="quiz.questions[currentQuestionIndex]"
    @selectOption="onSelectOption"
  />
  <QuizResult
    v-else
    :quizQuestionsLength="quiz.questions.length"
    :numberOfCorrectAnswer="numberOfCorrectAnswer"
  />
  <!-- <button
    @click="currentQuestionIndex++"
    :disabled="currentQuestionIndex === quiz.questions.length - 1"
  >
    Next
  </button> -->
</template>

<style scoped></style>
