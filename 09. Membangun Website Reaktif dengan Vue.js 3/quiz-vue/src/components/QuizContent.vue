<template>
  <section id="question-container">
    <h1 class="question-title">What 1 + 1</h1>
  </section>
  <section id="options-container">
    <div class="option">
      <p class="option-label">a</p>
      <div class="option-value">1</div>
    </div>
    <div class="option">
      <p class="option-label">a</p>
      <div class="option-value">1</div>
    </div>
    <div class="option">
      <p class="option-label">a</p>
      <div class="option-value">1</div>
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
