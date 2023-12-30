<script setup lang="ts">
defineProps({ unavailable: { type: Boolean, default: false } })
</script>

<template>
  <span :class="unavailable ? ['unavailable-tag', 'book-tag'] : ['book-tag']"><slot /></span>
</template>

<style scoped>
.book-tag {
  background-color: #555;
  color: white;
  padding: 0.2em 0.4em;
  margin: 0.2em;
  border: black;
  border-radius: 0.2em;
  white-space: nowrap;
  font-size: 0.8em;
  font-family:
    Courier New,
    monospace;
  font-weight: bold;
  line-height: 1.4em;
}
.unavailable-tag {
  text-decoration: line-through wavy red;
}
@media screen and (max-width: 37.5em) {
  .book-tag {
    font-size: 3.3vw;
    padding: 0.8vw 1.6vw;
    margin: 0.8vw;
    border-radius: 0.8vw;
    line-height: 5.6vw;
  }
}
</style>
