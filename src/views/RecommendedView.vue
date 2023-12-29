<script setup lang="ts">
import BooksList from '@/components/BooksList.vue'
import TitleComponent from '@/components/TitleComponent.vue'
</script>

<template>
  <TitleComponent>Recommended books</TitleComponent>
  <BooksList :restriction="{ additional: ['recommended'] }" prefix="/recommended"></BooksList>
</template>
