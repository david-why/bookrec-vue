<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const i18n = useI18n()

function setLanguage(lang: string) {
  i18n.locale.value = lang
}
</script>

<template>
  <div class="lang-select">
    <span class="book-tag lang" @click="setLanguage('en')">English</span>
    <span class="book-tag lang" @click="setLanguage('zh')">中文</span>
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
