<script setup>
import { defineProps } from "vue";

const { questionPage, barPercentage } = defineProps([
  "questionPage",
  "barPercentage",
]);
</script>

<template>
  <header>
    <h4>Question {{ questionPage }}</h4>
    <div class="bar">
      <div class="bar-progress" :style="{ width: barPercentage }"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191414;
  padding: 15px;
  border-radius: 8px;
}

header h4 {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

.bar {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: #b3b3b3;
  margin-top: 10px;
}

.bar-progress {
  height: 100%;
  width: 0%;
  background-color: #1db954;
  transition: width 0.5s ease;
  border-radius: 5px;
}
</style>
