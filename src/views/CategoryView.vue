<script setup lang="ts">
import type { Book } from '@/books'
import CardList from '@/components/CardList.vue'
import TagCard from '@/components/TagCard.vue'
import TagDescText from '@/components/TagDescText.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import ToggleText from '@/components/ToggleText.vue'
import data from '@/data'
import router from '@/router'
import { useBooksStore } from '@/stores'
import { compareTags } from '@/utils'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const store = useBooksStore()

const category = route.params.category as string

// if (!data.categories[category]) {
//   router.replace({ name: data.homePage })
// }

const loading = ref(true)
const books = ref([] as Book[])
const tagDesc = ref({} as Record<string, string>)
const tags = ref([] as string[])
const desc = ref<string>()

const filteredTags = computed(() => {
  return tags.value
    .filter(
      (t) =>
        t.startsWith(category + '-') /*&&
        (!data.categories[category].descRequired || tagDesc.value[t])*/
    )
    .sort(compareTags)
})
const ranges = computed(() => {
  if (loading.value) {
    return {}
  }
  const res: Record<
    string,
    {
      interestMin: number
      interestMax: number
      lexileMin: number
      lexileMax: number
      bookMin: number
      bookMax: number
      count: number
      desc: string
    }
  > = {}
  for (const tag of filteredTags.value) {
    if (!tag.startsWith(category + '-')) {
      continue
    }
    res[tag] = {
      interestMin: Infinity,
      interestMax: -Infinity,
      lexileMin: Infinity,
      lexileMax: -Infinity,
      bookMin: Infinity,
      bookMax: -Infinity,
      count: 0,
      desc: tagDesc.value[tag]
    }
  }
  for (const book of books.value) {
    for (const tag of book.tags) {
      if (!filteredTags.value.includes(tag)) {
        continue
      }
      res[tag].count++
      res[tag].lexileMin = Math.min(res[tag].lexileMin, book.lexile)
      res[tag].lexileMax = Math.max(res[tag].lexileMax, book.lexile)
      if (book.interestLevel !== null) {
        const interest = data.interestLevels.indexOf(book.interestLevel)
        if (interest === -1) {
          console.warn('book has unknown interest level', book)
        } else {
          res[tag].interestMin = Math.min(res[tag].interestMin, interest)
          res[tag].interestMax = Math.max(res[tag].interestMax, interest)
        }
      }
      if (book.bookLevel !== null) {
        const bookLevel = parseFloat(book.bookLevel)
        let bookMin = res[tag].bookMin
        let bookMax = res[tag].bookMax
        if (bookMin === undefined) {
          bookMin = Infinity
        }
        if (bookMax === undefined) {
          bookMax = -Infinity
        }
        res[tag].bookMin = Math.min(res[tag].bookMin, bookLevel)
        res[tag].bookMax = Math.max(res[tag].bookMax, bookLevel)
      }
    }
  }
  return res
})
const elements = computed(() => {
  const res = []
  for (const tag of filteredTags.value) {
    res.push({ ...ranges.value[tag], tag })
  }
  return res
})

onMounted(async () => {
  const data = await store.getBooks()
  books.value = data.books
  tagDesc.value = data.tagDesc
  tags.value = await store.getTags()
  desc.value = data.selectorDesc[category]
  loading.value = false
})
</script>

<template>
  <TitleComponent>{{ category }}</TitleComponent>
  <TagDescText v-if="desc"><ToggleText :text="desc"></ToggleText></TagDescText>
  <CardList v-if="!loading" :component="TagCard" :elements="elements"></CardList>
</template>
