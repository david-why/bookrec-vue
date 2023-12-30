<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import BookTag from './BookTag.vue';
const i18n = useI18n()

function setLanguage(lang: string) {
  i18n.locale.value = lang
}
</script>

<template>
  <div class="lang-select">
    <BookTag class="lang" @click="setLanguage('en')">English</BookTag>
    <BookTag class="lang" @click="setLanguage('zh')">中文</BookTag>
  </div>
</template>

<style scoped>
.lang-select {
  text-align: center;
}
.lang {
  cursor: pointer;
}
</style>
