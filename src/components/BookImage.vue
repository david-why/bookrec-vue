<script setup lang="ts">
import { ref } from 'vue'

defineProps({ src: { type: String, required: true }, alt: String })

const img = ref<HTMLImageElement>()
const replaced = ref(false)

function onError() {
  if (!replaced.value) {
    replaced.value = true
    if (img.value !== undefined) {
      img.value.src = './img/cover.svg'
    }
  }
}
</script>

<template>
  <img class="book-image" :src="src" :alt="alt" @error="onError" ref="img" />
</template>
