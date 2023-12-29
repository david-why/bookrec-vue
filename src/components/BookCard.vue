<script setup lang="ts">
import type { Book, Recommendation } from '@/books'
import { useBooksStore } from '@/stores'
import { lexileToString } from '@/utils'
import { onMounted, ref } from 'vue'
import BookDescText from './BookDescText.vue'
import ToggleText from './ToggleText.vue'
const store = useBooksStore()

const props = defineProps({
  data: { type: Object as () => Book & { unavailable?: boolean }, required: true },
  index: { type: Number, required: true }
})
const emit = defineEmits<{
  (event: 'toggle', open: boolean): void
}>()

const isOpen = ref(false)
const recsOpen = ref(false)
const recs = ref<Recommendation[]>()

function logBook() {
  console.log('clicked book : ', props.data)
}
function onToggle(open: boolean) {
  isOpen.value = open
  emit('toggle', open)
}
function onToggleRecs() {
  recsOpen.value = !recsOpen.value
}

onMounted(async () => {
  const data = await store.getData()
  recs.value = data.recommendations[props.data.isbn]
})
</script>

<template>
  <div class="book-card">
    <img
      class="book-image"
      :alt="data.title"
      :src="
        data.coverImage === '!'
          ? '/img/covers/' + data.isbn.substring(data.isbn.length - 2) + '/' + data.isbn + '.webp'
          : data.coverImage
      "
      @dblclick="logBook"
    />
    <div class="book-text">
      <div class="book-tags">
        <span class="book-index">{{ index + 1 }}.</span>
        <span v-text="lexileToString(data.lexile)" class="book-tag"></span>
        <span
          v-if="data.bookLevel !== null && data.interestLevel !== null"
          v-text="data.bookLevel + '/' + data.interestLevel"
          class="book-tag"
        ></span>
        <span
          v-text="data.location"
          :class="['book-tag', ...(data.unavailable ? ['unavailable-tag'] : [])]"
        ></span>
      </div>
      <h2 class="book-title" v-text="data.title"></h2>
      <div class="book-author" v-text="data.author"></div>
      <BookDescText>
        <ToggleText
          v-if="data.description"
          :text="data.description"
          :length="120"
          @toggle="onToggle"
        ></ToggleText>
      </BookDescText>
      <div class="book-tags" v-if="isOpen">
        <div class="book-rating">
          <template v-if="data.rateCount !== null && data.rating !== null">
            <b>{{ Math.round(data.rating * 20) }}</b
            >% of <b>{{ data.rateCount }}</b> readers like it
          </template>
        </div>
        <span class="book-tag">ISBN: {{ data.isbn }}</span>
      </div>
    </div>
    <div class="book-recs" v-if="recs">
      <a href="javascript:void(0)" class="book-recs-link" v-if="!recsOpen" @click="onToggleRecs()">
        Click here to read {{ recs.length }} recommendation{{ recs.length > 1 ? 's' : '' }}
      </a>
      <div class="book-recs-recs" v-else @click="onToggleRecs">
        <p v-for="rec in recs" :key="rec.id">
          <strong class="book-rec-name" v-text="rec.name"></strong>: {{ '⭐'.repeat(rec.rating) }}
          <span class="book-rec-text" v-text="rec.text"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.book-card {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  align-items: flex-start;
}
.book-card > * {
  margin: 0 0.2em;
}
.book-image {
  flex: 0 0 auto;
  width: 8em;
  filter: drop-shadow(0.1em 0.1em 0.15em #666);
}
.book-text {
  flex: 1 0 0;
}
.book-text > * {
  padding: 0 0 0.4em;
}
.unavailable-tag {
  text-decoration: line-through wavy red;
}
.book-title {
  margin: 0;
}
.book-rating {
  font-style: italic;
  text-align: left;
  white-space: nowrap;
  flex: 1 0 0;
}
.book-recs {
  grid-column: span 2;
}
.book-recs-link {
  color: rgb(221, 51, 51);
  display: block;
  width: 100%;
  text-align: center;
}
.book-rec-name {
  color: rgb(51, 51, 255);
}
.book-rec-text {
  color: rgb(204, 51, 51);
  text-indent: -1em;
}
@media screen and (max-width: 37.5em) {
  .book-image {
    flex: 0 0 auto;
    width: 30vw;
    align-self: center;
  }
  .book-text {
    align-self: flex-start;
    font-size: 4vw;
  }
  .book-card {
    padding: 2vw;
  }
}
</style>
