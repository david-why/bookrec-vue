<script setup lang="ts">
import { lexileToString } from '@/utils'
import BookDescText from './BookDescText.vue'
import ToggleText from './ToggleText.vue'
import cdata from '@/data'
import BookTag from './BookTag.vue'

const props = defineProps({
  data: {
    type: Object as () => {
      tag: string
      interestMin: number
      interestMax: number
      lexileMin: number
      lexileMax: number
      bookMin: number
      bookMax: number
      count: number
      desc: string
    },
    required: true
  },
  index: { type: Number, required: true }
})

const interest =
  props.data.interestMin === props.data.interestMax
    ? cdata.interestLevels[props.data.interestMin]
    : cdata.interestLevels[props.data.interestMin] +
      '~' +
      cdata.interestLevels[props.data.interestMax]
</script>

<template>
  <div class="tag-card">
    <div class="book-tags">
      <span class="book-index">{{ index + 1 }}.</span>
      <BookTag v-if="data.lexileMin !== Infinity && data.lexileMax !== -Infinity"
        >{{ lexileToString(data.lexileMin) }}~{{ lexileToString(data.lexileMax) }}</BookTag
      >
      <BookTag v-if="data.interestMin !== Infinity && data.interestMax !== -Infinity">
        {{ interest }}/{{ data.bookMin.toFixed(1) }}~{{ data.bookMax.toFixed(1) }}
      </BookTag>
    </div>
    <h2 class="tag-title">
      <a :href="'#/tag/' + data.tag" class="title-link">{{
        data.tag.split('-').slice(1).join('-')
      }}</a>
    </h2>
    <BookDescText v-if="data.desc"><ToggleText :text="data.desc"></ToggleText></BookDescText>
    <div>
      <b>{{ data.count }}</b> books in our library
    </div>
  </div>
</template>

<style scoped>
.title-link {
  color: black;
}
.tag-card {
  margin: 0 0.2em;
}
.tag-card > * {
  padding: 0 0 0.4em;
}
.tag-title {
  margin: 0;
}
</style>
