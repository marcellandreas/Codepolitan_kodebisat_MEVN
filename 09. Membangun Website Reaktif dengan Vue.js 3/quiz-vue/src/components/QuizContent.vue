<script setup>
import { defineProps } from "vue";
const { question } = defineProps(["question"]);

const emit = defineEmits(["selectOption"]);
const emitSelectionOption = (option) => {
  emit("selectOption", option);
};
</script>

<template>
  <section id="question-container">
    <h1 class="question-title">{{ question.text }}</h1>
  </section>
  <section
    v-for="option in question.answers"
    :key="option.id"
    id="options-container"
    @click="emitSelectionOption(option)"
  >
    <div class="option">
      <p class="option-label">{{ option.label }}</p>
      <div class="option-value">{{ option.text }}</div>
    </div>
  </section>
</template>

<style scoped>
#question-container {
  margin-top: 20px;
}

.question-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.option {
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.option:hover {
  background-color: #f5f5f5;
}

.option-label {
  font-size: 18px;
  font-weight: bold;
  width: 40px;
  height: 40px;
  background-color: rgb(151, 136, 136);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 10px;
}

.option-value {
  font-size: 18px;
  font-weight: bold;
  padding: 0 10px;
  background-color: rgb(158, 80, 80);
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
}
</style>
