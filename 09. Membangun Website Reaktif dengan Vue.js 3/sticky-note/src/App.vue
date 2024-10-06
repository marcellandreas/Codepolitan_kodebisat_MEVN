<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

const showForm = ref(false);
const isEditing = ref(false);
const editingMemoId = ref(null);

const handleshowForm2 = (memo = null) => {
  if (memo) {
    newMemo.value = memo.memo;
    isEditing.value = true;
    editingMemoId.value = memo.id;
  } else {
    newMemo.value = "";
    isEditing.value = false;
    editingMemoId.value = null;
  }
  showForm.value = !showForm.value;
};

const newMemo = ref("");
const memos = ref([]);

const errorMessage = ref("");

function addMemo() {
  if (!newMemo.value) {
    errorMessage.value = "Please enter a memo";
    return;
  }

  if (isEditing.value) {
    const memoIndex = memos.value.findIndex(
      (memo) => memo.id === editingMemoId.value
    );
    if (memoIndex !== -1) {
      memos.value[memoIndex].memo = newMemo.value;
    }
  } else {
    memos.value.push({
      id: Date.now(),
      memo: newMemo.value,
      date: new Date().toLocaleDateString("en-GB"),
      backgroundColor: getRandomColor(),
    });
  }

  newMemo.value = "";
  showForm.value = false;
  errorMessage.value = "";
}

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function deleteMemo(id) {
  memos.value = memos.value.filter((memo) => memo.id !== id);
}
</script>

<template>
  <main>
    <Navbar @toggleForm="handleshowForm2" />
    <div class="container">
      <!-- <header>
        <h1 class="header-title">Memos</h1>
        <button @click="handleshowForm2()" class="header-button">+</button>
      </header> -->
      <p class="not-found-memos" v-if="memos.length === 0">
        Memos belum ada data
      </p>
      <div class="card-container">
        <div
          v-for="memo in memos"
          :key="memo.id"
          class="card"
          :style="{ backgroundColor: memo.backgroundColor }"
        >
          <div class="card-content">
            <p>{{ memo.memo }}</p>
            <p class="card-date">{{ memo.date }}</p>
          </div>
          <div class="card-actions">
            <button @click="handleshowForm2(memo)" class="card-button">
              Edit
            </button>
            <button
              @click="deleteMemo(memo.id)"
              class="card-button delete-button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <div v-if="showForm" class="form-overlay">
      <div class="form-modal">
        <button @click="handleshowForm2()" class="form-close-btn">
          &times;
        </button>
        <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>
        <textarea v-model="newMemo" cols="30" rows="10"></textarea>
        <button @click="addMemo" class="form-save-btn">
          {{ isEditing ? "Update" : "Save" }}
        </button>
      </div>
    </div>
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #141414;
}
main {
  height: 100%;
  width: 100%;
}

.container {
  max-width: 1000px;

  min-height: 100vh;
  padding: 10px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-size: 48px;
  font-weight: bold;
  color: #007bff;
}

.header-button {
  border: none;
  background: #007bff;
  padding: 12px;
  height: 54px;
  width: 54px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.header-button:hover {
  background: #0056b3;
}

.card-container {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background-color: #ffa6c1;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-content {
  margin-bottom: 10px;
}

.card-date {
  font-size: 12px;
  color: #333;
}

.card-actions {
  display: flex;
  justify-content: space-between;
}

.card-button {
  background-color: #495a7d;
  border: none;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.card-button:hover {
  background-color: #394266;
}

.delete-button {
  background-color: #d9534f;
}

.delete-button:hover {
  background-color: #c9302c;
}

.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-modal {
  width: 420px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.form-save-btn {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: #495a7d;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
  color: white;
}

.form-close-btn {
  position: absolute;
  top: 5px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
}

.form-error {
  color: red;
}

textarea {
  padding: 10px;
}

.not-found-memos {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  /* border: 2px solid #0056b3; */
  height: 50vh;
  font-size: 20px;
  font-variant: small-caps;
  color: white;
}
</style>
