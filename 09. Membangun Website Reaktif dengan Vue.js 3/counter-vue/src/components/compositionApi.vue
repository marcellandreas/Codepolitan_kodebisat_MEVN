<template>
  <main>
    <h1>Counter</h1>
    <span id="value">{{ count }}</span>
    <div>
      <button @click="mengurangi" id="decrease">-</button>
      <button @click="menambahkan" id="increase">+</button>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);

    function menambahkan() {
      count.value++;
    }

    function mengurangi() {
      count.value--;
    }

    return {
      count,
      menambahkan,
      mengurangi,
    };
  },
};
</script>

<style scoped>
main {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

main:hover {
  transform: translateY(-5px);
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
}

#value {
  font-size: 3rem;
  color: #444;
  margin: 20px 0;
  display: block;
}

button {
  font-size: 1.5rem;
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease,
    box-shadow 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:active {
  transform: scale(0.95);
}

button#decrement {
  background-color: #dc3545;
}

button#decrement:hover {
  background-color: #c82333;
}

button#increment {
  background-color: #28a745;
}

button#increment:hover {
  background-color: #218838;
}

button:focus {
  outline: none;
}
</style>
