<script setup lang="ts">
import BooksList from '@/components/BooksList.vue'
import TitleComponent from '@/components/TitleComponent.vue'
import data from '@/data'
import router from '@/router'
import { parsePath } from '@/utils'
import { useRoute } from 'vue-router'
const route = useRoute()

const GRADES = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

const { value: gradeString, filter } = parsePath(route.params.grade)
const grade = GRADES.indexOf(gradeString)
if (grade === -1) {
  router.replace({ name: data.homePage })
}
</script>

<template>
  <TitleComponent>Grade: {{ gradeString }}</TitleComponent>
  <BooksList
    :restriction="{ filter, tags: ['Grades-Grade ' + gradeString] }"
    :prefix="'/grade/' + gradeString"
  ></BooksList>
</template>
