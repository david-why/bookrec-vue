<script setup lang="ts">
import type { Book, DataData, Restriction } from '@/books'
import data from '@/data'
import router from '@/router'
import { useBooksStore } from '@/stores'
import { compareTags, filterBooks } from '@/utils'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import BookCard from './BookCard.vue'
import CardList from './CardList.vue'
import StatusBar from './StatusBar.vue'
import TagDescText from './TagDescText.vue'
import ToggleText from './ToggleText.vue'
const route = useRoute()
const store = useBooksStore()

const props = defineProps({
  restriction: { type: Object as () => Restriction, required: true },
  prefix: String,
  description: String
})

const restriction = { ...props.restriction } as Omit<Restriction, 'filter'> & { filter: string[] }
restriction.filter = restriction.filter || []

const filterSelect = ref(undefined as unknown as HTMLSelectElement)
const shown = ref(12)
const loading = ref(true)
const books = ref<Book[]>([])
const bdata = ref<DataData>()

const filteredBooks = computed(() => {
  if (bdata.value === undefined) {
    return []
  }
  const filtered: (Book & { unavailable?: boolean })[] = filterBooks(
    books.value,
    bdata.value,
    restriction
  )
  for (const book of filtered) {
    if (data.config?.useUnavailable && bdata.value?.unavailable.includes(book.isbn)) {
      book.unavailable = true
    }
  }
  return filtered
})
const sortedBooks = computed(() => {
  return [...filteredBooks.value].sort(
    (a, b) =>
      ((b.rating || 0) * 0.4 - 1) * (b.rateCount || 0) -
      ((a.rating || 0) * 0.4 - 1) * (a.rateCount || 0)
  )
})
const limitedBooks = computed(() => {
  return sortedBooks.value.slice(0, shown.value)
})
const filterOptions = computed(() => {
  const allTags: string[] = []
  const tagsCount: Record<string, number> = {}
  for (const book of filteredBooks.value) {
    for (const tag of book.tags) {
      if (!restriction.filter.includes(tag) && !restriction.tags?.includes(tag)) {
        if (!allTags.includes(tag)) {
          allTags.push(tag)
          tagsCount[tag] = 1
        } else {
          tagsCount[tag]++
        }
      }
    }
  }
  allTags.sort((a, b) => tagsCount[b] - tagsCount[a])
  const tags = allTags.slice(0, 100)
  tags.sort(compareTags)
  const options: { value: string; selected: boolean; text: string }[] = []
  const curValue = restriction.filter.join(';')
  if (restriction.filter.length) {
    options.push({
      value: '',
      selected: false,
      text: '*** CLEAR FILTERS ***'
    })
    options.push({
      value: curValue,
      selected: true,
      text: restriction.filter.join('; ') + ' (' + filteredBooks.value.length + ')'
    })
  } else {
    options.push({
      value: '',
      selected: true,
      text: '*** FILTER *** (Total ' + filteredBooks.value.length + ')'
    })
  }
  tags.forEach((t) =>
    options.push({
      value: curValue + (curValue ? ';' : '') + t,
      selected: false,
      text: t + ' (' + tagsCount[t] + ')'
    })
  )
  return options
})

function onScroll() {
  if (
    shown.value < filteredBooks.value.length &&
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
  ) {
    shown.value += 12
  }
}

function onFilter() {
  const filter = filterSelect.value.value.split(';')
  const suffix = filter ? ';' + filter.join(';') : ''
  if (props.prefix) {
    router.push({ path: props.prefix + suffix })
  } else {
    router.push({ path: route.path.split(';')[0] + suffix })
  }
}

onMounted(async () => {
  window.addEventListener('scroll', onScroll)
  books.value = (await store.getBooks()).books
  bdata.value = await store.getData()
  loading.value = false
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <template v-if="!loading">
    <div class="filter-container">
      <select class="filter" ref="filterSelect" @change="onFilter">
        <option
          v-for="option in filterOptions"
          :key="option.value"
          :value="option.value"
          :selected="option.selected"
          v-text="option.text"
        ></option>
      </select>
    </div>
    <TagDescText v-if="description"
      ><ToggleText :text="description" :open="true"></ToggleText
    ></TagDescText>
    <CardList :elements="limitedBooks" :component="BookCard"></CardList>
    <StatusBar>
      <b>{{ Math.min(shown, filteredBooks.length) }}</b> of <b>{{ filteredBooks.length }}</b> books
      are listed.
    </StatusBar>
  </template>
</template>

<style scoped>
.filter-container {
  padding: 0 1em;
  color: white;
  background-color: var(--background-color-trans);
  text-align: center;
}
.filter {
  font-size: 1.2em;
  padding: 0.3em;
  margin: 0 0.2em 0.8em;
  background-color: #28282880;
  width: 95%;
  color: white;
}
@media screen and (max-width: 37.5em) {
  .filter {
    font-size: 5vw;
    margin: 0 0 0.7em;
    text-align: center;
  }
}
</style>
