<template>
  <header>
    <h4>Questions 1/2</h4>
    <div class="bar">
      <div class="bar-progress"></div>
    </div>
  </header>
</template>

<style scoped>
header {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h4 {
  font-size: 24px;
  font-weight: bold;
}

.bar {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: #e0e0e0;
  margin-top: 10px;
}

.bar-progress {
  height: 100%;
  width: 50%;
  background-color: #adf7b6;
  transition: width 0.5s ease;
}
</style>
