<script setup lang="ts">
import type { BooksData } from '@/books'
import BooksList from '@/components/BooksList.vue'
import TagDescText from '@/components/TagDescText.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import data from '@/data'
import { useBooksStore } from '@/stores'
import { parsePath } from '@/utils'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = useBooksStore()

const loading = ref(true)
const books = ref(undefined as unknown as BooksData)

onMounted(async () => {
  books.value = await store.getBooks()
  loading.value = false
})

const { value: tag, filter } = parsePath(route.params.tag)

const tagParts = tag.split('-', 2)

const title = tagParts.length > 1 && data.categories.includes(tagParts[0]) ? tagParts[1] : tag
</script>

<template>
  <template v-if="!loading">
    <TitleComponent>{{ title }}</TitleComponent>
    <BooksList
      :restriction="{ tags: [tag], filter }"
      :prefix="'/tag/' + tag"
      :description="books.tagDesc[tag]"
    ></BooksList>
  </template>
</template>
