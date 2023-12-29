<script setup lang="ts">
import BooksList from '@/components/BooksList.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import { lexileToString, parsePath, stringToLexile } from '@/utils'
import { useRoute } from 'vue-router'
const route = useRoute()

const { value: lexileString, filter } = parsePath(route.params.lexile)
const lexile = stringToLexile(lexileString)

const title = 'Lexile: ' + lexileToString(lexile)
</script>

<template>
  <TitleComponent
    :prev="'/lexile/' + (Math.floor(lexile / 25) * 25 - 25)"
    :next="'/lexile/' + (Math.floor(lexile / 25) * 25 + 25)"
  >
    {{ title }}
  </TitleComponent>
  <BooksList
    :restriction="{ lexileMin: lexile - 100, lexileMax: lexile + 50, filter }"
    :prefix="'/lexile/' + lexileString"
  ></BooksList>
</template>
