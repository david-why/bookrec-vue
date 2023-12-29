<script setup lang="ts">
defineProps({ src: { type: String, required: true }, alt: String })
</script>

<template>
  <img class="main-image" :src="src" :alt="alt" />
</template>

<style scoped>
.main-image {
  width: 40%;
  float: right;
  padding: 2%;
  filter: drop-shadow(rgb(187, 119, 102) 0px 0px 2px);
  max-width: 30rem;
}
@media screen and (max-width: 37.5em) {
  .main__image {
    width: 81vw;
    height: 54vw;
    float: none;
    padding: 2vw;
  }
}
</style>
