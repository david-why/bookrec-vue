<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({ prev: String, next: String })

function onPrev() {
  router.push({ path: props.prev as string })
}

function onNext() {
  router.push({ path: props.next as string })
}
</script>

<template>
  <div class="title">
    <span class="button" :hidden="!prev" @click="onPrev">&#8678;</span>
    <h1 class="h1"><slot /></h1>
    <span class="button" :hidden="!next" @click="onNext">&#8680;</span>
  </div>
</template>

<style scoped>
.title {
  padding: 0 1em;
  color: white;
  background-color: var(--background-color-trans);
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.button {
  font-size: 2em;
  cursor: pointer;
  margin: 0.4em 0 0;
}
.h1 {
  margin: 0;
  padding: 0.3em 0;
  flex: 1 0 0;
}
@media screen and (max-width: 37.5em) {
  .title {
    justify-content: center;
    margin: 0 2vw;
  }
  .button {
    font-size: 8vw;
    margin: 0;
  }
}
@media print {
  .button {
    display: none;
  }
  .h1 {
    color: black;
  }
}
</style>
