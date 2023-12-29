<script setup lang="ts"></script>

<template>
  <div class="status"><slot /></div>
</template>

<style scoped>
.status {
  padding: 0.2em 0.5em;
  color: white;
  background-color: #0009;
  font-style: italic;
}
@media screen and (max-width: 37.5em) {
  .status {
    text-align: center;
    font-size: 4vw;
  }
}
</style>
