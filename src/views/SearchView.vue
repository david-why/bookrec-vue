<script setup lang="ts">
import BooksList from '@/components/BooksList.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import { parsePath } from '@/utils';
import { useRoute } from 'vue-router'
const route = useRoute()

const {value: term, filter} = parsePath(route.params.term)
const keywords = term
  .split(/\s+/g)
  .filter((t) => t)

const title = keywords.length === 0 ? 'All books in library' : 'Search: ' + keywords.join(' ')
</script>

<template>
  <TitleComponent>{{ title }}</TitleComponent>
  <BooksList
    :restriction="{ keywords, filter }"
    :prefix="'/search/' + keywords.join(' ')"
  ></BooksList>
</template>
