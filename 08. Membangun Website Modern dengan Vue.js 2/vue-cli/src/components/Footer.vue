<template>
  <footer class="footer bg-dark text-white py-4">
    <div class="footer-bottom text-center mt-3">
      <p class="mb-0">
        &copy; 2024 Marcell Andreas Samadhani Duha - Codepolitan
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer-pre",
};
</script>

<style scoped>
.footer {
  background-color: #343a40;
  color: white;
  width: 100%;
}

.footer a {
  color: white; /* Warna tautan */
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.footer i {
  margin-right: 10px;
}

.footer-bottom {
  width: 100%;
  padding: 10px 0;
  background-color: #2c2c2c;
}
</style>
